import Vue from "vue";
// Make uppercse

/* Vue.filter("UpperCase", function(item) {
    return item.toUpperCase();
});
 */
 
// Make Reverse
Vue.filter("reverse", function(item) {
    return item.split("").reverse().join("");
});
// Make Shorter
Vue.filter("shorten", function(item , value, suffix) {
    return item.substring(0, value) + suffix; 
});
