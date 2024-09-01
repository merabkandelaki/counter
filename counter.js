function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count += 1;
      return count;
    },
    decrement: function () {
      count -= 1;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
  };
}

const counter = createCounter();

function updateDisplay() {
  const counterDisplay = document.getElementById("counterValue");
  counterDisplay.textContent = counter.increment();
}

document.getElementById("incrementBtn").addEventListener("click", function () {
  updateDisplay();
});

document.getElementById("decrementBtn").addEventListener("click", function () {
  const currentValue = counter.decrement();
  document.getElementById("counterValue").textContent = currentValue;
});

document.getElementById("resetBtn").addEventListener("click", function () {
  const currentValue = counter.reset();
  document.getElementById("counterValue").textContent = currentValue;
});
