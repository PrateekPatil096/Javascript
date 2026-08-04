const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then(function() {
    proceedToPayment(orderId);
});

function createOrder(cart) {

    const pr = new Promise(function(resolve, reject) {

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "12345";

        if (orderId) {
            resolve(orderId);
        }

    });

    return pr;
}