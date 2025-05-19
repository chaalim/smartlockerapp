// ===== Navigation Helpers =====
function navigateTo(page) {
  window.location.href = page;
}

// For pages that used inline goBack()
function goBack() {
  // Guessing most “back” buttons go to dashboard
  navigateTo('dashboard.html');
}

// ===== Authentication =====
function signIn() {
  const emailEl = document.getElementById('signin-email') 
                || document.querySelectorAll('.input')[0];
  const passEl  = document.getElementById('signin-password') 
                || document.querySelectorAll('.input')[1];

  const email    = emailEl.value.trim();
  const password = passEl.value.trim();

  if (email && password) {
    alert('Login successful!');
    navigateTo('dashboard.html');
  } else {
    alert('Please enter your credentials.');
  }
}

function register() {
  const userEl = document.getElementById('reg-username')
              || document.querySelector('input[placeholder="User Name"]');
  const emailEl= document.getElementById('reg-email')
              || document.querySelector('input[type="email"]');
  const passEl = document.getElementById('reg-password')
              || document.querySelector('input[type="password"]');

  const username = userEl.value.trim();
  const email    = emailEl.value.trim();
  const password = passEl.value.trim();

  if (username && email && password) {
    alert('Registered successfully!');
    navigateTo('index.html');
  } else {
    alert('Please fill all fields.');
  }
}

// ===== Profile =====
function saveProfile() {
  // Placeholder: hook into form or backend here
  alert('Profile updated!');
  navigateTo('profile.html');
}

// ===== DOM-Loaded Wiring =====
document.addEventListener('DOMContentLoaded', () => {
  // ITEMS PAGE: add & remove
  const itemForm  = document.getElementById('item-form');
  const itemInput = document.getElementById('item-input');
  const itemList  = document.getElementById('item-list');

  if (itemForm && itemInput && itemList) {
    itemForm.addEventListener('submit', e => {
      e.preventDefault();
      const val = itemInput.value.trim();
      if (!val) return;

      const div = document.createElement('div');
      div.className = 'item';
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
    });
  }

  // NOTIFICATIONS PAGE: static list
  const notifContainer = document.querySelector('.notifications');
  if (notifContainer) {
    notifContainer.innerHTML = ''; // clear existing
    const messages = [
      'Your Smart Locker has been locked.',
      'Item “Laptop” removed successfully.',
      'Unauthorized access attempt detected!'
    ];
    messages.forEach(msg => {
      const n = document.createElement('div');
      n.className = 'notif';
      n.innerHTML = `Smart Locker<br/><small>${msg}</small>`;
      notifContainer.appendChild(n);
    });
  }

  // STATUS PAGE: static log
  const logList = document.querySelector('.log-list');
  if (logList) {
    logList.innerHTML = '';
    ['LOCKED - 8:12 AM', 'UNLOCKED - 7:30 AM', 'ATTEMPT - 7:15 AM']
      .forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        logList.appendChild(li);
      });
  }

  // Hook generic back buttons (if any)
  document.querySelectorAll('.back-btn, .icon.back').forEach(btn =>
    btn.addEventListener('click', goBack)
  );
});
