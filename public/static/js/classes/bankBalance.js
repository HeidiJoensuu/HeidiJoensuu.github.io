import Loan from "./loan.js"

class BankBalance extends Loan {
    #name
    #balance

    constructor(name, balance, loan) {
        super(loan)
        this.#name = name
        this.#balance = balance
    }

    printName() {
        return this.#name
    }

    printBalance() {
        return `${this.#balance+this.loan}€`
    }
    
    getBalance() {
        return this.#balance+this.loan
    }

    bankMoney(money) {
        this.#balance += money
    }

    useMoney(money) {
        this.#balance -= money
    }   
}

export default BankBalance
