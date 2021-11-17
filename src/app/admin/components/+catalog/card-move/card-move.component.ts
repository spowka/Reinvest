import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SelectItem, DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { FormGroup } from '@angular/forms';
import { CardFullModel } from '../../../shared/cards/card.model';
import { TreeService } from '../../../shared/tree/tree.service';
import { CatalogService } from '../../../shared/catalog/catalog.service';
import { CatalogLevel, GetCatalogTreeResponse } from '../../../shared/catalog/catalog.model';
import { CardService } from '../../../shared/cards/card.service';

const emptySeries = 'В корень тематики';
const emptySet = 'В корень серии';

@Component({
  selector: 'card-move',
  templateUrl: './card-move.component.html',
  styleUrls: ['./card-move.component.scss']
})

export class CardMoveComponent implements OnInit {
  public infoForm: FormGroup;

  public tree: CatalogLevel[];
  public availableThemes: SelectItem[];
  public availableSeries: SelectItem[];
  public availableSets: SelectItem[];

  public themeCatalogLevelId: string;
  public serieCatalogLevelId: string;
  public setCatalogLevelId: string;
  public card: CardFullModel;

  public catalogLevelId: string;
  public originalCatalogLevelId: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private catalogService: CatalogService,
    private cardService: CardService,
    private treeService: TreeService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    this._getCard(this.config.data.id);
    this._getCatalogTree();
  }

  public moveCard() {
    this.ref.close(this.catalogLevelId);
  }

  public cancel() {
    this.ref.close();
  }

  private _updateCatalogLevelId() {
    this.catalogLevelId = this.themeCatalogLevelId;
    if (this.serieCatalogLevelId != null) {
      this.catalogLevelId = this.serieCatalogLevelId;
    }
    if (this.setCatalogLevelId != null) {
      this.catalogLevelId = this.setCatalogLevelId;
    }
  }

  public changeSet() {
    this._updateCatalogLevelId();
  }

  public changeSerie() {
    this._clearSet();
    this._updateCatalogLevelId();
  }

  private _clearSet() {
    this.setCatalogLevelId = null;
    //найдем путь к выбранной серии (это элемент 2го уровня)
    const seriesPath = this.treeService.FindElementPath(this.tree, this.serieCatalogLevelId, []);
    //сформируем список комплектов из всех дочерних уровней найденной серии
    this.availableSets = seriesPath[1] && this.treeService.ChildrenToSelectItemArray(seriesPath[1], emptySeries) || [];
    this.setCatalogLevelId = this.availableSets.length && this.availableSets[0].value || this.serieCatalogLevelId;
  }

  private _getCard(id) {
    this.cardService.get(id).subscribe(
      (response: CardFullModel) => {
        this.card = response;
        this.catalogLevelId = response.catalogLevelId;
        this.originalCatalogLevelId = response.catalogLevelId;
        this._updateSelectedItems();
        this.cdr.detectChanges();
      }
    );
  }

  private _getCatalogTree() {
    this.catalogService.getTree().subscribe(
      (tree: GetCatalogTreeResponse) => {
        this.tree = tree.themes;
        this._updateSelectedItems();
        this.cdr.detectChanges();
      }
    );
  }

  private _updateSelectedItems() {
    if (this.catalogLevelId != null && this.tree != null) {
      const catalogLevelPath = this.treeService.FindElementPath(this.tree, this.catalogLevelId, []);
      const theme = catalogLevelPath[0];
      const series = catalogLevelPath[1] || null;
      const set = catalogLevelPath[2] || null;

      this.availableThemes = this.treeService.ToSelectItemArray([theme]);
      this.availableSeries = this.treeService.ChildrenToSelectItemArray(theme, emptySeries);
      this.availableSets = series && this.treeService.ChildrenToSelectItemArray(series, emptySet) || [];

      this.themeCatalogLevelId = theme && theme.id || null;
      this.serieCatalogLevelId = series && series.id || this.themeCatalogLevelId;
      this.setCatalogLevelId = set && set.id || this.serieCatalogLevelId;
    }
  }

  ngOnInit() {
  }
}
