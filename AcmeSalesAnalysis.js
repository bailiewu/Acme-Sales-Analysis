console.clear();
const products = [
  {
    id: 1,
    name: 'foo',
    price: 7
  },
  {
    id: 2,
    name: 'bar',
    price: 2
  },
  {
    id: 5,
    name: 'bazz',
    price: 1
  },
];

const users = [
  {
     id: 1,
     name: 'moe'
  },
  {
     id: 2,
     name: 'larry'
  },
  {
     id: 3,
     name: 'curly'
  }
];

// productId matches up with product in products
// userId matches up with user in users
const orders = [
  {
    id: 1,
    productId: 1,
    quantity: 3,
    userId: 1
  },
  {
    id: 2,
    productId: 1,
    quantity: 7,
    userId: 1
  },
  {
    id: 3,
    productId: 5,
    quantity: 70,
    userId: 3
  },
  {
    id: 3,
    productId: 5,
    quantity: 1,
    userId: 3
  }
];

function productsPurchased(orders, products) {
    // need to return foo & bar
    // go to products, if an order exists, return product's name
    return products.filter( product => {
        return orders.find( order => {
            return order.productId === product.id
        })
    }).map( x => x.name)
}

function topSellingProductByQuantity(orders, products) {
    //returns bazz
    //total product object, then return product name with highest total
    //cycle through orders, adding to sales to productid.
    let totalProductSales = [] //has {productid, total}
    orders.forEach(order => {
        //check if totalProductSales has a productid that matches orders.productid
        if (totalProductSales.find( product => order.productId === product.productId)){
            totalProductSales[totalProductSales.findIndex(prod => prod.productId === order.productId)].total += order.quantity
        } else {
            totalProductSales.push({
                productId: order.productId,
                total:  order.quantity
            })
        }
    });
    //find highest val sales and return
    let max = 0, prodIdMax = 0;
    totalProductSales.forEach(element => {
        if (element.total > max){
            max = element.total
            prodIdMax = element.productId
        }
    });
    return products.filter(product => product.id === prodIdMax)
    .map(x => x.name)
}

function usersWithOrders(users, orders) {
    //cycle through orders, add name to result
    return users.filter(user => orders.map(order => order.userId).indexOf(user.id) > -1)
    .map( x => x.name)
}

console.log(productsPurchased(orders, products)); // logs foo and bar products

console.log(topSellingProductByQuantity(orders, products));//logs bazz product

console.log(usersWithOrders(users, orders));//logs info on moe and curly