export class GiftCard {
    giftCardId:number;
    aboutGiftCard:string;
    brandList:string;
    giftCardName:string;
    maxAmount:number;
    minAmount:number;
    redemptionDetails:string;

    constructor(giftCardId:number,aboutGiftCard:string,
        brandList:string,
        giftCardName:string,
        maxAmount:number,
        minAmount:number,
        redemptionDetails:string){
            this.giftCardId=giftCardId;
            this.aboutGiftCard=aboutGiftCard;
            this.brandList=brandList;
            this.giftCardName=giftCardName;
            this.maxAmount=maxAmount;
            this.minAmount=minAmount;
            this.redemptionDetails=redemptionDetails
        }
        toString():string{
            return  this.giftCardId+'giftCardId'+
            this.aboutGiftCard+'aboutGiftCard'+
            this.brandList+'brandList'+
            this.giftCardName+'giftCardName'+
            this.maxAmount+'maxAmount'+
            this.minAmount+'minAmount'+
            this.redemptionDetails+'redemptionDetails'
        }
}
