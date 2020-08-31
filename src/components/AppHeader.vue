<template>
    <nav class="navbar">
        <div class="logo">
            <img src="../../public/img/news.jpg" @click="$router.push({path: '/'})" alt="news">
        </div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'app-header',
}

</script>

<style scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 20px 0;
        font-size: 15px;
        background-color: #f4f4f4;
    }

    .logo {
        margin: 5px 20px;
        width: 100px;
    }

    .logo img {
        height: 50px;
        width: 75px;
        border-radius: 50%;
    }

    .navbar ul { 
        display: flex;
    }

    .navbar ul li {
        padding: 0 20px;
    }

    .navbar ul li a {
        padding-bottom: 2px;
    }

    .navbar ul li a:hover {
        border-bottom: 2px solid #262626;
    }
</style>