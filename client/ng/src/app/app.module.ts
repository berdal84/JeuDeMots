import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { ListComponent } from './components/list/list.component';
import { AdvisesComponent } from './components/advises/advises.component';
import { MoreComponent } from './components/more/more.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { Error404Component } from './components/error404/error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AdminModule } from './components/admin/admin.module';
import { PaginationComponent } from './components/pagination/pagination.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlideshowComponent,
    ListComponent,
    AdvisesComponent,
    MoreComponent,
    Error404Component,
    ContributeComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    RouterModule.forRoot(
      ROUTES, {
        enableTracing: !environment.production,
        useHash: true
      }),
    NgOptimizedImage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
