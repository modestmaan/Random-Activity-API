document.addEventListener("DOMContentLoaded", async () => {
    const title = document.createElement("h1");
    // title.innerText = "Random Activity";
    document.querySelector("body").appendChild(title);

    // const response = await fetch("http://www.boredapi.com/api/activity?type=recreational").then((response) => response.json())
    // console.log(response)
    // console.log('hello')
});

async function testFetch() {
    const response = await fetch(
        `http://www.boredapi.com/api/activity?participants=1`
    ).then((response) => response.json());
    // console.log(response);
    // console.log("hello");
}
const test = document.querySelector(".slide");
console.log(test);

testFetch();

function getSelectedVal() {
    let values = document.getElementById("list").value;
    console.log(values);
}

const number = {
    1: "I'm a loner",
    2: "Me and my bestie",
    3: "I'm third wheeling",
    4: "Double date",
};
async function processMsg() {
    let values = document.getElementById("list").value;
    let participant;
    for (let key in number) {
        if (number[key] === values) {
            participant = key;
        }
    }
    const response = await fetch(
        `http://www.boredapi.com/api/activity?participants=${participant}`
    ).then((response) => response.json());
    console.log(response);
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
// link
// :
// ""
// participants
// :
// 1
// price
// :
// 0
// type
// :
// "recreational")
