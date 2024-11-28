<script setup>
import axios from "axios";
const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`);
</script>

<template>
<template>
  <div class="movie-gallery">
    <h1>Featured Movies And Shows</h1>
    <div class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card" @click="getMovieDetails(movie.id)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ movie.title }}</p>
      </div>
    </div>
  </div>
</template>
</template>

<style scoped>
.features {
    padding: 20px;
    text-align: center;
}

.movie-gallery img {
    margin: 10px;
    width: 150px;
    height: 220px;
}
</style>