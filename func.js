function calculateTotalSpentByCategory(transactions) {
    const store = {};
    transactions.forEach(element => {
        if(!store[element.category]){
            store[element.category] = {
                price : 0,
                check : false,
            };
        }
        store[element.category].price += element.price;
    });
    const newArray = [];
    transactions.forEach((t)=>{
       const category = t.category;
       const spend = store[category].price;
     
       if(store[category].check == false){
       newArray.push({
        price : spend,
        category
       });
       store[category].check = true;
      }
    })
    return newArray;
    }
    const transactions = [
      { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
      { id: 2, timestamp: 1656076800000, price: 20, category: 'Food', itemName: 'Burger' },
      { id: 3, timestamp: 1656076800000, price: 15, category: 'Clothes', itemName: 'T-shirt' },
      { id: 4, timestamp: 1656076800000, price: 30, category: 'Food', itemName: 'Sushi' },
      { id: 5, timestamp: 1656076800000, price: 25, category: 'Clothes', itemName: 'Jeans' }
    ];
    const totalSpentByCategory = calculateTotalSpentByCategory(transactions);
    const store = {};
    
   console.log(totalSpentByCategory);
   