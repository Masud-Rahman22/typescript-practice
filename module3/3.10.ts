{
    // encapsulation in oop 
    //when we use private access modifier we can not use that property outside the class this is encapsulation means hiding something. 
    class BankAccount {
        public readonly id: number; // by default public is added so no need to tell explicitly & readonly means can not change this property.
        public name: string; // by default public is added so no need to tell explicitly
        private _balance: number; // by default public is added so no need to tell explicitly & private means it iss only accessible inside the class and _balance this is just convention

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        updateBalance(amount: number): number {
            return this._balance = this._balance + amount;
        }

        getBalance():number{
            return this._balance;
        }

    }

    class MyAccount extends BankAccount {
        constructor(id: number, name: string, balance: number){
            super(id, name, balance);
            this //here we can not access _balance because it is private
        }
    }

    const myAccount = new BankAccount(123, 'my account', 0)
    myAccount.updateBalance(100000)
    const amount = myAccount.getBalance()
    console.log(amount)
}