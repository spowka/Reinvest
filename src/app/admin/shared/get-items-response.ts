export interface GetItemsResponse<TItem> {
    pageIndex: number;
    pageCount: number;
    total: number;
    items: TItem[];
}
