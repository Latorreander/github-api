
const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}"alt="user profile picture"/>
                            <div class="data">
                                 <h1>${user.name ?? 'Não Possui nome cadastrado 😥'}<h1>
                                 <p>${user.bio ?? 'Não Possui bio Cadastrada 😥'}</p>
                                 <div class="followers-data">
                                 <p>Seguidores: ${user.followers}</p>
                                 <p>Seguindo: ${user.following}</p>
                                 </div>
                            </div>
                        </div>`

        let repositoriesItens = "";
        user.repositories.forEach(repo => 
            repositoriesItens +=`<li>
            <a href="${repo.html_url}"target="_blank">${repo.name} 
                                    <div class="repo-info">
                                        <div class="info" title="Forks">🍴${repo.forks_count}</div>
                                        <div class="info" title="Stars">⭐${repo.stargazers_count}</div>
                                        <div class="info" title="Watchers">👀${repo.watchers_count}</div>
                                        <div class="info" title="Language">👨‍💻${repo.language}</div>
                                    </div></a>
                                </li>`);
        
        if(user.repositories.length > 0){
        this.userProfile.innerHTML += 
                `<div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesItens}</ul>
                </div>`
        }
               
    },
    
    userEvents: document.querySelector(".events-data"),
    renderEvents(eventsResponse){

        let eventsItens = "";
        eventsResponse.forEach(e => {
            
            if(e.type ==='PushEvent' && 'CreateEvent'){

                eventsItens +=`<li><strong>${e.repo.name }</strong> ➡️ <i>${e.payload.commits[0].message}</li></i>`
            }
                this.userEvents.innerHTML = `<h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>`
        })
        
    },
    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado 😔<h3>`  
    }    
}

export { screen }