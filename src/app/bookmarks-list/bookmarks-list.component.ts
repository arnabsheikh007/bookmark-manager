import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bookmark } from '../bookmark.model';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.css']
})
export class BookmarksListComponent {
  @Input() bookmarks: Bookmark[] | undefined;
  @Input() category!: string;
  @Output() bookmarkSelected = new EventEmitter<{title:string, url:string, category:string}>();

  onClickDetails(selectedBookmark:Bookmark){
    this.bookmarkSelected.emit({
      title : selectedBookmark.title,
      url : selectedBookmark.url,
      category : selectedBookmark.category
    });
  }
}
