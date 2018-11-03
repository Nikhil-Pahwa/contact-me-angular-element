import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'contact-me',
  template: `Developed by {{author}} in {{label}}`,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ContactMeComponent  {
  @Input() author: string;
  @Input() label: string;
}
