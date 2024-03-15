function getData (){
    fetch("https:jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.log(error));
}

const apiURL = "https://jsonplaceholder.typicode.com"
const HTML_Response = document.querySelector("#feed");
const date = new Date();
const someDay = `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`;

fetch(`${apiURL}/photos`)
  .then((response) => response.json())
  .then((photos) => {
    const template = photos.map((photo) =>
      `<div class="card">
      <div class="goalHeader">
        <img class="goalImage" src="${photo.url}"/>
        <div class="goalInfo">
          <p class="goalDate">${someDay}</p>
          <p>${photo.title}</p>
          <p>${photo.id}</p> 
        </div>
      </div>
      <div class="goalBody">
        <p>Descripción</p>
      </div>
    </div>`
    );

    HTML_Response.innerHTML = `${template}`;
  });

/*
<div class="card">
  <div class="goalHeader">
    <img> </img>
    <div class="goalInfo">
      <fecha>
      <titulo>
      <area>
      <likes> 
    </div>
  </div>
  <div class="goalBody">
    <p>Descripción</p>
  </div>
</div>
*/