import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user:User[];
  isUpdate=false;
  constructor(private adminService:AdminService) {
    this.user=new Array();
   }

  
  ngOnInit(): void {
  }

  UpdateUser(email: string) {
    let u:any;
     u = this.user.find(e => e.email == email)
  this.isUpdate=true;
  if(this.isUpdate==true){
this.adminService.forgotPassword(u,u.email)
  }
  else
  console.log("no updation");
  }
}
