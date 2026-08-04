/*const cart=["shoes","pants","shirts"];

const promise=createOrder(cart);

promise.then(function (orderId){
    proceedToPayment(orderId);
});*/

const GITHUB_API="https://github.com/PrateekPatil096/Javascript.git"

const user=fetch(GITHUB_API);

console.log(user);

const cart=["shoes","pants","shirts"];

createOrder(cart)
.then((orderId)=> proccedToPayemnt(orderId))
.then((paymentInfo)=> showOrderSummary(paymentInfo))
.then((paymentInfo)=> updateWalletBalance(paymentInfo));