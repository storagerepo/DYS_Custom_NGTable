import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

interface ViewCell {
  colData: any;
  rowData: any;
}

@Component({
  selector: 'ng-custom-view-component',
  templateUrl: './custom-view-component.component.html',
  styleUrls: ['./custom-view-component.component.scss']
})


export class CustomViewComponentComponent implements OnInit {

  customComponent: any;
  @Input() cell: any;
  @ViewChild('dynamicTarget', { read: ViewContainerRef, static: true }) dynamicTarget: any;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    if (this.cell && !this.customComponent) {
      this.createCustomComponent();
      this.patchInstance();
    }
  }

  ngOnDestroy() {
    if (this.customComponent) {
      this.customComponent.destroy();
    }
  }

  protected createCustomComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(this.cell.renderer);
    this.customComponent = this.dynamicTarget.createComponent(componentFactory);
  }

  protected patchInstance() {
    Object.assign(this.customComponent.instance, this.getPatch());
  }

  protected getPatch(): ViewCell {
    return {
      colData: this.cell.column,
      rowData: this.cell.row
    }
  }
}



