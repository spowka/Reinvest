import { DialogService } from 'primeng/api';
import { CustomerService } from 'src/app/admin/shared/customer/customer.service';
import { CustomerOrderRow, CustomerOrder } from 'src/app/admin/shared/customer/customer.model';
import { CustomerOrderStatusHistoryComponent } from '../customer-order-status-history/customer-order-status-history.component';
import { FormGroup, FormBuilder } from '@angular/forms';

export class OrderVM {
    id: string;
    createDate: string;
    rows: CustomerOrderRow[];
    totalPrice: string;
    status: string;
    statusDate: string;

    detailsVisible: boolean;

    constructor(
        dialogService: DialogService,
        src: CustomerOrder
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
    }

    closeDetails() {
        this.detailsVisible = false;
    }

    get detailsElementId() {
        return `order-details-${this.id}`;
    }
}