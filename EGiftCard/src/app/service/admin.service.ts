import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../component/login/login.component';
import { Admin } from '../models/admin';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  //Admin Details
  login(email:string,password:string):Observable<Admin>
  {
return this.http.get<Admin>(`http://localhost:8080/EGiftCardApp/admin/loginAdmin/${email}${password}`);
  }

forgotPassword(user:User,email:string):Observable<User>
{
return this.http.put<User>(`http://localhost:8080/EGiftCardApp/api/user/forgetPassword/${user.email}`,user);
}
}
