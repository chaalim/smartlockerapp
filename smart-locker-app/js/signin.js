document.querySelector('.btn-black').addEventListener('click', function() {
    const email = document.querySelectorAll('.input')[0].value;
    const password = document.querySelectorAll('.input')[1].value;
  
    if (email === 'admin@example.com' && password === '1234') {
      alert('Login successful!');
      window.location.href = 'home.html';
    } else {
      alert('Invalid credentials.');
    }
  });
  