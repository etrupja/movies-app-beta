import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class ModalService {
  constructor(
    private ngbModal: NgbModal,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  showDefaultModalComponent(theComponent: any, name: any) {
    const componenetFactory = this.componentFactoryResolver.resolveComponentFactory(
      theComponent
    );
    const modalRef = this.ngbModal.open(theComponent);
    modalRef.componentInstance.name = name;
    return modalRef;
  }

  showFeaturedDialog(theComponent: any, name: any) {
    const componenetFactory = this.componentFactoryResolver.resolveComponentFactory(
      theComponent
    );

    const modalRef = this.ngbModal.open(theComponent);
    modalRef.componentInstance.name = name;
    return modalRef;
  }
}
