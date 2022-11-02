document.addEventListener('DOMContentLoaded', async () => {
    const title = document.createElement('h1');
    title.innerText = 'Random Activity';
    document.querySelector('body').appendChild(title);


    // const response = await fetch("http://www.boredapi.com/api/activity?type=recreational").then((response) => response.json())
    // console.log(response)
    // console.log('hello')
  }
) 


async function testFetch () {
    const response = await fetch(`http://www.boredapi.com/api/activity?participants=${participants}`).then((response) => response.json())
    console.log(response)
    console.log('hello')
}

testFetch();
  
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
  
  