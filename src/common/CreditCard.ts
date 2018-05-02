export default class CreditCard {
  constructor(
    cardNumber: string,
    name: string,
    securityCode: string,
    expireMonth: string,
    expireYear: string,
    token: string,
  ) {
    this.cardNumber = cardNumber;
    this.name = name;
    this.securityCode = securityCode;
    this.expireMonth = expireMonth;
    this.expireYear = expireYear;
    this.token = token;
  }
  readonly cardNumber: string;
  readonly name: string;
  readonly securityCode: string;
  readonly expireMonth: string;
  readonly expireYear: string;
  readonly token: string;
}
