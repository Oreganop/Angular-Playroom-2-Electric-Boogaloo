// Entry point to our app.

import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormApp }   from './form';
import { TextInput }   from './textinput';
import { AppButton } from './button';


@NgModule(
    {
        imports:      [ BrowserModule, FormsModule ],
        declarations: [ FormApp, TextInput, AppButton ], // Import our app.component
        bootstrap:    [ FormApp ],
    })
export class AppModule { }  
