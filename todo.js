const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// todoList 는 여러 목록으로 이루어져 있으므로 배열에 저장
const toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    // element 생성하는 메소드
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    span.innerHTML = text;

    // span과 delBtn을 li 안에 넣기
    li.appendChild(delBtn);
    li.appendChild(span);
    // li id를 지정해주기
    li.id = newId;
    // li를 toDoList 안에 넣기
    toDoList.appendChild(li);

    // 해야 할 일을 생성할 때마다 toDos array에 추가
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    // push 하고 호출하기 -> 안 그러면 입력하기 전까지의 값만 저장됨
    saveToDo();
    // 저장 시 [object Object] 형태로 저장되는데 그 이유는 js는 local storage에 있는 모든 데이터를 string으로 저장하려고 하기 때문
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
    // 저장
    // saveToDo();
}

function something(toDo) {
    // 각각의 todo에 대해서 painToDo를 해주기
    paintToDo(toDo.text);
    // 근데 이렇게 하면 toDos Array에 또 들어가게 되는 거 아닌가..?
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        // 해당 값은 string 값으로 되어 있으므로 json string 값을 object로 바꿔줄 것
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(something);
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();