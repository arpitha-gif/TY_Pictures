

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(response);
    const data = await response.json();
    console.log('data', data);
    console.log('Hello');
    let titles = '<ul>'
    data.forEach(val=>{
        let title = val.title
        titles += `<li>${title}</li>`
    })
titles += '</ul>'
const showData = document.getElementById("container")
showData.innerHTML= titles;

    data.forEach(value => {
        console.log(value.title);    
    });

}

fetchPosts()

