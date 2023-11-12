import { Directive, ElementRef, HostListener } from '@angular/core';
 
@Directive({

  selector: '[appNumbersOnly]'

})

export class NumbersOnlyDirective {
 
  constructor(private el: ElementRef) {}
 
  @HostListener('input', ['$event']) onInputChange(event: Event): void {

    const input = this.el.nativeElement as HTMLInputElement;

    const value = input.value;
 
    // Remove any non-numeric characters using a regular expression

    input.value = value.replace(/[^0-9]/g, '');

  }
 
  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent): void {

    // Get the pressed key code
    console.log("keypress", event.keyCode);
    

    const keyCode = event.which || event.keyCode;
 
    // Allow numeric characters (0-9) and certain control keys (e.g., backspace, delete)

    if (keyCode < 48 || keyCode > 57) {

      event.preventDefault();

    }

  }

}
