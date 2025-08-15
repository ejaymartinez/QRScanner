// Load html5-qrcode library dynamically
const script = document.createElement('script');
script.src = "https://unpkg.com/html5-qrcode@2.3.7/minified/html5-qrcode.min.js";
script.onload = () => initScanner();
document.body.appendChild(script);

function initScanner() {
  const startBtn = document.getElementById('startBtn');
  const qrResult = document.getElementById('qrResult');
  let scanner;

  startBtn.addEventListener('click', () => {
    if (!scanner) {
      scanner = new Html5Qrcode("preview");
    }

    scanner.start(
      { facingMode: "environment" }, // back camera
      {
        fps: 10,
        qrbox: 250
      },
      (decodedText, decodedResult) => {
        qrResult.textContent = `QR Result: ${decodedText}`;
        // scanner.stop(); // uncomment if you want to stop after scanning
      },
      (errorMessage) => {
        // optional: console.log(`QR scan error: ${errorMessage}`);
      }
    ).catch(err => console.error(err));
  });
}
