<template>
    <div class="header">
        <div class="container">
            <div class="logo">Krilidark</div>
            <ul class="text-right">
                <router-link to="/" tag="li" exact>
                    <a>Home</a>
                </router-link>
                
                <router-link to="/offers" tag="li"><a>Offers</a></router-link>
                <router-link to="/about" tag="li"><a>About</a> </router-link>
                <router-link to="/contact" tag="li"
                    ><a>Contact us</a></router-link
                >
                <router-link to="/help" tag="li"><a>Help</a></router-link>
                <router-link to="/post" tag="li"
                    ><a class="post">Post an offer</a></router-link
                >
                <router-link to="/login" tag="li"
                    ><a class="login">Login</a></router-link
                >
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #0546f6;
    color: #fff;
    overflow: hidden;
    .logo {
        float: left;
        font-size: 20px;
        padding: 20px;

    }
    ul {
        float: right;
        margin: 0;
        width: calc(100% - 350px);
        li {
            display: inline-block;
            margin-left: 3px;
            margin-top: 8px;
            padding: 10px;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
    .post {
        display: inline-block;
        background-color: #008;
        color: white;
        padding: 5px;
        width: 150px;
        text-align: center; 
    }
    .login {
        display: inline-block;
        background-color: #008;
        color: white;
        width: 100px;
        padding: 5px;
        width: 150px;
        text-align: center; 
    }
}
</style>
