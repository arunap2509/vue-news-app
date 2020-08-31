<template>
  <div class="home">
    <search-filter @select:country="getNewsForCountry" @search:keyword="getNewsForKeyword" />
    <news-card :allNews="newsData"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { key } from '@/config.js';
import NewsCard from '@/components/NewsCard.vue';
import SearchFilter from '@/components/SearchFilter.vue';

export default {
  name: 'Home',
  components: {
    NewsCard,
    SearchFilter
  },
  data() {
    return {
      newsData: []
    }
  },
  async created() {
    try{ 

        const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`);

        const filteredData = data.data.articles.filter((a) => a.content !== null && a.urlToImage !== null);

        this.newsData = filteredData;

    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async getNewsForKeyword(keyword) {
    
      try { 

        const data = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${key}`);

        const filteredData = data.data.articles.filter((a) => a.content !== null && a.urlToImage !== null);

        this.newsData = filteredData;

      } catch (e) {
        console.log(e);
      }
    },
    async getNewsForCountry(country) {

      try { 
        const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`);

        const filteredData = data.data.articles.filter((a) => a.content !== null && a.urlToImage !== null);

        this.newsData = filteredData;

      } catch (e) {
        console.log(e);
      }

    }
  }
}
</script>

<style scoped>
  .home {
    background-color: #f7f8fc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>