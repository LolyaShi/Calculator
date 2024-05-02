const items = document.querySelectorAll(".item");
const screen = document.querySelector('.input_section');
const resScreen = document.querySelector('.screen-result');


items.forEach((i) => {
    i.addEventListener("click", function () {
        const numb = i.textContent;
        if (numb != "=") {
            screen.append(numb);
        }
    })
})

const reset = document.querySelector("#reset");
const result = document.querySelector("#result");
const cat = document.querySelector('.cat-animation');

reset.addEventListener('click', function () {
    cat.classList.add('open');
// cat.style.animationPlayState = 'running';
    screen.textContent = " ";
    setTimeout(resetScreen, 1000);
    setTimeout(endAnimation, 3000);
    //resScreen.textContent = "0";
   
});

function resetScreen() {
    resScreen.textContent = "0";
}

function endAnimation() {
    cat.classList.remove('open');
    //cat.style.animationPlayState = 'paused'; 
}
const add = document.querySelector("#add");


const minus = document.querySelector("#minus");


result.addEventListener('click', function () {
    const val = screen.textContent;
    resScreen.textContent = eval(val);
    

    addInHistory(val, eval(val));
    if (historyBlock.children.length > 10) {
        const items = document.querySelectorAll('.prevResult');
        items[0].remove();
    }
})

const eraser = document.querySelector('.delete');

eraser.addEventListener("click", function () {
    const val = screen.textContent;
    const newVal = val.slice(0, val.length - 1);
    screen.textContent = newVal;
})

const history = document.querySelector('.history');
const historyBlock = document.querySelector('.history__block');

history.addEventListener('click', function () {
    historyBlock.classList.toggle('open');
})

function addInHistory(value, res) {
    const container = document.createElement('div');
    container.textContent = `${value} = ${res}`;
    container.className = 'prevResult';
    historyBlock.append(container);
}

