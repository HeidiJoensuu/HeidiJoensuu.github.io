/**
 * This function adds 100 to pay property
 * @param {Number} pay Pay class
 */
export const work = (pay) => {
    pay.work(100)
}

/**
 * This function tranfer money from pay property to bank and loan properties
 * @param {Number} pay Pay class
 * @param {Number} balance  BankBalanse class
 */
export const bank = (pay, balance) => {
    let toBalance = pay.getPay()
    //Check if there is any loan
    if (balance.getLoan() != 0) {
        let loanPay = pay.getPay()*0.1
        toBalance = (toBalance - loanPay)
        let payBalance = (balance.getLoan()-loanPay)
        //If loan is about to go negative, the the excess of money is added to toBalance-variable
        if (payBalance < 0 ) {
            loanPay += payBalance
            toBalance += (payBalance * -1)
        }
        balance.payLoan(loanPay)
    }
    balance.bankMoney(toBalance)
    pay.bankMoney()
}

/**
 * This function tranfer money from pay property to loan property
 * @param {Number} pay Pay class
 * @param {Number} balance BankBalanse class
 */
export const payLoan = (pay, balance) => {
    let loanPay = pay.getPay()
    let toBalance = 0
    let payBalance = (balance.getLoan()-pay.getPay())
    //Same check as line 22
    if (payBalance < 0 ) {
        loanPay += payBalance
        toBalance += (payBalance * -1)
    }
    balance.payLoan(loanPay)
    balance.bankMoney(toBalance)
    pay.bankMoney()
}
