import { Component } from '@angular/core';
import { WelcomeComponent } from './ui/welcome.component';
import { RandomColor } from './ui/random-color.directive';
import { ReversePipe } from './ui/reverse.pipe';

@Component({
    selector: 'app-home',
    template: `
        <app-welcome /> 
        <p>I am the home component</p>
        <p randomColor>I am stylish</p>
        <p>Time for a little: {{ magic | reverse }}</p>
 `,
    imports: [WelcomeComponent, RandomColor, ReversePipe],
})

export class HomeComponent {
    magic = 'reverse me';
}
