function onOff(event) {
  event.preventDefault();
  document.querySelector("#modal").classList.toggle("hide");
  document.querySelector("body").classList.toggle("hide-scroll");
  document.querySelector("#modal").classList.toggle("show-scroll");
}
