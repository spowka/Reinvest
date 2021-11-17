import { ProfileOrder, ProfileOrderRow, GetOrderDetailsResponse } from '../../../shared/profile/profile.model';
import { ProfileService } from '../../../shared/profile/profile.service';
import { DialogService } from 'primeng/api';
import { ProfileOrderStatusHistoryComponent } from '../profile-order-status-history/profile-order-status-history.component';

export class OrderVM {
    id: string;
    createDate: string;
    rows: ProfileOrderRow[];
    totalPrice: string;
    status: string;
    statusDate: string;

    detailsVisible: boolean;
    details: GetOrderDetailsResponse;

    constructor(
        private profileService: ProfileService,
        private dialogService: DialogService,
        src: ProfileOrder,
    ) {
        this.id = src.id;
        this.createDate = src.createDate;
        this.rows = src.rows;
        this.totalPrice = src.totalPrice;
        this.status = src.status;
        this.statusDate = src.statusDate;
    }

    toggleDetails() {
        this.detailsVisible = !this.detailsVisible;
        if (this.detailsVisible) {
            this.details = null;
            this.profileService.getOrderDetails(this.id).subscribe((data) => {
                this.details = data;
            }, error => {
            });
        }
    }

    showHistory() {
        const ref = this.dialogService.open(ProfileOrderStatusHistoryComponent, {
            header: 'История статусов',

            style: { 'max-height': '95%', overflow: 'auto' },
            data: {
                orderId: this.id,
                orderDate: this.createDate
            }
        });
    }
}
