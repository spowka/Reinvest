export function RemoveFromArr(array: any[], id: string) {
    const indexField = array.findIndex((item: any) => item.id === id);
    array.splice(indexField, 1);
}

export function FindInArr(array: any[], id: string) {
    const result = array.find((item: any) => item.id === id);
    return result;
}

export function RecursiveAction(array: any[], action: (item: any) => void) {
    array.forEach(item => {
        action(item);
        if (item.children && Array.isArray(item.children)) {
            RecursiveAction(item.children, action);
        }
    });
}

export function InsertEmptyNode(array: any[], node: any): any[] {
    return [node].concat(array);
}