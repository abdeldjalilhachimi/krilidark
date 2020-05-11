<template>
    <div class="our-post">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="post-area">
                        <PostOffer v-for="post in posts"  
                        :key="post.id" 
                        :views="post.views" 
                        :title="post.title" 
                        :date="post.date" 
                        :content="post.content" 
                        :author="post.author"
                         :category="post.category"
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="side-bar">
                        <SidebarPost />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostOffer from "@/components/posts/PostOffer.vue";
import SidebarPost from "@/components/posts/SidebarPost.vue";
import JsonDataPosts from "../json/posts.json";
export default {
    data: function() {
        return {
            pageName: "Offers",
            pageDescription: "This is a offers Page", 
            posts : JsonDataPosts, 
        };
    },
    name: "Offers", 
    components: {
        PostOffer, 
        SidebarPost
    }
};
</script>
