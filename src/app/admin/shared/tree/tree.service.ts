import { Injectable } from '@angular/core';
import { CatalogLevel } from '../catalog/catalog.model';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  //Метод с помощью рекурсии находит путь к элементу в дереве.
  //Поиск идет по id, возвращается массив из уровней (элементов дерева) от начального к искомому элементу
  public FindElementPath(elements: any[], id: string, path: any[]) {
    return elements.map(element => {
      if (element.id === id || (element.data && element.data.id === id)) {
        return path.concat([element]);
      }
      if (element.children != null) {
        return this.FindElementPath(element.children, id, path.concat([element]));
      }
      return null;
    }).find((e: any[]) => e != null);
  }

  public ChildrenToSelectItemArray(catalogLevel: CatalogLevel, emptyLabel: string) {
    return this.ToSelectItemArray(catalogLevel.children)
      .concat(catalogLevel && [{ label: emptyLabel, value: catalogLevel.id }] || []);
  }

  public ToSelectItemArray(catalogLevels: CatalogLevel[]) {
    return catalogLevels == null ? null : catalogLevels.map(t => ({ label: t.name, value: t.id }));
  }
}
