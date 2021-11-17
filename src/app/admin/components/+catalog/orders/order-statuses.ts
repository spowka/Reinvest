export const allOrderStatuses = [
  { label: 'Ожидает исполнения', value: 'New' },
  { label: 'В печати', value: 'Printing' },
  { label: 'Частично исполнен', value: 'PartialPrinted' },
  { label: 'Напечатан', value: 'Printed' },
  { label: 'Передан в упаковку', value: 'Packaging' },
  { label: 'Готов к отправке в ТК', value: 'ReadyToSendToTransportCompany' },
  { label: 'Готов к отправке в ПС', value: 'ReadyToSendToPickPoint' },
  { label: 'Отправлен в ТК', value: 'SentToTransportCompany' },
  { label: 'Отправлен в ПС', value: 'SentToPickPoint' },
  { label: 'Ожидает выдачи', value: 'ReadyToTake' },
  { label: 'Ожидает приемки из ПС', value: 'ReturningToOffice' },
  { label: 'Доставлен', value: 'DeliveredByTransportCompany' },
  { label: 'Выдан', value: 'DeliveredByPickPoint' },
  { label: 'Возвращен в офис из ПС', value: 'ReturnedToOffice' },
];

export function getOrderStatuses(statuses: string[]): any[] {
  var result = [{ label: 'Все', value: null }];
  result = result.concat(allOrderStatuses.filter(orderStatus => statuses.includes(orderStatus.value)));
  return result;
}

export function getStatusLabel(value: string): string {
  var status = allOrderStatuses.find(t => t.value == value);
  return status && status.label || value;
}