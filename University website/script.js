document.addEventListener("DOMContentLoaded",
    function(){
        const timelineItems =
        document.querySelectorAll('.timeline-item');
        const isInViewport = (e!)=>{
            const rect = el .getBoundingClienRect();
            return rect.top>= && rect.bottom <=
            window.innerHeight;
        };
        const checkTimeline = ()=>{
            timelineItems.forEach(item => {
                if (isInViewport(item)) {
                    item . classList.add('visible');
                    
                }
            });
        };
        checkTimeline();
        window.addEventListener('scroll',checkTimeline);

   })


document.addEventListener("DOMContentLoaded", function () {
    const admissionForm = document.getElementById("admissionForm");
    if (admissionForm) {
        admissionForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Application submitted successfully!");
        });
    }

    
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            
            if (username === "student" && password === "password123") {
                alert("Login Successful!");
                window.location.href = "index.html"; 
            } else {
                alert("Invalid credentials!");
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {

    
    const paymentForm = document.getElementById("paymentForm");
    if (paymentForm) {
        paymentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let amount = document.getElementById("amount").value;
            let method = document.getElementById("paymentMethod").value;

            if (method === "bkash") {
                
                let bkashPaymentUrl = https:example-bkash-api.com/pay?amount=${amount}&merchantId=YOUR_MERCHANT_ID;

                
                window.location.href = bkashPaymentUrl;
            } else {
                alert("Invalid payment method selected!");
            }
        });
    }

});


document.addEventListener("DOMContentLoaded", function () {
    
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            
            if (username === "student" && password === "password123") {
                localStorage.setItem("userRole", "student");
                alert("Login Successful!");
                window.location.href = "dashboard.html";
            } else if (username === "faculty" && password === "faculty123") {
                localStorage.setItem("userRole", "faculty");
                alert("Login Successful!");
                window.location.href = "faculty.html";
            } else {
                alert("Invalid credentials!");
            }
        });
    }


    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            localStorage.removeItem("userRole");
            alert("Logged out successfully!");
            window.location.href = "login.html";
        });
    }

});




document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        });

    
    document.getElementById("academic-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let program = document.getElementById("program").value;

        let application = { name, email, program };
        localStorage.setItem("academicApplication", JSON.stringify(application));

        alert("Your application has been saved in Local Storage!");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        });


    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let contactData = { name, email, message };
        localStorage.setItem("contactMessage", JSON.stringify(contactData));

        alert("Your message has been saved in Local Storage!");
    });
});

