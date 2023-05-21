import { Component, Input } from '@angular/core';
import { Bookmark } from '../bookmark.model';

@Component({
  selector: 'app-bookmark-details',
  templateUrl: './bookmark-details.component.html',
  styleUrls: ['./bookmark-details.component.css']
})
export class BookmarkDetailsComponent {
  @Input() selected!:Bookmark;
}
