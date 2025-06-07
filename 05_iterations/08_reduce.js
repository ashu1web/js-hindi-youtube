const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
//every time whether ypu write acc+curr or not acc will always be acc=acc+curr

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 1
    },
    {
        itemName: "py course",
        price: 2
    },
    {
        itemName: "mobile dev course",
        price: 3
    },
    {
        itemName: "data science course",
        price: 4
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    console.log(`acc:${acc} and item.price val:${item.price}`);
    return acc+item.price
},0)


console.log(priceToPay);