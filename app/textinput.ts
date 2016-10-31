import { Component } from '@angular/core';

@Component({
    selector: 'my-textinput', //How to select our app from html
    template: 
    `
    <h2>{{config.id}}</h2>
    <div><label>id: </label>{{config.id}}</div>
    <div>
        <label>{{config.preceder}}</label>
        <input [(ngModel)]="config.text" placeholder="{{config.placeholder}}">
    </div>
    `,
    inputs: [ 'config' ] 
})


export class TextInput { 
}
