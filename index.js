
const api = "https://jsonplaceholder.typicode.com/posts"

function displayPosts(data){

    const ul = document.querySelector("#post-list")

    data.forEach(element => {

        const h1 = document.createElement("h1")
        const li = document.createElement("li")
        const p = document.createElement("p")

        h1.textContent = element["title"]

        p.textContent = element["body"]

        li.append(h1, p)

        ul.append(li)

    })

}

function fetchAPI(){

    fetch(api)

    .then(response => response.json())

    .then((json) => {

        const data = json

        displayPosts(data)

    })

    .catch((error) => {

        console.error(error)

    })

}

fetchAPI()