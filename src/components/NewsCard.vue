<template>
    <div class="news-container">
        <div @click="saveSelected(news)" class="news-cards" v-for="news in allNews" :key="news.content">
            <div class="card-header">
                <img :src="checkIsImage(news.urlToImage)" alt="image">
            </div>
            <div class="card-body">
                <span class="source-name">{{news.source.name}}</span>
                <h5>{{news.title}}</h5>
                <p>{{trimNewsDescription(news.description)}}</p>
                <div class="user">
                    <img :src='getUserImg()' alt="user">
                    <div class="user-info">
                        <h3 class="author">{{news.author}}</h3>
                        <small class="published-date">{{formatDate(news.publishedAt)}}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'news-card',
    props: {
        allNews: Array
    },
    computed: {
        
    },
    methods: {
        formatDate(date) {
            var parsedDate = new Date(date);
            return parsedDate.toDateString();
        },
        getUserImg() {
            const type = ["men", "women"];

            const typeRandom = Math.floor(Math.random() * 2);
            const randNum = Math.floor(Math.random() * 100);

            return `https://randomuser.me/api/portraits/${type[typeRandom]}/${randNum}.jpg`;
        },
        checkIsImage(img) {

            if(img) return img;

            return "../../public/img/random.jpg";
        },
        trimNewsDescription(desc) {
            if(desc.length <= 120) return desc;

            return `${desc.substring(0, 121)}...`;
        },
        saveSelected(news) {
            this.$store.dispatch("updateNews", news);
            const slug = news.title.toLowerCase().split(" ").join("-");
            this.$router.push({path: `/news/${slug}`});
        }
    }
}
</script>

<style scoped>
    .news-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: auto;
    }

    .news-cards {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: 300px;
        margin-right: 20px;
        margin-top: 20px;
        min-height: 500px;
    }

    .card-header img {
        object-fit: cover;
        height: 200px;
        width: 100%;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        min-height: 250px;
    }

    .card-body h5 {
        margin: 10px 0;
    }

    .card-body p {
        font-size: 13px;
        margin: 0 0 40px;
    }

    .card-body .source-name {
        background-color: teal;
        border-radius: 5px;
        font-size: 12px;
        color: #fff;
        padding: 2px 10px;
        text-transform: uppercase;
        margin: 0;
    }

    .user {
        display: flex;
        margin-top:auto;
    }

    .user img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .user-info h5 {
        margin: 0;
    }

    .user-info small {
        color: #888785;
    }
</style>