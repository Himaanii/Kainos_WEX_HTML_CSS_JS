function checkAvailability() {
    // We'll add code here soon
}

var freeTables = 10
var bookings = []

function checkAvailability() {
    if(freeTables > 0) {
        alert("There are tables available")
    } else if (freeTables == 0) {
        alert("There are no tables available")
    } else {
        alert("Something has gone wrong")
    }
}

function bookTable() {
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var email = document.getElementById("email").value
    var date = document.getElementById("date").value
    
    var booking = {
        firstName: fname,
        lastName: lname,
        email: email,
        date: date
    }
    
    bookings.push(booking)
    console.log(bookings) // To verify the booking was added
}

function checkBooking() {
    var email = document.getElementById("checkBookingEmail").value
    
    for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].email == email) {
            document.getElementById("emptyFname").innerText = bookings[i].firstName
            document.getElementById("emptyLname").innerText = bookings[i].lastName
            document.getElementById("emptyEmail").innerText = bookings[i].email
            document.getElementById("emptyDate").innerText = bookings[i].date
        }
    }
}