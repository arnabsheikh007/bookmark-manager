import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-bookmark',
  templateUrl: './new-bookmark.component.html',
  styleUrls: ['./new-bookmark.component.css']
})
export class NewBookmarkComponent {
  title = '';
  url = '';
  category = '';
  showNewCategory = false;
  newcategory = '';
  msg = ""

  @Output() bookmarkCreated = new EventEmitter<{title:string, url:string, category:string}>();
  @Output() categoryCreated = new EventEmitter<{category:string}>();
  @Input() categories!: string[];

  onShowNewCategory(){
    this.showNewCategory = !this.showNewCategory;
  }

  validateUrl(){
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(this.url);
  }

  onCreateBookmark() {
    if(this.title.length > 30){
      this.msg = 'Maximum length 30 character';
      return;
    }
    else if(this.title.length === 0){
      this.msg = "Title can't be empty";
      return;
    }
    else if( this.validateUrl() === false ){
      this.msg = "Invalid URL";
    }
    this.bookmarkCreated.emit({
      title : this.title,
      url : this.url,
      category : this.category
    });
    this.msg = "Bookmark added successfully";
  }

  onCreateCategory(){
    this.category = this.newcategory;
    this.categoryCreated.emit({
      category : this.newcategory
    });
  }
}
