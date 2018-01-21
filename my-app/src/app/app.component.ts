import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Parent loading';

  public hello = 'hello';

  public goodbye: string;

 public ngOnInit() {}

 setDataFromChild(data) {
  this.goodbye = data;
 }
}
