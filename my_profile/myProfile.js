const title = document.querySelector("#title");

// 16진법으로 해놓으니까 안됐었음 ;;;;
const CLICKED_CLASS = "clicked";
const OTHER_COLOR = "#9b59b6";

function handleClick() {
  // const currentClassName = title.className;
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // console.log(currentClassName);
  // if (!hasClass) { // hasClass가 참이면: classList가 CLICKED_CLASS를 포함하고 있으면
  //     title.classList.add(CLICKED_CLASS);
  //     } else {
  //     title.classList.remove(CLICKED_CLASS);
  // }
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
