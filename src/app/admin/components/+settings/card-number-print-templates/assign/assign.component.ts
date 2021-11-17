import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import {
  DialogService,
  MessageService,
  ConfirmationService,
  TreeNode,
} from "primeng/api";
import { ActivatedRoute, Router } from "@angular/router";
import { CardNumberPrintTemplatesAssignService } from "src/app/admin/shared/card-number-print-templates-assign/card-number-print-templates-assign.service";
import { CardNumberPrintTemplateCatalogLevel, CardNumberPrintTemplateCatalogLevelBriefModel } from "src/app/admin/shared/card-number-print-templates-assign/card-number-print-templates-assign.model";
import { CardNumberPrintTemplatesService } from "src/app/admin/shared/card-number-print-templates/card-number-print-templates.service";
import { iterateTree } from "src/app/shared/helpers/tree-helper";

@Component({
  selector: "app-card-number-print-templates-assign",
  templateUrl: "./assign.component.html",
  styleUrls: [
    "../../../../shared-admin.scss",
    "./assign.component.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CardNumberPrintTemplatesAssignComponent implements OnInit, OnDestroy {
  isLoading = false;
  catalogs: CardNumberPrintTemplateCatalogLevelBriefModel[];
  selectedCatalogId: string;
  selectedCatalog: TreeNode | null = null;
  selectedCatalogInfo: CardNumberPrintTemplateCatalogLevel | null = null;
  tree: TreeNode[];
  cardNumberPrintTemplates: any[] = [];
  currentCardNumberPrintTemplateName: string = '';

  constructor(
    private dialogService: DialogService,
    private activateRoute: ActivatedRoute,
    private cardNumberPrintTemplatesService: CardNumberPrintTemplatesService,
    private cardNumberPrintTemplatesAssignService: CardNumberPrintTemplatesAssignService,
    private msg: MessageService,
    private router: Router,
    private confirmService: ConfirmationService
  ) {
  }

  public reload() {
    this.cardNumberPrintTemplatesService
      .getAll({}, {})
      .subscribe((response) => {
        const emptyArray = [{ label: '----', value: null }];
        this.cardNumberPrintTemplates = emptyArray.concat(response.items.map(t => ({ label: t.name, value: t.id })));
      });

    this.cardNumberPrintTemplatesAssignService.getCatalogs()
      .subscribe((response) => {
        this.catalogs = <CardNumberPrintTemplateCatalogLevelBriefModel[]>response;
        this.tree = mapNodes(this.catalogs);

        this.setSelectedCatalog();
      });

    function mapNodes(tree: CardNumberPrintTemplateCatalogLevelBriefModel[]): TreeNode[] {
      return tree ? tree.map(t => ({ data: t, children: mapNodes(t.children) })) : [];
    }
  }

  ngOnInit() {
    this.reload();

    this.activateRoute.params.subscribe(params => {
      if (params.id) {
        this.selectedCatalogId = params.id;
        this.setSelectedCatalog();
      }
    });
  }

  setSelectedCatalog() {
    this.selectedCatalog = null;
    iterateTree(this.tree, 'children', (node, chain) => {
      if (node.data.id == this.selectedCatalogId) {
        this.selectedCatalog = node;

        chain.forEach(t => t.expanded = true);
      }
    });
    this.loadCatalog();
  }

  loadCatalog() {
    this.selectedCatalogInfo = null;
    const id = this.selectedCatalog && this.selectedCatalog.data.id;
    id && this.cardNumberPrintTemplatesAssignService.getCatalog(id).subscribe(response => {
      this.selectedCatalogInfo = response;

      const currentCardNumberPrintTemplate = this.cardNumberPrintTemplates.find(t => t.value == response.cardNumberPrintTemplateId);
      this.currentCardNumberPrintTemplateName = currentCardNumberPrintTemplate && currentCardNumberPrintTemplate.label || '';
    });
  }

  ngOnDestroy() { }

  catalogSelect(event) {
    const catalogLevelId = event.node.data.id;
    this.router.navigate([`/admin/main/card-number-print-templates/assign/${catalogLevelId}`]);
  }

  apply(includeSublevels: boolean) {
    this.cardNumberPrintTemplatesAssignService.applyTemplate(this.selectedCatalog.data.id, this.selectedCatalogInfo.cardNumberPrintTemplateId, includeSublevels)
      .subscribe(response => {
        this.reload();
      });
  }

  getMarkerClass(row) {
    const currentNode = <TreeNode>(row && row.node);
    if (!currentNode)
      return null;

    const hasTemplate = currentNode.data.cardNumberPrintTemplateId && true;
    if (currentNode.expanded) {
      return currentNode.data.cardNumberPrintTemplateId ? 'has-template' : '';
    } else {
      return hasTemplate && allChildrenHasTemplate(currentNode) ? 'has-template' : '';
    }

    function allChildrenHasTemplate(node: TreeNode) {
      const nodeHasTemplate = node.data.cardNumberPrintTemplateId && true;
      if (!node.children || node.children.length <= 0) {
        return nodeHasTemplate;
      } else {
        return nodeHasTemplate && node.children.every(t => allChildrenHasTemplate(t));
      }
    }
  }
}
