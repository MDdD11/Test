document.getElementById('testForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  
  // Simple check to show the username in the output
  if (username) {
      document.getElementById('result').innerText = `Hello, ${username}! Welcome to the test website.`;
  } else {
      document.getElementById('result').innerText = 'Please enter a username.';
  }
});
