const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }
    tellMeBalance(){
        console.log(`Sizning hisobingiz: ${this.#amount}$`);
        return this.#amount;
    }
    withDrawMoney(amount){
        if(this.#amount >= amount){
            this.#amount -= amount;
            console.log(`Hisobigizdan ${amount}$ pul yechildi va hozirgi hisobingiz ${this.#amount}$`);
        } else {
            console.log(`Hisobingizda yetarli mablag mavjud emas, hisobingiz ${this.#amount}$`);
        }
    }
    makeDeposit(amount){
        this.#amount += amount;
        console.log(`Hisobingiz ${amount}$ ga toldirildi va hozirgi hisobingiz ${this.#amount}$`);
    }
    giveMeDetails(){
        console.log(`Salom ${this.name}, sizning hisobingiz ${this.#amount}$, sizning hisob raqamingiz: ${this.#account_id}`);

    }

    static tellMeAboutClass(){
        console.log("Bu class accountlarni yasash uchun hizmat qiladi");
    }
    static tellMeTime(){
        console.log(`Hozirgi vaqt ${moment().format("YYYY MM DD HH:mm:ss")}`);

    }
}

module.exports = Account;
