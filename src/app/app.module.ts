import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component'

import { HackernewsApiService } from './hackernews-api.service';
import { DomainPipe } from './domain.pipe';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    ItemCommentsComponent,
    DomainPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
