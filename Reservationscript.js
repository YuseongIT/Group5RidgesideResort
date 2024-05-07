function sendEmail() {

    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var email = document.getElementById('userEmail').value;
    var contact = document.getElementById('contactNumber').value;
    var room = document.getElementById('roomType').value;
    var guest = document.getElementById('guestNumber').value;
    var service = document.getElementById('serviceType').value;
    var checkin = document.getElementById('checkIn').value;
    var checkout = document.getElementById('checkOut').value;
    

        Email.send({
        Host: "smtp.elasticemail.com", 
        Username: "mdaespela@tip.edu.ph", 
        Password: "B2185E539F5484D9E6E0F62BED7C52A738AE",
        To : document.getElementById('userEmail').value,
        From : "mdaespela@tip.edu.ph",
        Subject : "Reservation Form",
        Body : "Name: " + fname + " " + lname +
                "<br>Contact: " + contact +
                "<br>No. of Guests: " + guest +
                "<br>Service Type: " + service +
                "<br>Arrival Date: " + checkin +
                "<br>Departure Date: " + checkout +
                "<br><br>Thank for choosing Ridgeside Resort!"
    });


    if (fname == "" || lname == ""|| email == ""|| contact == ""|| guest == ""|| service == ""|| checkin == ""|| checkout == "") {
        alert("Please fill in the required input.");
    } else {
        alert("Thank you for using our website!" +
            "\nYou reservation has been submitted.");
        
        fname = document.getElementById('firstName').value = "";
        lname = document.getElementById('lastName').value =  "";
        email = document.getElementById('userEmail').value =  "";
        contact = document.getElementById('contactNumber').value =  "";
        room = document.getElementById('roomType').value = "";
        guest = document.getElementById('guestNumber').value =  "";
        service = document.getElementById('serviceType').value =  "";
        checkin = document.getElementById('checkIn').value =  "";
        checkout = document.getElementById('checkOut').value =  "";
    }

}