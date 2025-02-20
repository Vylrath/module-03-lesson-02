import { Component } from '@angular/core';
import { WelcomeComponent } from './ui/welcome.component';

@Component({
    selector: 'app-home',
    template: `
        <app-welcome /> 
        <p>I am the home component</p>
 `,
    imports: [WelcomeComponent],
})

export class HomeComponent {}
