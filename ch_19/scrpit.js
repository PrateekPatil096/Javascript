const cart=["shoes","pants","shirts"];

const promise=createOrder(cart);

promise.then(function (orderId){
    proceedToPayment(orderId);
});