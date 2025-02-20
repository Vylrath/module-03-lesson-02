import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgTemplateOutlet } from "@angular/common";

@Component({
    selector: "app-welcome",
    template: `
        <input [(ngModel)]="firstName" />
        <button (click)="handleClick($event)">click me</button>
        <p>Hi, {{ firstName }}!</p>
        <p #myParagraph></p>
        <button (click)="myParagraph.innerHTML = 'Once upon a time...'">Click me</button>
        <ng-template #myTemplate>
            <p>Hello there</p>
        </ng-template>
        <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
        <ng-container *ngTemplateOutlet="myTemplate"></ng-container>
        <ng-template #myTemplate2 let-greeting="greeting">
            <p>{{ greeting }} there</p>
        </ng-template>
        <ng-container *ngTemplateOutlet="myTemplate2; context: { greeting: 'Hi' }"></ng-container>
        <ng-container *ngTemplateOutlet="myTemplate2; context: { greeting: 'Hello' }"></ng-container>
        <ng-container *ngTemplateOutlet="myTemplate2; context: { greeting: 'Yo' }"></ng-container>
     `,
     imports: [FormsModule, NgTemplateOutlet]
})

export class WelcomeComponent {
    firstName = 'Josh';

    handleClick(ev: MouseEvent) {
        console.log('I was clicked!');
        console.log(ev);
    }
}
