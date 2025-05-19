// ===== Navigation Helpers =====
function goTo(page) {
  window.location.href = page;
}

// Stub for menu toggle (left “hamburger” icon)
function toggleMenu() {
  // e.g., document.querySelector('.sidebar').classList.toggle('open');
  console.log('toggleMenu called');
}

// ===== Authentication =====
function signIn() {
  const emailEl = document.getElementById('signin-email');
  const passEl  = document.getElementById('signin-password');
  const email    = emailEl.value.trim();
  const password = passEl.value.trim();

  if (email && password) {
    alert('Login successful!');
    goTo('dashboard.html');
  } else {
    alert('Please enter your credentials.');
  }
}

function register() {
  const userEl = document.getElementById('reg-username');
  const emailEl= document.getElementById('reg-email');
  const passEl = document.getElementById('reg-password');

  const username = userEl.value.trim();
  const email    = emailEl.value.trim();
  const password = passEl.value.trim();

  if (username && email && password) {
    alert('Registered successfully!');
    goTo('index.html');
  } else {
    alert('Please fill all fields.');
  }
}

// ===== Profile =====
function saveProfile() {
  // Persist changes to backend or localStorage here
  alert('Profile updated!');
  goTo('profile.html');
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
  }

  // NOTIFICATIONS PAGE: populate placeholder notifications
  const notifsContainer = document.getElementById('notifications-list');
  if (notifsContainer) {
    const placeholder = [
      'Your Smart Locker has been locked.',
      'Item “Laptop” removed successfully.',
      'Unauthorized access attempt detected!'
    ];
    placeholder.forEach(txt => {
      const d = document.createElement('div');
      d.className = 'notif';
      d.innerHTML = `Smart Locker<br/><small>${txt}</small>`;
      notifsContainer.appendChild(d);
    });
  }

  // STATUS PAGE: populate placeholder log
  const statusLog = document.getElementById('status-log');
  if (statusLog) {
    ['LOCKED – 8:12 AM', 'UNLOCKED – 7:30 AM', 'ATTEMPT – 7:15 AM']
      .forEach(txt => {
        const li = document.createElement('li');
        li.textContent = txt;
        statusLog.appendChild(li);
      });
  }
});
