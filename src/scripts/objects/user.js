const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    following: 0,
    followers: 0,
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.following = gitHubUser.following;
        this.follwers = gitHubUser.followers;
        this.userName = gitHubUser.login;

    },
    setRepositories(repositories) {
        this.repositories = repositories;
    },
    setEvents(){

    }
};

export { user };
