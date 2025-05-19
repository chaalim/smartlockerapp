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
  // TODO: persist changes (e.g. via backend or localStorage)
  alert('Profile updated!');
  goTo('profile.html');
}

// ===== Page-Specific Initialization =====
document.addEventListener('DOMContentLoaded', () => {
  // --- Items Page: add/remove items ---
  const itemForm  = document.getElementById('item-form');
  const itemInput = document.getElementById('item-input');
  const itemList  = document.getElementById('item-list');

  if (itemForm && itemInput && itemList) {
    // Add new item
    itemForm.addEventListener('submit', e => {
      e.preventDefault();
      const value = itemInput.value.trim();
      if (!value) return;

      const div = document.createElement('div');
      div.className = 'item dashboard-btn';
      div.style.display = 'flex';
      div.style.justifyContent = 'space-between';
      div.style.alignItems = 'center';
      div.innerHTML = `
        <span>${value}</span>
        <button class="btn-remove">REMOVE</button>
      `;
      itemList.appendChild(div);

      // Hook up remove button
      div.querySelector('.btn-remove').addEventListener('click', () => {
        div.remove();
      });

      itemInput.value = '';
      itemInput.focus();
    });

    // Remove any pre-existing items
    document.querySelectorAll('.btn-remove').forEach(btn =>
      btn.addEventListener('click', () => btn.parentElement.remove())
    );
  }

  // --- Notifications Page: populate list ---
  const notifsContainer = document.getElementById('notifications-list');
  if (notifsContainer) {
    notifsContainer.innerHTML = '';
    const messages = [
      'Your Smart Locker has been locked.',
      'Item “Laptop” removed successfully.',
      'Unauthorized access attempt detected!'
    ];
    messages.forEach(msg => {
      const d = document.createElement('div');
      d.className = 'notif';
      d.innerHTML = `Smart Locker<br/><small>${msg}</small>`;
      notifsContainer.appendChild(d);
    });
  }

  // --- Locker Status Page: populate log ---
  const statusLog = document.getElementById('status-log');
  if (statusLog) {
    statusLog.innerHTML = '';
    const entries = [
      'LOCKED – 8:12 AM',
      'UNLOCKED – 7:30 AM',
      'ATTEMPT – 7:15 AM'
    ];
    entries.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      statusLog.appendChild(li);
    });
  }
});
