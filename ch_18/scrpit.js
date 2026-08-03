const cart=["shoes"," pants","shirt"];

api.createOrder(cart,function(){
    api.proccedToPayment(function(){

        api.showOrderSummary(

            function(){
                api.updateWallet()
            }
        )
    })
})