import { LazyloadComponent } from './components/lazyload/lazyload.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  SidebarComponent,
  LazyloadComponent
  ],
  declarations: [SharedComponent, SidebarComponent, LazyloadComponent]
})
export class SharedModule { }
