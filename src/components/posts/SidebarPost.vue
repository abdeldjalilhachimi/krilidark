<template>
    <div class="side-bar-offfer">
        {{title | UpperCase }}
    </div>
</template>


<script>
export default {
    data: function () {
       return {
           title: "Testing", 
       } 
    }, 
    name:"side-bar-offfer", 
    filters: {
        UpperCase: function (item) {
            return item.toUpperCase()
        }
    } 
}
</script>

<style lang="scss" scoped>
.side-bar-offfer{
    margin-top: 50px; 
}
</style>