function getFormattedDate(date) {
  let apiDate = new Date(date);
  let year = apiDate.getFullYear();
  let month = apiDate.getMonth();
  let day = apiDate.getDate();

  return `${day}/${month}/${year}`;
}

const apiURL =
  "https://achievements-app-1-0-0.onrender.com/api/v1/achievements";
// API Test: https://jsonplaceholder.typicode.com
const HTML_Response = document.querySelector("#feed");

fetch(`${apiURL}/getall`)
  .then((response) => response.json())
  .then((goals) => {
    console.log(goals);
    const template = goals.map(
      (goal) =>
        `
        <div class="card">
          <div class="goalHeader">
            <img class="goalImage" src="${goal.image}"/>
            <div class="goalInfo">
              <p class="goalDate">${getFormattedDate(goal.date)}</p>
              <p class="goalTitle">${goal.title}</p>
              <p class="goalArea">${goal.id_tag}</p> 
            </div>
          </div>
          <div class="goalBody">
            <p>${goal.description}</p>
          </div>
        </div>
        `
    );

    HTML_Response.innerHTML = `${template}`;
  })
  .catch((error) => console.log(error.message));
