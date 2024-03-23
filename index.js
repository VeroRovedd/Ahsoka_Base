function getFormattedDate(date) {
  let apiDate = new Date(date);
  let year = apiDate.getFullYear();
  let month = apiDate.getMonth();
  let day = apiDate.getDate();

  return `${day}/${month < 10 ? "0" : ""}${month}/${year}`;
}

const apiURL =
  "https://achievements-app-1-0-0.onrender.com/api/v1/achievements";
// API Test: https://jsonplaceholder.typicode.com
// const HTML_Response = document.querySelector("#feed");
const tagNames = { 1: "Profesional", 2: "Personal", 3: "Aprendizaje" };
const feed = document.getElementById("feed");

fetch(`${apiURL}/getall`)
  .then((response) => response.json())
  .then((goals) => {
    console.log(goals);
    goals.forEach((goal) => {
      const goalCard = document.createElement("div");
      goalCard.setAttribute("class", "card");
      // goalCard.className = "card";
      const goalHeader = document.createElement("div");
      goalHeader.setAttribute("class", "goalHeader");
      // goalHeader.className = "goalHeader";
      const goalImage = document.createElement("img");
      goalImage.setAttribute("class", "goalImage");
      goalImage.setAttribute("src", `${goal.image}`);

      const goalInfo = document.createElement("div");
      goalInfo.setAttribute("class", "goalInfo");

      const goalDate = document.createElement("p");
      goalDate.setAttribute("class", "goalDate");
      goalDate.appendChild(
        document.createTextNode(`${getFormattedDate(goal.date)}`)
      );

      const goalTitle = document.createElement("p");
      goalTitle.setAttribute("class", "goalTitle");
      goalTitle.appendChild(document.createTextNode(`${goal.title}`));

      const goalArea = document.createElement("p");
      goalArea.setAttribute("class", "goalArea");
      goalArea.appendChild(document.createTextNode(`${tagNames[goal.id_tag]}`));

      goalInfo.appendChild(goalDate);
      goalInfo.appendChild(goalTitle);
      goalInfo.appendChild(goalArea);
      goalHeader.appendChild(goalImage);
      goalHeader.appendChild(goalInfo);

      const goalBody = document.createElement("div");
      goalBody.setAttribute("class", "goalBody");
      
      const goalDesc = document.createElement("p");
      goalDesc.appendChild(
        document.createTextNode(`${goal.description}`)
      );

      goalBody.appendChild(goalDesc);
      goalCard.appendChild(goalHeader);
      goalCard.appendChild(goalBody);
      feed.appendChild(goalCard);
    });

    // const template = goals.map(
    //   (goal) =>
    //     `
    //     <div class="card">
    //       <div class="goalHeader">
    //         <img class="goalImage" src="${goal.image}"/>
    //         <div class="goalInfo">
    //           <p class="goalDate">${getFormattedDate(goal.date)}</p>
    //           <p class="goalTitle">${goal.title}</p>
    //           <p class="goalArea">${tagNames[goal.id_tag]}</p>
    //         </div>
    //       </div>
    //       <div class="goalBody">
    //         <p>${goal.description}</p>
    //       </div>
    //     </div>
    //     `
    // );

    // HTML_Response.innerHTML = `${template}`;
  })
  .catch((error) => console.log(error.message));
