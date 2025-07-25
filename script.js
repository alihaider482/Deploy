const output = document.getElementById("output");
const cursor = document.getElementById("cursor");

const lines = [
  "Welcome to Ali's Portfolio Terminal!",
  "",
  "alias name='Ali Haider'",
  "echo Skills: [Cybersecurity, Web Dev, Linux, Python, JavaScript]",
  "echo Projects:",
  "  - ReverseMe CTF: Binary reversing challenge",
  "  - PortFolioWeb: This Matrix-themed terminal site",
  "  - CryptoScriptor: Python tool for encryption",
  "echo Contact: ali.haider@example.com | GitHub: github.com/alihdev",
  "",
  "echo Thank you for visiting. Ctrl+C to exit :)"
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    const line = lines[lineIndex];
    if (charIndex < line.length) {
      output.textContent += line.charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 30);
    } else {
      output.textContent += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 300);
    }
  } else {
    cursor.style.display = "none";
  }
}

typeLine();
