import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm! : FormGroup;
  user!:User[];
  isUpdate=false;
  constructor(private adminService:AdminService, private fb: FormBuilder) { 
   }

  
  ngOnInit(): void {
    this.forgotPasswordForm=this.fb.group({
      email:['',Validators.required],
    password:['',Validators.required]
    })
  }

//   UpdateUser(email: string) {
//     let u:any;
//      u = this.user.find(e => e.email == email)
//   this.isUpdate=true;
//   if(this.isUpdate==true){
// this.adminService.forgotPassword(u,u.email)
//   }
//   else
//   console.log("no updation");
//   }

updateUser(email:string)
{
  let u:any;
  u=this.user.find(ue=>ue.email==email);
  //data=this.user;
//e=data.email
  this.forgotPasswordForm=this.fb.group(
    {
      email:[u.email,Validators.required],
      password:[u.password,Validators.required]
      
    }
  );
  this.isUpdate=true;
  this.adminService.forgotPassword(u,email);
}
}
