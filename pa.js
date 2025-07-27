<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pay.js Test Page</title>
</head>
<body>
  <h1>Pay.js QR Code Payment Test</h1>
  <button onclick="createOrder()">Generate QR Code</button>
  <div id="qrcode"></div>

  <script>
    async function createOrder() {
      const response = await fetch('/create_order', { method: 'POST' });
      const data = await response.json();

      if (data && data.code_url) {
        document.getElementById('qrcode').innerHTML = `
          <p>Scan with WeChat:</p>
          <img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data.code_url)}&size=200x200" />
        `;
      } else {
        alert('Failed to get QR Code');
        console.error(data);
      }
    }
  </script>
</body>
</html>
