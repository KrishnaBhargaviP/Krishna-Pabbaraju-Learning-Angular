import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlightAdmin',
  standalone: true
})
export class HighlightAdminPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, isAdmin: boolean | undefined): SafeHtml {
    // If isAdmin is undefined, treat it as false
    const isUserAdmin = isAdmin === undefined ? false : isAdmin;

    // Apply styling based on whether the user is an admin
    let htmlContent = isUserAdmin
      ? `<span style="color: red; font-weight: bold;">${value}</span>`
      : value;  // No styling if not an admin

    // Sanitize and return the safe HTML
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }
}
