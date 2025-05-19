  // --- Locker Status Page: populate log (existing) ---
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

  // --- Calendar UI for Locker Status Page ---
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const today = new Date();
    const year  = today.getFullYear();
    const month = today.getMonth(); // 0-indexed
    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Weekday headers
    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let html = '<table><thead><tr>';
    weekdays.forEach(d => html += `<th>${d}</th>`);
    html += '</tr></thead><tbody><tr>`;

    // Blank cells before day 1
    for (let i = 0; i < firstDay; i++) {
      html += '<td></td>';
    }

    // Fill in days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today.getDate();
      html += `<td class="${isToday ? 'today' : ''}">${day}</td>`;
      // New row at end of week
      if ((firstDay + day) % 7 === 0 && day !== daysInMonth) {
        html += '</tr><tr>';
      }
    }

    // Trailing blanks
    const trailing = (7 - ((firstDay + daysInMonth) % 7)) % 7;
    for (let i = 0; i < trailing; i++) {
      html += '<td></td>';
    }

    html += '</tr></tbody></table>';
    calendarEl.innerHTML = html;
  }
