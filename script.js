function createCounter(
  start = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1
) {
  let count = start;

  function plus() {
    if (count + step <= max) {
      count += step;
    } else {
      throw new Error("Counter cannot exceed the maximum value.");
    }
  }

  function minus() {
    if (count - step >= min) {
      count -= step;
    } else {
      throw new Error("Counter cannot go below the minimum value.");
    }
  }

  function getCounter() {
    return count;
  }

  return {
    plus,
    minus,
    getCounter,
  };
}

// *************************************

const counter = createCounter();

function incrementCounter() {
  counter.plus();
  updateCounterValue();
}

function decrementCounter() {
  counter.minus();
  updateCounterValue();
}
function updateCounterValue() {
  const counterValue = document.getElementById("counter-value");
  counterValue.innerText = counter.getCounter();
}

// ******************************************

counter.plus();
counter.plus();
console.log(counter.getCounter());

counter.minus();
console.log(counter.getCounter());

counter.minus();
console.log(counter.getCounter());
console.log(counter.getCounter());

counter.plus();
counter.plus();
counter.plus();
counter.plus();
counter.plus();
console.log(counter.getCounter());
console.log(counter.getCounter());
