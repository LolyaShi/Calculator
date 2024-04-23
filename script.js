const items = document.querySelectorAll(".item");
const screen = document.querySelector('.input_section');
const resScreen = document.querySelector('.result_section');


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

reset.addEventListener('click', function () {
    screen.textContent = " ";
    resScreen.textContent = "0"
});

const add = document.querySelector("#add");


const minus = document.querySelector("#minus");


result.addEventListener('click', function () {
    const val = screen.textContent;
    resScreen.textContent = eval(val);
    

    console.log(eval(screen.textContent))
})