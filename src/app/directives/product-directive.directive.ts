import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appProductDirective]'
})
export class ProductDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
