import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BusyIndicatorComponent } from './shared/common-component/busy-indicator.component';
import { BusyIndicatorService } from './shared/common-component/busy-indicator.service';
import { CategoryService } from './shared/services/category.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, BusyIndicatorComponent
  ],

  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MatProgressSpinnerModule, AppRoutingModule
  ],
  entryComponents: [BusyIndicatorComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserService, BusyIndicatorService, CategoryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
