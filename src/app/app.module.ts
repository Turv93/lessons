import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistInfoComponent } from './shared/playlist-info/playlist-info.component';
import { PlaylistMenuComponent } from './shared/playlist-menu/playlist-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistInfoComponent,
    PlaylistMenuComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
