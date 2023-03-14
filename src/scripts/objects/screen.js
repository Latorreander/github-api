
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
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);
    
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
        console.log(eventsResponse)
      
        eventsResponse.forEach(e => {

            if(e.type ==='PushEvent' || 'CreateEvent'){
                console.log(e.type)
                this.userEvents.innerHTML +=`<p>${e.repo.name}</p> - <span>${e.payload.commits[0].message}</span>`
            }
      
        })
        
    },
    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado 😔<h3>`  
    }    
}

export { screen }