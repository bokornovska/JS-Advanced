class Bank {
    constructor (bankName){
        this._bankName = bankName;
        this.allCustomers = [];
        this.transactions = [];
    }

    newCustomer (customer){

        const findCustomer = this.allCustomers.find((x) => {
            return x.firstName === customer.firstName || x.lastName === customer.lastName
        });
 
        if (findCustomer) {
            throw Error(`${findCustomer.firstName} ${findCustomer.lastName} is already our customer!`)
        } else {
            this.allCustomers.push(customer);
            return customer;
        }
    }
    
    depositMoney (personalId, amount){

        const findCustomer = this.allCustomers.find((x) => { return x.personalId === personalId });
 
        if (!findCustomer) {
            throw Error('We have no customer with this ID!')
        }
        if (isNaN(findCustomer['totalMoney'])) {
            findCustomer['totalMoney'] = amount;
        } else {
            findCustomer['totalMoney'] += amount;
        }
        this.transactions.push(`${findCustomer.firstName} ${findCustomer.lastName} made deposit of ${amount}$!`)
        return `${findCustomer['totalMoney']}$`
    }

    withdrawMoney(personalId, amount) {
        const findCustomer = this.allCustomers.find((x) => { return x.personalId === personalId });
 
        
        if (!findCustomer) {
            throw Error('We have no customer with this ID!');
        }
 
        if (findCustomer.totalMoney < amount) {
            throw Error(`${findCustomer.firstName} ${findCustomer.lastName} does not have enough money to withdraw that amount!`)
        }
 
        findCustomer.totalMoney -= amount;
        this.transactions.push(`${findCustomer.firstName} ${findCustomer.lastName} withdrew ${amount}$!`);
        return `${findCustomer.totalMoney}$`
    }
 
    customerInfo(personalId) {
        const info = this.allCustomers.find((x) => { return x.personalId === personalId });
        let transaction = this.transactions.filter((x) => { return x.includes(info.firstName) });
        let reversed = transaction.reverse();
 
        let result = `Bank name: ${this._bankName}\nCustomer name: ${info.firstName} ${info.lastName}\nCustomer ID: ${info.personalId}\nTotal Money: ${info.totalMoney}$\nTransactions:`;
        let counter = reversed.length;
 
        reversed.forEach(x => result += '\n' + `${counter--}. ` + x);
 
        return result.trim();
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));




