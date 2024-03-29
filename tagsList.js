function getTags() {
  const apiURL = "https://sfwit-c2-t2-back.onrender.com/api/v1/tags";
  const tagSelect = document.getElementById("goalArea");

  fetch(`${apiURL}/get`)
    .then((response) => response.json())
    .then((tags) => {
      console.log(tags);

      tags.forEach((tag) => {
        const tagOption = document.createElement("option");
        tagOption.value = tag.id;
        tagOption.appendChild(document.createTextNode(`${tag.tagName}`));
        tagSelect.appendChild(tagOption);
      });
    })
    .catch((error) => console.log(error.message));
}
