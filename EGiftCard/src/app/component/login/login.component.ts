import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// loginForm!:FormGroup;
// loading=false;
// submitted=false;
//returnUrl:string;
  //admin!: Admin;
  constructor(
    // private route:ActivatedRoute,
    // private router:Router,
    // private adminService:AdminService,
    ) 
  { 
  }

  ngOnInit(): void {
    // this.loginForm=this.formBuilder.group({
    //   email:['',Validators.required],
    //   password:['',Validators.required]
    // });

    // this.adminService.login(this.admin.email,this.admin.password)
    // .subscribe(
    //   data => { this.admin = data;}, //this success handler works only if status code between 200 and 299
    //   err => {console.log(err)}  //this success handler works only if status code between 4 and 5
      
    //   );
  //this.returnUrl=this.route.snapshot.queryParams['returnUrl'] ;
  }



  // onSubmit()
  // {
  //   this.submitted=true;
  //   if(this.loginForm.invalid)
  //   {
  //     return ;
  //   }
    // this.loading=true;
    // this.adminService.login(this.f.email.value, this.f.password.value)
    // .pipe(first())
    // .subscribe(
    //   data =>{this.router.navigate([this.returnUrl]);},
    //   error=>{console.log(error)}
    // )

  //}


}
