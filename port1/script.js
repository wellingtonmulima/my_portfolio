document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    alert("Thank you for your response, we'll get back to you!");
    this.reset();

    console.log("Message received");
});