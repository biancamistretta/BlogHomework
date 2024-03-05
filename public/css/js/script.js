document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#signup-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Perform client-side validation
        const username = form.querySelector('#username').value;
        const password = form.querySelector('#password').value;

        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Make AJAX request to submit form data to server
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (response.ok) {
                alert('Signup successful');
                window.location.href = '/dashboard'; // Redirect to dashboard on successful signup
            } else {
                throw new Error('Signup failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Signup failed. Please try again.');
        });
    });
});
