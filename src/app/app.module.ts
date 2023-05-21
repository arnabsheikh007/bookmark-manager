import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewBookmarkComponent } from './new-bookmark/new-bookmark.component';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { BookmarkDetailsComponent } from './bookmark-details/bookmark-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewBookmarkComponent,
    BookmarksListComponent,
    BookmarkDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
