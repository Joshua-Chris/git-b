let userName = prompt("What's your name?");
function call() {
  if (userName) {
    alert("Welcome " + userName);
  } else {
    prompt("Please you've not entered your name :) Enter now");
  }
}

call();
