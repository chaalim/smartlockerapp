// Navigation helper
function goTo(page) {
  window.location.href = page;
}

// Stub for menu toggle (you can implement sidebar toggle here)
function toggleMenu() {
  alert('Menu toggle clicked! Implement sidebar toggle here.');
}

// ===== Sign In =====
function signIn() {
  const email = document.getElementById('signin-email').value.trim();
  const password = document.getElementById('signin-password').value.trim();

  if (email && password) {
    alert('Login successful!');
    goTo('dashboard.html');
  } else {
    alert('Please enter your credentials.');
  }
}

// ===== Register =====
function register() {
  const username = document.getElementById('reg-username').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value.trim();

  if (username && email && password) {
    alert('Registered successfully!');
    goTo('index.html');
  } else {
    alert('Please fill all fields.');
  }
}

// ===== Save Profile (Edit) =====
function saveProfile() {
  alert('Profile updated!');
  goTo('profile.html');
}

// ===== Items Page Functionality =====
document.addEventListener('DOMContentLoaded', () => {
  const itemForm = document.getElementById('item-form');
  const itemInput = document.getElementById('item-input');
  const itemList = document.getElementById('item-list');

  if (itemForm && itemInput && itemList) {
    itemForm.addEventListener('submit', e => {
      e.preventDefault();
      const val = itemInput.value.trim();
      if (!val) return;

      const div = document.createElement('div');
      div.className = 'item dashboard-btn';
      div.style.display = 'flex';
      div.style.justifyContent = 'space-between';
      div.style.alignItems = 'center';

      div.innerHTML = `
        <span>${val}</span>
        <button class="btn-remove">REMOVE</button>
      `;

      itemList.appendChild(div);

      div.querySelector('.btn-remove').addEventListener('click', () => {
        div.remove();
      });

      itemInput.value = '';
      itemInput.focus();
    });

    // Attach remove event to existing items on page load
    document.querySelectorAll('.btn-remove').forEach(button => {
      button.addEventListener('click', () => {
        button.parentElement.remove();
      });
    });
  }
});
