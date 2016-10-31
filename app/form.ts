import { Component } from '@angular/core';

@Component({
    selector: 'my-form', //How to select our app from html
    template: 
    `
    <div *ngFor="let element of FormConfig"> 
        <span [ngSwitch]="element.id">
            <span *ngSwitchCase="'textinput'">
                <p>Text Input
                    {{element.id}} : {{element.text}} 
                        <my-textinput [config]="element"></my-textinput>
                </p>
            </span>
            <span *ngSwitchCase="'button'">
                <p>Button
                    {{element.id}} : {{element.text}} 
                        <my-button [config]="element" [JSObject]="FormConfig"></my-button>
                </p>
            </span>
        </span>
    </div>
    `
})


export class FormApp { 
    FormConfig: any = [{
            id: 'textinput',
            preceder: "preceder here",
            text: "lololol",
            placeholder: "idjk",
        },
        {
            id: 'textinput',
            preceder: "preceder 2",
            text: "text 2",
            placeholder: "placeholder 2",
        },
        {
            id: 'button',
            preceder: 'button preceder:',
            text: 'Click Me!',
            func: ()=>{
            },
        },
    ]
}


