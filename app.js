function startTimer() {
  let countDownDate = document.getElementById("time");
  console.log("start");

  let seconds = parseInt(countDownDate.value);

  let count = 0;

  const intervalId = setInterval(() => {
    count++;

    if (count === seconds) {
      clearInterval(intervalId);
      alert('alert');
      console.log(count);
    }
  }, 1000);
}
