function signIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
  
    // Placeholder for actual login logic
    if (email && password) {
      alert("Login successful!");
      window.location.href = 'home.html';
    } else {
      alert("Please enter your credentials.");
    }
  }
  
  function register() {
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
  
    if (username && email && password) {
      alert("Registered successfully!");
      window.location.href = 'index.html';
    } else {
      alert("Please fill all fields.");
    }
  }
  