import {
  Component,
  Type,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ComponentFactoryResolver,
  ComponentRef,
  ChangeDetectorRef,
  ViewEncapsulation
} from '@angular/core';
import { InsertionDirective } from "../insertion.directive";
import { ModalRef } from "../modal-ref";
import { ModalConfig } from "../modalConfig";


@Component({
  selector: 'modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalContainerComponent implements AfterViewInit, OnDestroy {

  componentRef: ComponentRef<any>;
  childComponentType: Type<any>;

  @ViewChild(InsertionDirective)
  insertionPoint: InsertionDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private modal: ModalRef,
    public config: ModalConfig) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    this.modal.close();
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }
  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
