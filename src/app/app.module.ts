/**Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/**Services */
import { ItemService } from './item.service';

/**PrimeNg */
import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';

/**Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
