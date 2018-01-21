import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ChildComponent } from './child-component/child.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { UndercomponentComponent } from './undercomponent/undercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SubcomponentComponent,
    UndercomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'subcomponent',
        component : SubcomponentComponent
      },
      {
        path: 'undercomponent',
        component: UndercomponentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
