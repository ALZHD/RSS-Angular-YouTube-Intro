import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SettingsComponent } from './header/settings/settings.component';
import { LoginInformationComponent } from './header/login-information/login-information.component';
import { FilteringCriteriaComponent } from './filtering-criteria/filtering-criteria.component';
import { SortCriterionButtonComponent } from './filtering-criteria/sort-criterion-button/sort-criterion-button.component';
import { FilterInputComponent } from './filtering-criteria/filter-input/filter-input.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultItemComponent } from './search-results/search-result-item/search-result-item.component';
import { VideoThumbnailComponent } from './search-results/search-result-item/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './search-results/search-result-item/views-count/views-count.component';
import { LikesCountComponent } from './search-results/search-result-item/likes-count/likes-count.component';
import { DislikesCountComponent } from './search-results/search-result-item/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './search-results/search-result-item/comments-count/comments-count.component';
import { VideoTitleComponent } from './search-results/search-result-item/video-title/video-title.component';
import { MoreButtonComponent } from './search-results/search-result-item/more-button/more-button.component';
import { SearchComponent } from './header/search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentService, DataTransferService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    SettingsComponent,
    LoginInformationComponent,
    FilteringCriteriaComponent,
    SortCriterionButtonComponent,
    FilterInputComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [DataTransferService, ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
