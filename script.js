let count = 0;
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("minus")) {
      count--;
    } else if (styles.contains("plus")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
