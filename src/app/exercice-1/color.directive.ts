import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostBinding('style.color') color?: string;

  @HostListener('window:keydown', ['$event']) changeColorOnKeyDown($event: any) {
    switch ($event.keyCode) {
      case 38:
        this.color = 'green';
        break;
      case 37:
        this.color = 'purple';
        break;
      case 40:
        this.color = 'red';
        break;
      case 39:
        this.color = 'orange';
        break;
    }

    // console.log($event);
  }
}
