import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef ,Type} from '@angular/core';
import {ModalContainerComponent} from "../modal-container/modal-container.component";
import {ModalConfig} from "../modalConfig";
import {ModalInjector} from "../modalInjector";
import {ModalRef} from "../modal-ref";

@Injectable()
export class DynamicModalService {

  modalComponentRef: ComponentRef<ModalContainerComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) {}

  public open( componentType: Type<any>, config: ModalConfig) {
    const dialogRef = this.appendDialogComponentToBody(config);

    this.modalComponentRef.instance.childComponentType = componentType;
    return dialogRef;
  }

  appendDialogComponentToBody(config: ModalConfig){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalContainerComponent);
    const map = new WeakMap();
    map.set(ModalConfig, config);

    const modalRef = new ModalRef();
    map.set(ModalRef, modalRef);


    const sub = modalRef.afterClosed.subscribe(() => {

      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    // use our new injector
    const componentRef = componentFactory.create(new ModalInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.modalComponentRef = componentRef;
    return modalRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.modalComponentRef.hostView);
    this.modalComponentRef.destroy();
  }
}
