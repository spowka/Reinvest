export function iterateTree<T>(
    tree: T | T[] | null | undefined,
    childrenAttrName: string,
    callback: (node: T, chain: T[]) => void,
    chain = <T[]>[]
) {
    if (!tree) return;

    if (!Array.isArray(tree)) {
        tree = [tree];
    }
    tree.forEach(t => {
        callback(t, chain);

        const children = <T[]>(<any>t)[childrenAttrName];
        const newChain = chain.concat([t]);
        children &&
            iterateTree(children, childrenAttrName, callback, newChain);
    });
}
