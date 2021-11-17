import { DialogService } from 'primeng/api';
import { ProfileOrderRow, ProfileOrder } from 'src/app/site/shared/profile/profile.model';
import { CustomerOrderStatusHistoryComponent } from '../customer-order-status-history/customer-order-status-history.component';
import { OrderService } from 'src/app/admin/shared/order/order.service';
import { GetOrderDetailsForEmployeeResponse } from 'src/app/admin/shared/order/order.model';
import { getStatusLabel } from 'src/app/admin/components/+catalog/orders/order-statuses';

export class OrderVM {
    id: string;
    createDate: string;
    rows: ProfileOrderRow[];
    totalPrice: string;
    status: string;
    statusDate: string;

    detailsVisible: boolean;
    details: GetOrderDetailsForEmployeeResponse;

    constructor(
        private orderService: OrderService,
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
            this.orderService.getOrderDetails(this.id).subscribe((data) => {
                this.details = data;
            }, () => {
            });
        }
    }

    showHistory() {
        const ref = this.dialogService.open(CustomerOrderStatusHistoryComponent, {
            header: 'История статусов',
            style: { 'max-height': '95%', overflow: 'auto' },
            data: {
                orderId: this.id,
                orderDate: this.createDate
            }
        });
    }

    get detailsElementId() {
        return `order-details-${this.id}`;
    }

    getStatusLabel() {
        return getStatusLabel(this.details.status);
    }
}
