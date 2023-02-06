class VegetableStore {

    constructor (owner,location) {

        this.owner = owner;
        this.location = location;
        this.availableProducts = [];

    }
    
    loadingVegetables (vegetables) {

        let uniqueTypes = [];  

        for (let line of vegetables) {                      // Минаваме по получения масив
            let [type, quantity, price] = line.split(" ");  // Сплитваме и деструктурираме
            quantity = Number(quantity);                    // Парсваме към число 
            price = Number(price);                          // Парсваме към число

            let product = this.availableProducts.find((vegetable) => vegetable.type === type);  
            // Намираме продукта в масива като сравняваме получения тип с тези в масива на всеки продукт, връща първото съвпадение, ако няма връща undefined 
           
            if (product === undefined) {        // Ако НЯМА такъв продукт в масива 
                let vegetable = {               // Създаваме с изброените пропъртита 
                    type,
                    quantity,
                    price,
                };
                this.availableProducts.push(vegetable);     // Добавяме го към масива
                uniqueTypes.push(type);                     // Дадения тип го добавяме към масива с уникалните продуктите 
            } else {                            
                product.quantity += quantity;   // Към количеството на намерения продукт, добавяме полученото от параметъра 
                if (product.price < price) {    // Ако цената на намерения продукт е по-ниско от получената от параметъра 
                    product.price = price;      // Я подменяме 
                }
            }
        }

        return `Successfully added ${uniqueTypes.join(", ")}`;  // Връщаме уникалните продукти, които сме добавили 
    }
    
    buyingVegetables (selectedProducts) {

        let totalPrice = 0;
        
        for(let line of selectedProducts){

            let [type, quantity] = line.split(' ');
            quantity = Number(quantity);

            let product = this.availableProducts.find((vegetable) => vegetable.type === type);


            if(product === undefined){
                throw new Error (`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if(quantity > product.quantity){
                throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            let currentPrice = quantity*product.price;
        totalPrice += currentPrice;
        product.quantity -= quantity;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
        
    }
    
    rottingVegetable (type, quantity){

        let product = this.availableProducts.find((vegetable) => vegetable.type === type);

        if(product === undefined){
            throw new Error (`${type} is not available in the store.`)
        }

        if(quantity >= product.quantity){
            product.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }else{
            product.quantity -= quantity;
            return  `Some quantity of the ${type} has been removed.`
        }
    }
    
    revision () {

        let result = [];

        result.push("Available vegetables:");

        this.availableProducts
        .sort((a, b) => a.price - b.price)
        .map((product) => result.push(`${product.type}-${product.quantity}-$${product.price}`));

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n')
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
