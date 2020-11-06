const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function saveToDo(text) {
    localStorage.setItem(TODOS_LS, text);
}

function paintToDo(text) {
    const li = document.createElement("li");
    // element 생성하는 메소드
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerHTML = text;

    // span과 delBtn을 li 안에 넣기
    li.appendChild(delBtn);
    li.appendChild(span);
    // li를 toDoList 안에 넣기
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
    // 저장
    saveToDo(currentValue);
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();