import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value;

    validateInput(userName);
});

document.getElementById("input-search").addEventListener("keyup", (event) => {
    const userName = event.target.value;
    const key = event.which || event.keyCode;
    const enterKeyPressed = key === 13;

    if (enterKeyPressed) {
        validateInput(userName);
    }
});

async function getUserData(userName) {
    const userResponse = await getUser(userName);

    if (userResponse.message === "Not Found") {
        screen.renderNotFound();
        return;
    }
    const repositoriesResponse = await getRepositories(userName);

    user.setInfo(userResponse);
    console.log(userResponse)
    user.setRepositories(repositoriesResponse);
    screen.renderUser(user);
}

function validateInput(userName) {
    if (userName.length === 0) {
        alert("Preencha o campo com o nome de usuário");
        return;
    }
    getUserData(userName);
}
