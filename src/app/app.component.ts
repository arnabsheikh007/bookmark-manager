import { Component } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookmark-manager';
  Bookmarks : Bookmark[] = [];

  shownew = false;
  showDetails = false;

  categories = ['Category 1','Category 2'];

  selectedBookmark!:Bookmark;

  showNewForm(data:{showForm:boolean}){
    this.shownew = !this.shownew;
  }

  CreateNewBookmark(bookmark:{title:string,url:string,category:string}){
    this.Bookmarks.push(
      new Bookmark(bookmark.title,bookmark.url,bookmark.category));

    console.log(this.Bookmarks,bookmark);
  }

  addCategory(newCat:{category:string}){
    this.categories.push(newCat.category);
  }

  onShowDetails(bookmark:{title:string,url:string,category:string}){
    this.selectedBookmark = new Bookmark(bookmark.title,bookmark.url,bookmark.category);
    this.showDetails = true;
  }

}
