import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDc2Nzk4M2VmZDBhYTg3ZjZmMjc1ODJiODdjZDU1NiIsInN1YiI6IjY2NTMyNmZkNDA1ZjA4YTg1ZjI1ZWRiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l-IuL1I7lOyHpd3xcEK9D96hPKXioEw0LWLEwokuPTc'
      },
});


export default instance;