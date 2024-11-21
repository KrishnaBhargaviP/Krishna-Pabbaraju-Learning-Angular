import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextColour]', // Match this selector in the HTML
  standalone: true,
})
export class TextColourDirective implements OnChanges {
  @Input() appTextColour: number | null = null; // Ensure matching attribute name

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTextColour'] && this.appTextColour !== null) {
      this.applyTextColor(this.appTextColour);
    }
  }

  private applyTextColor(marks: number): void {
    let color = '';
    let fontWeight = 'normal';

    if (marks < 50) {
      color = 'darkred';
      fontWeight = 'bold';
    } else if (marks >= 50 && marks <= 59) {
      color = 'lightcoral';
    } else if (marks >= 60 && marks <= 69) {
      color = 'darkorange';
    } else if (marks >= 70) {
      color = 'green';
    }

    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', fontWeight);
  }
}
