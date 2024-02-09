function getTimestamp() {
  const dateInput = document.getElementById('dateInput').value;
  
  fetch(`/api/timestamp/${dateInput}`)
    .then(response => response.json())
    .then(data => {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<p>Unix Timestamp: ${data.unix}</p><p>UTC: ${data.utc}</p>`;
    })
    .catch(error => console.error('Error:', error));
}
