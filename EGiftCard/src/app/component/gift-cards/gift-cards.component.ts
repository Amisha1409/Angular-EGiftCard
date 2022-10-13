import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GiftCard } from 'src/app/models/gift-card';
import { GiftcardService } from 'src/app/service/giftcard.service';

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.css']
})
export class GiftCardsComponent implements OnInit {

sendGiftCard(arg0: any) {
throw new Error('Method not implemented.');
}

  giftcard:GiftCard[];
 
  constructor(private service:GiftcardService) { 
    this.giftcard=new Array();
  }

  ngOnInit(): void {
    this.service.getAllGiftCards()
    .subscribe(
      data=>{this.giftcard=data},
      err=>{console.log(err)}
    );

  }

}
