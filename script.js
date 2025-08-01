const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.querySelector(".ac");

function appendToDisplay(value) {
  if (display.textContent === "0" || display.textContent === "Error") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function backspace() {
  display.textContent = display.textContent.slice(0, -1) || "0";
}

function calculate() {
  try {
    let expression = display.textContent
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-");
    let result = eval(expression);
    display.textContent = result;
  } catch {
    display.textContent = "Error";
  }
}

// Attach events
buttons.forEach(btn => {
  const value = btn.textContent;

  if (value === "=") {
    btn.addEventListener("click", calculate);
  } else if (value === ".") {
    btn.addEventListener("click", () => appendToDisplay("."));
  } else if (["+", "−", "×", "÷"].includes(value)) {
    btn.addEventListener("click", () => appendToDisplay(value));
  } else {
    btn.addEventListener("click", () => appendToDisplay(value));
  }
});

clearBtn.addEventListener("click", clearDisplay);
