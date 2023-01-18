/**
 * This function asks amount of loan and adds it into loan property
 * @param {Number} balance  BankBalanse class
 */
export const newLoan = (balance) => {
    let amount = Number(window.prompt('Amount:'))
    if (typeof amount !== 'number' && amount !== 0) alert("Only numbers, please.")
    else if (String(amount).includes('.') || String(amount) === 'NaN') alert("Only full numbers, please.")
    else {
        if (balance.getLoan() != 0) alert("You already have a loan")
        else if (balance.getBalance()/2 - amount  < 0) alert("You can not get this much loan")
        else {
            balance.getNewLoan(amount)
        }
    }
}
    
/**
 * This function removes x-amount of money from BankBalance
 * @param {Number} balance  BankBalanse class
 * @param {Object} selected Selected option
 */
export const useMoney = (balance, selected) => {
    try {
        //This modification so that prices would sound more realistic in euros.
        const euroPrice = selected.price/10    
        if (balance.getBalance() < euroPrice) alert("Not enough money")
        else {
            balance.useMoney(euroPrice)
            alert(`You now own computer: ${selected.title}`)
        }
    } catch (error) {
        alert(error)
    }
}