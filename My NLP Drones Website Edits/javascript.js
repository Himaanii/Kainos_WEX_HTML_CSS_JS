
var list = []
var customer_Orders = []

function updateGreeting() {
    let greeting;
    const hour = new Date().getHours();
    if (hour < 12) {
      greeting = 'Good Morning';
    } else if (hour < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
    document.getElementById("greeting").innerText = greeting + " from DroneInc!";
  }

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



function func() {
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
}


/*
var currentState = true;
var fileName = document.getElementById('css_file').href
function switchTheme() {
    currentState = !currentState;
    if (currentState) {
        fileName = "light_mode.css";
    } 
    else {
        fileName = "dark_mode.css";
    }
    document.getElementById('css_file').href = fileName;
    
}
let changeButton = document.querySelector(".change_theme");
changeButton.addEventListener('click', switchTheme);
*/

//localStorage.setItem("fileName", document.getElementById('css_file').href);


document.getElementById('css_file').href = localStorage.getItem("fileName");

var fileName = document.getElementById('css_file').href
function switchTheme() {
  console.log(localStorage.getItem("fileName"))
  if (fileName.includes("dark_mode")) {
    fileName = "light_mode.css";
  } 
  else {
    fileName = "dark_mode.css";
  }
  document.getElementById('css_file').href = fileName
  //console.log(localStorage.getItem("fileName"))
  localStorage.setItem("fileName",fileName);
  
  
}
let changeButton = document.querySelector(".change_theme");
changeButton.addEventListener('click', switchTheme);
