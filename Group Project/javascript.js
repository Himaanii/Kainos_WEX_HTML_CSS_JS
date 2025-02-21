16402985

var list = []
var customer_Orders = []



function subscribe() {
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var email = document.getElementById("email").value

    var subscriber = {
        firstName: fname,
        lastName: lname,
        email: email,
    }
    
    mailingList.push(subscriber)
    console.log(mailingList) // To verify the booking was added
    alert("You've successfully subscribed");
    
    //var email = document.getElementById("email").value
    
    /*
    for (let i = 0; i < mailingList.length; i++) {
        if (mailingList[i].email == email) {
            alert("You've already subscribed")
        } else {
            mailingList.push(subscriber)
            console.log(mailingList) // To verify the booking was added
            alert("You've successfully subscribed")
        }
    }
    */
}



function func(){
    let name  = document.getElementById("name");
    let email = document.getElementById("email");
    let street = document.getElementById("street");
    let product = document.getElementById("product");
    
    const para = document.getElementById("demo");
    
    //checks if any values left empty, naughty customer
     if (name.value.trim()===""||email.value.trim()===""||product.selectedIndex===0||street.value.trim()===""){
        
    }else{
        
    var order_details = [name,email,street,product]
    customer_Orders.push(order_details)
    console.log(customer_Orders)
    
    alert("Order successfully placed!")
    
    
}