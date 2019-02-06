import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
 @HostBinding('class.open') isopen=false;

  constructor() { }

  @HostListener('click') toggleOpen(){
    this.isopen = !this.isopen;
  }
 }
