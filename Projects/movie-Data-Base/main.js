let list = document.querySelector('.list');
let favMovies = document.querySelector('.favMovies');
let tvShows = document.querySelector('.tvShows');

let options = {
    method : 'GET',
    headers : {
        accept : 'applicayJtion/json',
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWVlZTY1YzQxYmFiMjJkM2YxYjZhMTk3YWY1MWU2ZCIsIm5iZiI6MTc1OTkzMjY3MC4xMjQsInN1YiI6IjY4ZTY3MGZlY2U5ZjYzNmQxM2E5OTY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsW0pXou7cHKzLkLH98uVtHU1vxgGNoNjLDEBPvQZRg'
    }
}

const url = "https://api.themoviedb.org/4/account/68e670fece9f636d13a99693/movie/favorites";
// const url = 'https://jsonplaceholder.typicode.com/posts'


async function info() {
    try {
        let infoA = await fetch(url, options);
        console.log(infoA);
    } catch (e) {
        console.log(`Exception occured: ${e}`);
    }
}

info();