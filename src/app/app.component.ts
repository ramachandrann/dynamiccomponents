import { Component, ComponentFactoryResolver, NgModule, ViewChild, ViewContainerRef } from '@angular/core';
import {DialogComponent} from './dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Note the use of the "read" option
  @ViewChild('dialogAnchor', {read: ViewContainerRef}) dialogAnchor: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
  openDialogBox() {
    // Close any already open dialogs
    this.dialogAnchor.clear();
    
    let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    let dialogComponentRef = this.dialogAnchor.createComponent(dialogComponentFactory);
    dialogComponentRef.instance.message = "hola, soy una caja de diálogo"; // Not sure about the translation here
    dialogComponentRef.instance.close.subscribe(() => {
      dialogComponentRef.destroy();
    })
    
  }

}
