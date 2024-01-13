
var users = [
    { email: "admin@gmail.com", password: "12345678", redirect: "" },
    { email: "Panel@gmail.com", password: "12345678", redirect: "page2.html" },
    { email: "kavith", password: "12345678", redirect: "Owner/owner.html" },
    { email: "kimaya123", password: "12345678", redirect: "Dashboard/dashboard.html" }
];

function auth() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = users.find(u => u.email === email && u.password === password);

    if (user) {
        window.location.assign(user.redirect);
        
    } else {
        alert("Invalid User");
    }
}





// function auth(){
//     var email=document.getElementById("email").value;
//     var password=document.getElementById("password").value;


// if(email=="admin@gmail.com" && password==12345678)
// {
//     window.location.assign("dashboard.html");
//     alert("login Successfully");
// }
// else if(email=="Panel@gmail.com" && password==12345678)
// {
//     window.location.assign("page2.html");
//     alert("login Successfully");

// }

// else if(email=="Panel2@gmail.com" && password==12345678)
// {
//     window.location.assign("page3.html");
//     alert("login Successfully");

// }


// else{
//     alert("Invalid User ");
//     return;
// }

// }

