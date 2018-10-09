export class ShintoService {
  static shared = new ShintoService()

  currValue: number = 1;
  balance: number = 0;
  ledger: Transaction[] = []

  addToLedger(action, amount) {
    const transaction = new Transaction(action, amount, this.currValue)
    this.ledger.unshift(transaction) 
  }

  buy(numCoins) {
    this.currValue += numCoins;
    this.balance += numCoins;
    this.addToLedger("buy", numCoins);
    console.log("COIN BOUGHT")
  }

  sell(numCoins) {
    const sellingAmount = (this.balance - numCoins < 0) ? (this.balance) : numCoins
    this.currValue -= sellingAmount;
    this.balance -= sellingAmount;
    this.addToLedger("sell", sellingAmount);
    console.log("COIN SOLD")
  }

  mine() {
    this.currValue += 1;
    this.balance += 1;
    this.addToLedger("mine", 1);
    console.log("COIN MINED")
  }

}

class Transaction {
  private static autoIncrementer = 0;

  id: number;
  action: string;
  amount: number;
  value: number;
  constructor(act: string, amt: number, val: number) {
    this.id = Transaction.autoIncrementer++;
    this.action = act;
    this.amount = amt;
    this.value = val;
  }
}