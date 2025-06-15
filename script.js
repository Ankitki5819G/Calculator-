let string = "";
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value == "=") {
      try {
        if (/^[0-9+\-*/.() ]+$/.test(string)) {
          string = Function('"use strict"; return (' + string + ')')();
        } else {
          string = "Error";
        }
      } catch (err) {
        string = "Error";
      }
      document.querySelector('input').value = string;
    } else if (value == "c") {
      string = "";
      document.querySelector('input').value = string;
    } else {
      string += value;
      document.querySelector('input').value = string;
    }
  });
});