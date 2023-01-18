import fetchData from "./api/data.js"
import BankBalance from "./classes/bankBalance.js"
import Pay from "./classes/pay.js"
import { work, bank, payLoan } from "./controllers/workController.js"
import { newLoan, useMoney } from "./controllers/bankController.js"
import { computerList, features } from "./controllers/computersListController.js"
import { computerView, imageView } from "./controllers/computerViewController.js"

const app = async () => {
    const balance = new BankBalance("Joe Banker", 0, 100)
    const pay = new Pay(400)
    const data = await fetchData()

    //
    const elGetLoanButton = document.getElementById("btn-get-loan")
    const elWorkButton = document.getElementById("btn-work")
    const elBankButton = document.getElementById("btn-bank")
    const elRepayLoanButton = document.getElementById("btn-repay-loan")
    const elSelection = document.getElementById("selection")
    const elBuyButton = document.getElementById("buy-now")

    //
    const setNumbers = () => {
        document.getElementById("bank-money").innerHTML = balance.printBalance()
        document.getElementById("loan-money").innerHTML = balance.printLoan()
        document.getElementById("work-money").innerHTML = pay.printPay()
        if (balance.getLoan() != 0) document.getElementById("btn-repay-loan").style.visibility = 'visible'
        else document.getElementById("btn-repay-loan").style.visibility = 'hidden'
    }
    //
    setNumbers()
    computerList(elSelection, data)
    features(data[(elSelection.value-1)])
    imageView(data[(elSelection.value-1)])
    computerView(data[(elSelection.value-1)])

    //Getting loan button
    elGetLoanButton.addEventListener('click', () => {
        newLoan(balance)
        setNumbers()
    })

    //Work button
    elWorkButton.addEventListener('click', () => {
        work(pay)
        setNumbers()
        console.log(elSelection, elSelection.selectedIndex+1)
        console.log(elSelection.value);
    })
    //Bank button
    elBankButton.addEventListener('click', () => {
        bank(pay, balance)
        setNumbers()
    })

    //Repay button
    elRepayLoanButton.addEventListener('click', () => { 
        payLoan(pay, balance)
        setNumbers()
    })
    
    //
    elSelection.addEventListener("change", () => {
        const selected = data[(elSelection.value-1)]
        features(selected)
        computerView(selected)
        imageView(selected)
    })

    //
    elBuyButton.addEventListener("click", () => {
        useMoney(balance,data[(elSelection.value-1)])
        setNumbers()
    })
}

app()