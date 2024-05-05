{
    // getter and setter in oop
    class BankAccount {
        public readonly id: number; // by default public is added so no need to tell explicitly & readonly means can not change this property.
        public name: string; // by default public is added so no need to tell explicitly
        private _balance: number; // by default public is added so no need to tell explicitly & private means it iss only accessible inside the class and _balance this is just convention

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        // updateBalance(amount: number): number {
        //     return this._balance = this._balance + amount;
        // }

        set deposit(amount: number) {
            this._balance = this._balance + amount;
        } // arrow function not applicable

        // getBalance():number{
        //     return this._balance;
        // }
        get balance(){
            return this._balance;
        } // arrow function not applicable;
    }

    const myAccount = new BankAccount(123, 'my account', 0)
    myAccount.deposit = 100000;
    // const amount = myAccount.getBalance()
    const amount = myAccount.balance
    console.log(amount)
}