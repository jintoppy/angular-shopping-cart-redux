import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective{

  constructor(private el:ElementRef) {
    console.log(el);
   }

   @HostListener('click')
   onElClick(){
     alert('within directive');
   }

   ngOnInit(){
     this.el.nativeElement.style.color = 'blue';
   }

}
