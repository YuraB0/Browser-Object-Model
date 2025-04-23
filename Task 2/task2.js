document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.getElementById("button1");
    const btn2 = document.getElementById("button2");
    const btn3 = document.getElementById("button3");

    btn1.addEventListener("click", () => {
        document.body.style.backgroundColor = "blue";
    });

    btn2.addEventListener("dblclick", () => {
        document.body.style.backgroundColor = "pink";
    });

    btn3.addEventListener("mouseover", () => {
        document.body.style.backgroundColor = "brown";
    });

    // (опціонально) повернути колір назад при виході
    btn3.addEventListener("mouseout", () => {
        document.body.style.backgroundColor = "white";
    });
});
