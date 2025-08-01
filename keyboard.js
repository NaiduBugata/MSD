const keys = document.querySelectorAll(".container > div");
const output = document.getElementById("output");

// Map special keys
const keyMap = {
  " ": "SPACE",
  "Backspace": "BKSP",
  "Enter": "ENTER",
  "Shift": "SHIFT",
  "Control": "CTRL",
  "Alt": "ALT",
  "Meta": "WIN",
  "CapsLock": "CAPS",
  "Tab": "TAB",
  "PageUp": "PG UP",
  "PageDown": "PG DN",
  "Home": "HOME",
  "End": "END",
  "ArrowUp": "^",
  "ArrowLeft": "<",
  "ArrowRight": ">",
  "ArrowDown": "END"
};

// Highlight key
function highlightKey(value) {
  keys.forEach(k => {
    if (k.textContent.trim().toLowerCase() === value.toLowerCase()) {
      k.style.backgroundColor = "#2563eb";  // vivid blue
      k.style.color = "#fff";
    }
  });
}

// Unhighlight key
function unhighlightKey(value) {
  keys.forEach(k => {
    if (k.textContent.trim().toLowerCase() === value.toLowerCase()) {
      k.style.backgroundColor = "rgb(48, 35, 53)"; // reset color
      k.style.color = "white";
    }
  });
}

// Handle typing into output box
function handleInput(value) {
  if (value === "BKSP") {
    output.textContent = output.textContent.slice(0, -1);
  } else if (value === "SPACE") {
    output.textContent += " ";
  } else if (value === "ENTER") {
    output.textContent += "\n";
  } else if (["SHIFT","CTRL","ALT","FN","CAPS","TAB","HOME","END","PG UP","PG DN","WIN"].includes(value)) {
    return; // ignore system keys
  } else {
    output.textContent += value;
  }
}

// Physical keyboard press
window.addEventListener("keydown", (event) => {
  let key = keyMap[event.key] || event.key;
  highlightKey(key);
  handleInput(key);
});

window.addEventListener("keyup", (event) => {
  let key = keyMap[event.key] || event.key;
  unhighlightKey(key);
});

// Virtual keyboard (mouse clicks)
keys.forEach(k => {
  k.addEventListener("mousedown", () => {
    const value = k.textContent.trim();
    highlightKey(value);
    handleInput(value);
  });

  k.addEventListener("mouseup", () => {
    const value = k.textContent.trim();
    unhighlightKey(value);
  });
});
