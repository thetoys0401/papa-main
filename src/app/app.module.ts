import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MemberComponent } from './components/pages/member/member.component';
import { BookComponent } from './components/pages/book/book.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { EditBookComponent } from './components/pages/editbook/editbook.component';
import { NewBookComponent } from './components/pages/addbook/addbook.component';
import { AddmemberComponent } from './components/pages/addmember/addmember.component';
import { EditmemberComponent } from './components/pages/editmember/editmember.component';
import { EditstaffComponent } from './components/pages/editstaff/editstaff.component';
import { AddstaffComponent } from './components/pages/addstaff/addstaff.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helper/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    MemberComponent,
    BookComponent,
    StaffComponent,
    EditBookComponent,
    NewBookComponent,
    AddmemberComponent,
    EditmemberComponent,
    EditstaffComponent,
    AddstaffComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
