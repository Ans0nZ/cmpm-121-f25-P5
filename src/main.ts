<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Click Me Button Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 100px;
    }
    button {
      font-size: 1.2em;
      padding: 10px 24px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Welcome!</h1>
  <button id="clickMeBtn">Click Me</button>
  <p id="message"></p>

  <script>
    const btn = document.getElementById('clickMeBtn');
    const msg = document.getElementById('message');
    btn.addEventListener('click', () => {
      msg.textContent = 'You clicked the button!';
    });
  </script>
</body>
</html>
