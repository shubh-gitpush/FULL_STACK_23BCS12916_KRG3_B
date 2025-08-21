document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
  
    let valid = true;
  
    // Name validation
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required";
      valid = false;
    } else {
      document.getElementById("nameError").innerText = "";
    }
  
    // Email validation
    if (email === "") {
      document.getElementById("emailError").innerText = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email format";
      valid = false;
    } else {
      document.getElementById("emailError").innerText = "";
    }
  
    // Password validation
    if (password === "") {
      document.getElementById("passwordError").innerText = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
      valid = false;
    } else {
      document.getElementById("passwordError").innerText = "";
    }
  
    if (valid) {
      alert("Form submitted successfully!");
      document.getElementById("signupForm").reset();
    }
  });
  