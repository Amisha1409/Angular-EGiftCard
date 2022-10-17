import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { LoginComponent } from '../component/login/login.component';
import { Admin } from '../models/admin';
import { GiftCard } from '../models/gift-card';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

 
  constructor(private http:HttpClient) {
   }

  //Admin Details
  login(email:string,password:string):Observable<Admin>
  {
return this.http.get<Admin>(`http://localhost:8080/EGiftCardApp/admin/loginAdmin/${email}${password}`);
  }

forgotPassword(user:User,email:string):Observable<User>
{
return this.http.put<User>(`http://localhost:8080/EGiftCardApp/api/user/forgetPassword/${user.email}`,user);
}

//user Details
getAllUsers():Observable<User[]>
{
  return this.http.get<User[]>("http://localhost:8080/EGiftCardApp/admin/allUser");
}

deleteUser(userId:number):Observable<User>
{
return this.http.delete<User>(`http://localhost:8080/EGiftCardApp/api/user/${userId}`);
}

updateUser(u:User,userId:number):Observable<User>
{
  return this.http.put<User>(`http://localhost:8080/EGiftCardApp/api/user/${userId}`,u);
}

addUser(user:User):Observable<User>
{
  return this.http.post<User>("http://localhost:8080/EGiftCardApp/api/user",user);
}

//gift details
getAllGiftCards():Observable<GiftCard[]>
{
  return this.http.get<GiftCard[]>("http://localhost:8080/EGiftCardApp/api/GiftCard");
}

addGiftCard(gift:GiftCard):Observable<GiftCard>
{
return this.http.post<GiftCard>("http://localhost:8080/EGiftCardApp/api/GiftCard",gift);
}

updateGiftCard(giftCardId:number,gift:GiftCard):Observable<GiftCard>
{
  return this.http.put<GiftCard>(`http://localhost:8080/EGiftCardApp/api/GiftCard/${giftCardId}`,gift);
}

deleteGiftCard(g:number):Observable<GiftCard>
{
  return this.http.delete<GiftCard>(`http://localhost:8080/EGiftCardApp/api/GiftCard/${g}`);
}

}
