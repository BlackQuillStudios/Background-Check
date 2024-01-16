function conductBackgroundCheck() {
    // Get form data
    const fullName = document.getElementById('fullName').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;
  
    // Prepare data for background check
    const requestData = {
      fullName,
      state,
      city,
      zipCode,
    };
  
    // Make a POST request to the server
    fetch('/background-check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
      // Display result
      const resultContainer = document.getElementById('resultContainer');
      const resultInfo = document.getElementById('resultInfo');
      
      if (data.details) {
        resultInfo.innerText = `Background check details: ${data.details}`;
      } else {
        resultInfo.innerText = 'Person not found';
      }
  
      resultContainer.style.display = 'block';
    })
    .catch(error => console.error('Error conducting background check:', error));
  }
  