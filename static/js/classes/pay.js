class Pay {
    #pay

    constructor(pay) {
        this.#pay = pay
    }

    printPay() {
        return `${this.#pay} NOK`
    }
    getPay(){
        return this.#pay
    }
    
    work(money) {
        this.#pay += money    
    }

    bankMoney() {
        this.#pay = 0
    }   
}
export default Pay