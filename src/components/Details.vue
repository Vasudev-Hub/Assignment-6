<script set up>
import axios from "axios";
import { ref, onMounted } from 'vue';
onMounted(async () => {
    response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_id=${movie.id}`);
})
</script>

<template>
    <div class="movie-detail">
      <h1 class="movie-title">{{ response.data.original_title }}</h1>
      <p class="movie-overview">{{ response.data.overview }}</p>
      <p class="movie-release-date">Release Date: {{ response.data.release_date }}</p>
      <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
      <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster" class="movie-poster" />
  
      <h2 class="trailers-title">Trailers</h2>
      <div class="trailers-container">
        <div v-for="trailer in response.data.videos.results" :key="trailer.id" class="trailer-tile">
          <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
            <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer"
              class="trailer-thumbnail" />
          </a>
        </div>
      </div>
    </div>
  </template>

  <style scoped></style>