let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Get the sibling element (the toggle content)
    const toggleContent = btn.nextElementSibling;

    // Toggle the active class for the clicked button and content
    btn.classList.toggle('active');
    toggleContent.classList.toggle('active');

    // Hide other open toggle contents
    toggleBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove('active');
        otherBtn.nextElementSibling.classList.remove('active');
      }
    });
  });
});


// Auto Typing Effect
const typed = document.querySelector('.typed');

if(typed){
  let typed_strings = typed.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed',{
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

// Skills Section Starts
$('.technical-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTime:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      400:{
        items:2,
        nav:true
      },
      702:{
          items:3,
          nav:true
      },
      1050:{
          items:4,
          nav:true
      },
      1340:{
        items:5,
        nav:true
    },
      1600:{
        items:6,
        nav:true
    }
  }
});

  // sending email with validation

    emailjs.init("QJV_vAGN9GdHf1Bm2");

    document.addEventListener("DOMContentLoaded", function() {
            var emailInput = document.getElementById("emailInput");
            var emailError = document.getElementById("emailError");
            var sendButton = document.getElementById("sendButton");
            var nameInput = document.getElementById("nameInput");
            var messageInput = document.getElementById("messageInput");
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        sendButton.addEventListener("click", function() {
            const name = nameInput.value;
            const email = emailInput.value;
            const message = messageInput.value;
            if(nameInput.value.trim() !== "" && messageInput.value.trim() !== "" && emailInput.value.match(mailformat))
              { 
                // Remove invalid class from the button
                sendButton.classList.remove("invalid");
                // Sending the email
                emailjs.send("service_6l5nc8k","template_qpw6f5e", {
                      to_email: "skspavithiran@gmail.com", //  my desired email address
                      to_name: "PAVITHIRAN",
                      from_name: name,
                      message: message,
                      reply_to: email
                  }).then(function(response) {
                      console.log("Email sent successfully:", response);
                      alert("Email sent successfully!");
                  }, function(error) {
                      console.error("Email could not be sent:", error);
                      alert("Email could not be sent.");
                  });

                // Clear input fields after successful submission
                  nameInput.value = "";
                  emailInput.value = "";
                  messageInput.value = "";
                  emailError.textContent = "";
              }
            else
            {
              var err1 = "";
              var err2 = "";
              if (nameInput.value.trim() === "") {
                  err1 = "Name is empty";
              }
              if (messageInput.value.trim() === "") {
                  err1 += (err1 ? ", " : "") + "Message is empty";
              }
              if (!emailInput.value.match(mailformat)) {
                  err2 = "Invalid email address";
              }
              emailError.textContent = err1 + (err1 && err2 ? " and " : "") + err2;
              sendButton.classList.add("invalid");
              emailInput.focus();
            }
        });
  });

        