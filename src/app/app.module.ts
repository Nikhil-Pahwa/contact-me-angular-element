import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    ContactMeComponent
  ],
  imports: [
    BrowserModule
  ], 
  entryComponents: [ContactMeComponent],
})
export class AppModule {
   constructor(private injector: Injector) {
     const contactMeComponent = createCustomElement(ContactMeComponent, { injector });
     customElements.define('contact-me', contactMeComponent);
   }

   ngDoBootstrap(){}
 }
