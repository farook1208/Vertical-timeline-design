document.addEventListener('DOMContentLoaded', function() {
  const timeline = document.querySelector('.timeline');
  const events = [
    { title: 'Event 1', description: 'Description of Event 1', date: 'Date 1' },
    { title: 'Event 2', description: 'Description of Event 2', date: 'Date 2' }
    // Add more events as needed
  ];

  events.forEach((event, index) => {
    const eventElement = document.createElement('div');
    eventElement.classList.add('timeline-event');

    if (index === 0) {
      eventElement.classList.add('active');
    }

    eventElement.innerHTML = `
      <div class="timeline-event-content">
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <span class="date">${event.date}</span>
      </div>
    `;

    timeline.appendChild(eventElement);
  });

  const eventElements = document.querySelectorAll('.timeline-event');

  eventElements.forEach(event => {
    event.addEventListener('click', function() {
      eventElements.forEach(evt => evt.classList.remove('active'));
      event.classList.add('active');
    });
  });
});
