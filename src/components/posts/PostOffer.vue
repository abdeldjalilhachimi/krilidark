<template>
    <div class="post-offfer">
        <span class="post-views"  >{{views  }} </span>
        <h3 class="post-title">{{title }}</h3>
        <span class="post-date">{{date}} </span>
        <p class="post-content">
            {{content | shorten(50, "... see more") |reverse }}
        </p>
        <img src="" alt="">
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">{{author }} </span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category ">{{category }} </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pageName: "Offer Page",
            pageDescription: "Explore to find you appropriate apartment"
        };
    },
    name: "PostOffer", 
    props: ['views', 'title', 'date', 'content','author', 'category'],
};
</script>
<style lang="scss">
.post-offfer {
    margin: 50px;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #0546f6;
        padding: 3px 5px 0;
        color: white;
        text-align: center;
        font-weight: 500;
    }
    .post-title {
        padding: 5px;
        font-weight: bold;
        font-family: inherit;
        letter-spacing: 1px;
        color: #0546f6;
    }
    .post-date {
        display: block;
        padding: 5px 0;
        font-size: 16px;
        font-weight: lighter;
        color: #6e7780;
    }
    .post-content {
        line-height: 1.7;
        font-size: 18px;
        margin-bottom: 10px;
        color: #767575;
    }

    .post-author {
        background-color: #0546f6;
        padding: 5px 15px;
        color: white;
    }
    .post-category {
        background-color: #0546f6;
        padding: 5px 15px;
        color: white;
    }
}
</style>
