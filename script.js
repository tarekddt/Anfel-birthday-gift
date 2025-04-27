function startExperience() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('optionsPage').style.display = 'block';
  }
  
  function showLetter() {
    hideAll();
    document.getElementById('letterPage').style.display = 'block';
  }
  
  function showCuteThings() {
    hideAll();
    document.getElementById('cuteThingsPage').style.display = 'block';
  }
  
  function showVirtualGifts() {
    hideAll();
    document.getElementById('virtualGiftsPage').style.display = 'block';
  }
  
  function goBack() {
    hideAll();
    document.getElementById('optionsPage').style.display = 'block';
  }
  
  function hideAll() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
  }
  
  // Confetti
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let confetti = [];
  
  for (let i = 0; i < 300; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 20 + 10,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
    });
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
      ctx.stroke();
    });
  
    update();
  }
  
  function update() {
    confetti.forEach(c => {
      c.tiltAngle += c.tiltAngleIncremental;
      c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
      c.x += Math.sin(c.d);
      c.tilt = Math.sin(c.tiltAngle) * 15;
  
      if (c.y > canvas.height) {
        c.x = Math.random() * canvas.width;
        c.y = -20;
      }
    });
  }
  
  setInterval(draw, 20);
  