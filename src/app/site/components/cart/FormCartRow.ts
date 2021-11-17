import { CartRow, DetailRow } from 'src/app/admin/shared/cart/cart.model';

export class FormCartRow implements CartRow {
  id: string;
  previewImage: string;
  title: string;
  path: string;
  rowQuantity: number;
  rowPrice: number;
  detailRows: DetailRow[];

  isDeleted: boolean = false;
}
