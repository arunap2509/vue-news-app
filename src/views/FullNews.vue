<template>
  <div class="container">
      <section :style="getBgImg" class="full-news" v-if="isContentLoaded">
          <div class="content">
              <h2>{{selectedNews.title}}</h2>
              <p>{{selectedNews.description}}</p>
              <a class="btn" :href="selectedNews.url">Learn More</a>
          </div>    
      </section>
      <section v-else>
          <div class="nocontent">
              <p>No content available <router-link to="/">Go to home</router-link></p>
          </div>
      </section>
  </div>
</template>

<script>
export default {
    name:"full-news",
    data() {
        return {
            selectedNews: {}
        }
    },
    created() {
        this.selectedNews = this.$store.getters.getSelectedNews;
        console.log(this.selectedNews);
    },
    computed: {
        getBgImg() {
            return { backgroundImage: `url(${this.selectedNews.urlToImage})`};
        },
        isContentLoaded() {
            if(Object.keys(this.selectedNews).length === 0) return false;
            return true;
        }
    }
}
</script>

<style scoped>
    .full-news{
        width: 100%;
        height: 450px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #fff;
        margin-bottom: 20px;
    }

    .full-news .content {
        width: 40%;
        padding: 50px 0 0 30px;
    }

    .full-news p {
        margin: 10px 0 20px;
    }

    .full-news a {
        color: rgb(69, 133, 75);
    }

    .btn {
        background-color: #f4f4f4;
        padding: 8px 10px;
        border-radius: 5px;
        display: inline-block;
    }

    .btn:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .nocontent {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        margin-top: 40px;
    }

    .nocontent a {
        color: blue;
    }

    .nocontent a:hover {
        text-decoration: underline;
    }
</style>