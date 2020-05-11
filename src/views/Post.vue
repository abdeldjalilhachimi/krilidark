<template>
    <div class="our-post">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="post-area">
                        <PostOffer/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="side-bar">
                               <SidebarPost/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: function() {
        return {};
    },
    name: "Post",

};
</script>
