export const newLoan = (balance) => {
    let amount = Number(window.prompt('Amount:'))
    if (balance.getLoan() != 0) alert("You already have a loan")
    else if (balance.getBalance()/2 - amount  < 0) alert("You can not get this much loan")
    else {
        balance.getNewLoan(amount)
    }
}

export const useMoney = (balance, selected) => {
    try {
        const euroPrice = selected.price/10    
        if (balance.getBalance() < euroPrice) alert("Not enough money")
        else balance.useMoney(euroPrice)
    } catch (error) {
        alert(error)
    }
}