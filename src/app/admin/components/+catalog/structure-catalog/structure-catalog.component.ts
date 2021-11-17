import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreateSubjectComponent } from "../subject/create-subject/create-subject.component";
import { DialogService, ConfirmationService, MessageService } from 'primeng/api';
import { CatalogService } from '../../../shared/catalog/catalog.service';
import { GetCatalogTreeResponse } from '../../../shared/catalog/catalog.model';
import { ItemIdResponse } from '../../../shared/cards/card.model';
import { EditTextService } from '../../../shared/edit-texts/edit-text.service';
import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
import { DefaultConfirmationTitle, DefaultConfirmationText, Consts } from 'src/app/consts';
import { InsertEmptyNode } from '../../../shared/helpers/array-helpers';

const themeImageSize: string = '410x320';
const themeTerminalListImageSize: string = 'от 64x64 до 1080x1920';
const themeTerminalBackgroundSize: string = 'от 64x64 до 1080x1920';

const seriesImageSize: string = '580x260';
const seriesTerminalListImageSize: string = 'от 64x64 до 1080x1920';
const seriesTerminalBackgroundSize: string = 'от 64x64 до 1080x1920';

const setImageSize: string = '300x300';
const setCollectionsListImageSize: string = 'от 64x64 до 1080x1920';
const setCardsListImageSize: string = 'от 64x64 до 1080x1920';

@Component({
  selector: 'app-structure-catalog',
  templateUrl: './structure-catalog.component.html',
  styleUrls: ['./structure-catalog.component.scss'],
})
export class StructureCatalogComponent implements OnInit, OnDestroy {
  treeValue: any[];

  constructor(
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private catalogService: CatalogService,
    private textService: EditTextService,
    private msg: MessageService,
  ) {
    this.textService.loadTextsGroup(MessageGroupEnum.CatalogStructure);
    this._getThemes();
  }

  ngOnInit() {
  }

  public openModal(header: string, data = null) {
    const ref = this.dialogService.open(CreateSubjectComponent, {
      header: header,
      width: '800px',
      style: { 'max-height': '95%', overflow: 'auto' },
      data
    });
    ref.onClose.subscribe(() => this._getThemes());
  }

  public addThemeEvent() {
    this.openModal('Добавление тематики', {
      imageSize: themeImageSize,
      terminalThemeListImageSize: themeTerminalListImageSize,
      terminalBackgroundSize: themeTerminalBackgroundSize,
    });
  }

  public addSeriesEvent(index) {
    const parentTheme = this.treeValue[index];
    this.openModal('Добавление серии', {
      imageSize: seriesImageSize,
      terminalSeriesListImageSize: seriesTerminalListImageSize,
      terminalBackgroundSize: seriesTerminalBackgroundSize,
      parentTheme
    });
  }

  public addSetEvent(index) {
    const parentTheme = this.treeValue[index];
    var childrenThemes = parentTheme.children
      .filter(c => c.series).map(s => ({ id: s.id, name: s.series }));
    this.openModal('Добавление комплекта', {
      imageSize: setImageSize,
      terminalCollectionsListImageSize: setCollectionsListImageSize,
      terminalCardsListImageSize: setCardsListImageSize,
      parentTheme,
      childrenTheme: childrenThemes
    });
  }

  public edit(rowData) {
    var header = 'Редактирование тематики';
    var imageSize = themeImageSize;
    var terminalThemeListImageSize, terminalBackgroundSize, terminalSeriesListImageSize,
      terminalCollectionsListImageSize, terminalCardsListImageSize;

    if (rowData.series) {
      header = 'Редактирование серии';
      imageSize = seriesImageSize;
      terminalSeriesListImageSize = seriesTerminalListImageSize;
      terminalBackgroundSize = seriesTerminalBackgroundSize;
    } else
      if (rowData.set) {
        header = 'Редактирование комплекта';
        imageSize = setImageSize;
        terminalCollectionsListImageSize = setCollectionsListImageSize;
        terminalCardsListImageSize = setCardsListImageSize;
      } else {
        terminalThemeListImageSize = themeTerminalListImageSize;
        terminalBackgroundSize = themeTerminalBackgroundSize
      }
    this.openModal(header, {
      imageSize,
      terminalThemeListImageSize,
      terminalSeriesListImageSize,
      terminalBackgroundSize,
      terminalCollectionsListImageSize,
      terminalCardsListImageSize,
      id: rowData.id
    });
  }

  public delete(catalog) {
    var hasChildrenCards = catalog.activeCards > 0 || catalog.archiveCards > 0;
    if (hasChildrenCards) {
      var msg = this.textService.getText(MessageGroupEnum.CatalogStructure, 'CatalogStructureDeleteImpossibleWhenHaveCards');
      this.msg.add({ severity: 'error', summary: 'Удаление уровня невозможно', detail: msg.text });
    } else {
      let entityName = `тематику ${catalog.name}`;
      let msg = this.textService.getText(MessageGroupEnum.CatalogStructure, 'CatalogStructureThemeDeleting');
      if (catalog.series) {
        entityName = `серию ${catalog.series}`;
        msg = this.textService.getText(MessageGroupEnum.CatalogStructure, 'CatalogStructureSeriesDeleting');
      } else
        if (catalog.set) {
          entityName = `комплект ${catalog.set}`;
          msg = this.textService.getText(MessageGroupEnum.CatalogStructure, 'CatalogStructureSetDeleting');
        }

      this.confirmationService.confirm({
        ...Consts.Confirmation,
        header: msg.title || DefaultConfirmationTitle,
        message: msg.text || DefaultConfirmationText,
        accept: () => {
          this.catalogService.delete(catalog.id).subscribe(
            (response: ItemIdResponse) => this._getThemes());
        }
      });
    }
  }

  public reorder_theme(ev) {
    const index = (ev.dropIndex > ev.dragIndex ? ev.dropIndex - 1 : ev.dropIndex);
    const id = this.treeValue[index].id;
    this.catalogService.move(id, index - 1).subscribe((response: ItemIdResponse) => this._getThemes());
  }

  public reorder_serieset(i, ev) {
    const tree = this.treeValue[i].children;
    const index = (ev.dropIndex > ev.dragIndex ? ev.dropIndex - 1 : ev.dropIndex);
    const id = tree[index].id;
    if (tree[index].set) {
      let prevIndex = index;
      while (prevIndex >= 0 && !tree[prevIndex].series) {
        prevIndex--;
      }
      if (prevIndex >= 0) {
        this.catalogService.move(id, index - prevIndex - 2, tree[prevIndex].id)
          .subscribe((response: ItemIdResponse) => this._getThemes());
      } else {
        this._getThemes();
      }
    } else
      if (tree[index].series) {
        let prevIndex = index;
        let index2 = 0;
        while (prevIndex >= 0) {
          if (tree[prevIndex].series) {
            index2++;
          }
          prevIndex--;
        }
        this.catalogService.move(id, index2 - 2, this.treeValue[i].id)
          .subscribe((response: ItemIdResponse) => this._getThemes());
      }
  }

  private _getThemes() {
    this.catalogService.getTree().subscribe(
      (response: GetCatalogTreeResponse) => {
        let treeValue = response.themes.map(e => ({
          id: e.id, name: e.name, activeCards: e.activeCards, archiveCards: e.archiveCards,
          children: e.children.reduce((p, c) => this.insertEmptyNode(
            p.concat([{ id: c.id, series: c.name, activeCards: c.activeCards, archiveCards: c.archiveCards }])
              .concat(c.children.map(s =>
                ({ id: s.id, set: s.name, activeCards: s.activeCards, archiveCards: s.archiveCards })))
          ), [])
        }));
        this.treeValue = this.insertEmptyNode(treeValue);
      }
    );
  }

  private insertEmptyNode(t: any[]) {
    return InsertEmptyNode(t, { id: '', name: '', activeCards: 0, archiveCards: 0, children: [] });
  }

  ngOnDestroy(): void {
  }
}
