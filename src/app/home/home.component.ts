import { Component, signal } from '@angular/core';
import { WelcomeComponent } from './ui/welcome.component';
import { RandomColor } from './ui/random-color.directive';
import { ReversePipe } from './ui/reverse.pipe';

@Component({
    selector: 'app-home',
    template: `
        <app-welcome [name]="user.name" (cookiesAccepted)="handleCookies()" /> 
        <p>I am the home component</p>
        <p randomColor>I am stylish</p>
        <p>Time for a little: {{ magic | reverse }}</p>
        <p>Hi, {{ name() }}</p>
    `,
    imports: [WelcomeComponent, RandomColor, ReversePipe],
})

export class HomeComponent {
    magic = 'reverse me';

    user = {
        name: 'Josh',
    };

    name = signal('Josh');

    handleCookies() {
        console.log('do something');
        // call some service
    }

    preferences = signal({
        fast: true,
        comfortable: true,
        expensive: false,
    });

    toggleComfort() {
        this.preferences.update((preferences) => ({
            ...preferences,
            comfortable: !preferences.comfortable,
        }));
    }
}
