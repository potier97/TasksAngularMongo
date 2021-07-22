import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'; 
// Registro del tipo de datos y region a Colombia
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localeCo from '@angular/common/locales/es-CO'
import { registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
registerLocaleData(localeCo);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    FormsModule,
    ReactiveFormsModule, 
    AngularMaterialModule,
    HttpClientModule,
    FlexLayoutModule,  
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: "es-CO"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
