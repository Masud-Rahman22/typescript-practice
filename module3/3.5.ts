{
    // access modifiers
    // this is to understand private access modifier
    class BankAccount1 {
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

    const myAccount = new BankAccount(123, 'my account', 0)
    myAccount.updateBalance(100000)
    const amount = myAccount.getBalance()
    console.log(amount)
    
    // this i sto understand protected access modifier
    class BankAccount {
        public readonly id: number; // by default public is added so no need to tell explicitly & readonly means can not change this property.
        public name: string; // by default public is added so no need to tell explicitly
        protected _balance: number; // by default public is added so no need to tell explicitly & protected means it is accessible inside the class as well as for the children of this class and _balance this is just convention

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
    class StudentAccount extends BankAccount{
        test(){
            this._balance // here _balance is accessible because this is child of BankAccounts
        }
    }
}