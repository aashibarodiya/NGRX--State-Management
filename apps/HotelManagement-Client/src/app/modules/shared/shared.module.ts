import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
  
    PopUpComponent,
        SearchPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    PopUpComponent,
    SearchPipe
  ]
})
export class SharedModule { }
