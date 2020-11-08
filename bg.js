const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad() {
    console.log("finished loading");
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber+1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
    // prepend도 가능. 둘의 차이가 뭘까?

    // 로딩하기 -> API 에서 하는 일이라면 다음 작업 필요함
    // image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
    // Math를 활용하여 랜덤 넘버 생성하기
    const number = Math.floor(Math.random() * 5);
    // number에 할당되는 숫자는 0~4
    return number;
}

function init() {
    const randomNum = genRandom();
    paintImage(randomNum);
}

init();