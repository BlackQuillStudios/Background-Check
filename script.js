function conductBackgroundCheck() {
    const fullName = document.getElementById("fullName").value;
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value || "N/A";
    const zipCode = document.getElementById("zipCode").value || "N/A";
  
    fetch('http://localhost:3000/background-check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, state, city, zipCode }),
    })
      .then(response => response.json())
      .then(data => {
        const resultContainer = document.getElementById("resultContainer");
        const resultInfo = document.getElementById("resultInfo");
  
        resultInfo.textContent = data.details || 'Person not found';
        resultContainer.style.display = "block";
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error conducting background check. Please try again later.');
      });
  }
  