import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsContainerIndexComponent } from '@news/Containers/news-container-index/news-container-index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewsContainerIndexComponent
  ],
  exports: [
    NewsContainerIndexComponent
  ]
})
export class NewsModule { }
