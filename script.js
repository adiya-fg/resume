function showDemo(demoUrl) {
    const demoContainer = document.getElementById('demo-container');
    demoContainer.innerHTML = `<iframe src="${demoUrl}" width="100%" height="500px"></iframe>`;
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would add code to send the form data, for example using fetch.
    alert('Form submitted! (Placeholder)');
});