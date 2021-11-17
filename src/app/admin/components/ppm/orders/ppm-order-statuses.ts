import { allOrderStatuses as adminAllOrderStatuses } from 'src/app/admin/components/+catalog/orders/order-statuses';

export const allOrderStatuses = [
  { label: 'Ожидает приемки', value: 'SentToPickPoint' },
  { label: 'Ожидает выдачи', value: 'ReadyToTake' },
  { label: 'Выдан', value: 'DeliveredByPickPoint' },
  { label: 'Возврат в офис', value: 'ReturningToOffice' },
  { label: 'Возвращен в офис', value: 'ReturnedToOffice' },
];

export function getOrderStatuses(statuses: string[]): any[] {
  var result = [{ label: 'Все', value: null }];
  result = result.concat(allOrderStatuses.filter(orderStatus => statuses.includes(orderStatus.value)));
  return result;
}

export function getStatusLabel(value: string): string {
  var status = allOrderStatuses.find(t => t.value == value) || adminAllOrderStatuses.find(t => t.value == value);
  return status && status.label || value;
}