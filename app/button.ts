import { Component } from '@angular/core';

@Component({
    selector: 'my-button', //How to select our app from html
    template: 
    `
    <h2>{{config.id}}</h2>
    <div><label>id: </label>{{config.id}}</div>
    <div>
        <label>{{config.preceder}}</label>
        <button (click)="config.func()" value="{{config.text}}"></button>
    </div>
    `,
    inputs: [ 'config', 'JSObject' ] 
})


export class AppButton { 
}
