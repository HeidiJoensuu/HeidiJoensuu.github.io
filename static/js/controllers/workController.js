export const work = (pay) => {
    pay.work(100)
}

export const bank = (pay, balance) => {
    let toBalance = pay.getPay()
    if (balance.getLoan() != 0) {
        let loanPay = pay.getPay()*0.1
        toBalance = (toBalance - loanPay)
        let payBalance = (balance.getLoan()-loanPay)
        if (payBalance < 0 ) {
            loanPay += payBalance
            toBalance += (payBalance * -1)
        }
        balance.payLoan(loanPay)
    }
    balance.bankMoney(toBalance)
    pay.bankMoney()
}

export const payLoan = (pay, balance) => {
    let loanPay = pay.getPay()
    let toBalance = 0
    let payBalance = (balance.getLoan()-pay.getPay())
    if (payBalance < 0 ) {
        loanPay += payBalance
        toBalance += (payBalance * -1)
        console.log('new:', loanPay, toBalance);
    }
    balance.payLoan(loanPay)
    balance.bankMoney(toBalance)
    pay.bankMoney()
}
