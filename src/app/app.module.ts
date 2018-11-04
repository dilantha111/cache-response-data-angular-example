import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DetailViewComponent, ImageViewComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'detail-view', component: DetailViewComponent },
      { path: 'image-view', component: ImageViewComponent },
      { path: '**', redirectTo: '/detail-view' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
