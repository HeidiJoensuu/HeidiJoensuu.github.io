class Loan {
    constructor(loan) {
        this.loan = loan;
    }

    printLoan() {
        return `${this.loan}€`
    }
    
    getLoan() {
        return this.loan
    }
    
    getNewLoan(money) {
        this.loan = money    
    }

    payLoan(money) {
        this.loan -= money
    }   
}

export default Loan