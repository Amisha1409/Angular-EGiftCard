export class User {
    userId:number;
    firstName:string;
    lastName:string;
    email:string;
    mobile:string;
    password:string;
    address:string;

    constructor(userId:number,
        firstName:string,
        lastName:string,
        email:string,
        mobile:string,
        password:string,
        address:string
    )
    {
    this.userId=userId;
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.mobile=mobile;
    this.password=password;
    this.address=address;}
}



