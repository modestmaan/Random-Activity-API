document.addEventListener("DOMContentLoaded", async () => {
    const title = document.createElement("h1");
    // title.innerText = "Random Activity";
    document.querySelector("body").appendChild(title);

    // const response = await fetch("http://www.boredapi.com/api/activity?type=recreational").then((response) => response.json())
    // console.log(response)
    // console.log('hello')
});

// async function testFetch() {
//     const response = await fetch(
//         `http://www.boredapi.com/api/activity?participants=1`
//     ).then((response) => response.json());
//     // console.log(response);
//     // console.log("hello");
// }

const number = {
    1: "I'm a loner",
    2: "Me and my bestie",
    3: "I'm third wheeling",
    4: "Double date",
};
let button1 = document.getElementById("btn");
button1.addEventListener("click", processMsg);

async function processMsg() {
    let input = document.getElementById("list").value;
    let participant;
    for (let key in number) {
        if (number[key] === input) {
            participant = Number(key);
        }
    }

    const response = await fetch(
        `http://www.boredapi.com/api/activity?participants=${participant}`
    ).then((response) => response.json());
    console.log(response);
    const theMsg = document.querySelector(".text_input1");
    const price = document.querySelector(".text_input2");
    const access = document.querySelector(".text_input3");
    const type = document.querySelector(".text_input4");\
    const linebreak = document.querySelector('.linebreak')

    if (response["price"] >= 0.7) {
        price.innerHTML = "Price: " + "💰💰💰";

    } else if (response["price"] >= 0.4) {
        price.innerHTML = "Price: " + "💰💰";
    } else if (response["price"] >= 0.1) {
        price.innerHTML = "Price: " + "💰";
    }

    if (response["accessibility"] >= 0.7) {
        access.innerHTML = "Accessibility: " + "♿️ ♿️ ♿️";
    } else if (response["accessibility"] >= 0.4) {
        access.innerHTML = "Accessibility: " + "♿️ ♿️";
    } else if (response["accessibility"] >= 0.1) {
        access.innerHTML = "Accessibility: " + "♿️";
    }

    type.innerHTML = "Type: " + response["type"];
    theMsg.innerHTML = response["activity"];
    linebreak.
}
// getSelectedVal();
// (accessibility
// :
// 0.1
// activity
// :
// "Fill out a basketball bracket"
// key
// :
// "7806284"
