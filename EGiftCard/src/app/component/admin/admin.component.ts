import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { GiftCard } from 'src/app/models/gift-card';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm!: FormGroup;
  users:User[];
  gifts:GiftCard[];
  isUpdate:boolean=false;

  constructor( private service: AdminService, private fb: FormBuilder) {
    this.users=new Array();
    this.gifts=new Array();
   }

  ngOnInit(): void {
    console.log("ng on init");
    this.adminForm=this.fb.group(
      {
        userId:['',Validators.required],
        firstName:['',Validators.required],
        lastName:['',Validators.required]
      });

  }

  //user details access
getAllUser(){
  this.service.getAllUsers().subscribe(users=>
    {
this.users=users;
    },
    err=>{console.log(err)})
  }

  deleteUser(userId:number)
  {
    let candelete=confirm(`Are you sure to delete User '${userId}'`);
    if (candelete==true)
    {
      this.service.deleteUser(userId).subscribe(data=> {
        alert("Deleted successfully");
        this.service.getAllUsers().subscribe(users=>
          {
      this.users=users;
          })
      })
    }
  }
     
  saveUser():void
  {
let u:User=this.adminForm.value;
if(!this.isUpdate)
{
  this.service.addUser(u).subscribe(data=>
    { 
      alert("User with Id " + data.userId + " is created");
      this.service.getAllUsers().subscribe
      (us=>
        {
          this.users=us;
        });
    });
}
else
{
  this.service.updateUser(u,u.userId).subscribe(data=>{
    alert("user is updated");
 this.service.getAllUsers().subscribe( u=>{
  this.users=u
  });
});
this.isUpdate=false;
//alert(JSON.stringify(u));

 }
 this.adminForm.reset;
}


  updateUser(userId:number)
  {
let u:any;
u=this.users.find(e=>e.userId==userId)
this.service.updateUser(u,userId);
this.adminForm=this.fb.group(
  {
    
    userId:[u.userId,Validators.required],
    firstName:[u.firstName,Validators.required],
     lastName:[u.lastName,Validators.required]
  }
)
alert(JSON.stringify(u));
this.isUpdate=true;
  }

  //gift card details access
  getAllGiftCard(){
    this.service.getAllGiftCards().subscribe(gift=>
      { this.gifts=gift; },
      err=>{console.log(err)})
    }
  
    updateGiftCard(giftId:number)
    {
  let g:any;
  g=this.gifts.find(e=>e.giftCardId==giftId)
  this.service.updateGiftCard(giftId,g);
  // this.adminForm=this.fb.group(
  //   {
      
  //     giftCardId:[g.giftCardId,Validators.required],
  //     aboutGiftCard:[g.aboutGiftCard,Validators.required],
  //      brandList:[g.brandList,Validators.required]
  //   }
  // )
  alert(JSON.stringify(g));
  this.isUpdate=true;
    }

    saveGiftCard():void
  {
let g:GiftCard=this.adminForm.value;
if(!this.isUpdate)
{
  this.service.addGiftCard(g).subscribe(data=>
    { 
      alert("Gift Card with Id " + data.giftCardId + " is created");
      this.service.getAllGiftCards().subscribe
      (gi=>
        {
          this.gifts=gi;
        });
    });
}
else
{
  this.service.updateGiftCard(g.giftCardId,g).subscribe(data=>{
    alert("Gift Card is updated");
 this.service.getAllGiftCards().subscribe( g=>{
  this.gifts=g
  });
});
this.isUpdate=false;
//alert(JSON.stringify(u));

 }
 this.adminForm.reset;
}

deleteGiftCard(giftCardId:number)
  {
    let candelete=confirm(`Are you sure to delete User '${giftCardId}'`);
    if (candelete==true)
    {
      this.service.deleteGiftCard(giftCardId).subscribe(data=> {
        alert("Deleted successfully");
        this.service.getAllGiftCards().subscribe(gifts=>
          {
      this.gifts=gifts;
          })
      })
    }
  }

}
