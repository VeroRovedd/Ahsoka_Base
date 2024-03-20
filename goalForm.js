function getElements (){
    let goalTitle = document.getElementsByName("goalTitle")[0].value;
    let goalArea = document.getElementById("area").value;
    let goalDate = document.getElementById("goalDate").value;
    let goalDescription = document.getElementById("goalDescription").value;
    let goalVisibility = document.getElementById("goalVisibility").value;
    //let goalImage = document.getElementById("goalImage").value;

    console.log("Se ha hecho click en el botón Publicar");
    console.log(`Input title: ${goalTitle}`);
    console.log(`Selected area: ${goalArea}`);
    console.log(`Selected Date: ${goalDate}`);
    console.log(`Goal Description: ${goalDescription}`);
    console.log(`Goal Visibility: ${goalVisibility}`);
    //console.log(`Goal image: ${goalImage}`).value;
}

/*function validateData() {

}*/

async function postData() {

    try {
        let goalTitle = document.getElementsByName("goalTitle")[0].value;
        let goalArea = document.getElementById("area").value;
        // let goalDate = document.getElementById("goalDate").value;
        let goalDescription = document.getElementById("goalDescription").value;
        // let goalVisibility = document.getElementById("goalVisibility").value;

        const body = {
            title: goalTitle,
            id_tag: goalArea,
            description: goalDescription
        };

        const apiURL = "https://achievements-app-1-0-0.onrender.com/api/v1/achievements"
        // Test API: "https:jsonplaceholder.typicode.com/posts

        const response = await fetch(`${apiURL}/create`,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
        
        console.log("Trying to post data...");
        console.log(response);

    } catch (error) {
        console.log(`Posting error: ${error}`);
    }
}

function postClicked (){
    getElements();
    postData();
}


const madeBy = "Made with <3 by Skills For Women In Tech padawans";
console.log(madeBy);







