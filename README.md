# Acme-Sales-Analysis
# 02.md
```javascript

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

console.log(productsPurchased(orders, products)); // logs foo and bar products

console.log(topSellingProductByQuantity(orders, products));//logs bazz product

console.log(usersWithOrders(users, orders));//logs info on moe and curly
```
- write the productsPurchased, topSellingProductByQuantity, and usersWithOrdersMethods
- name your repo - Acme-Sales-Analysis
- slack your repo to your fellow by start of class on tuesday