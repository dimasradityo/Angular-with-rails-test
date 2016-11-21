var app = angular.module('flapperNews');
app.factory('posts',[function(){
    var o = {
    posts : [
        {title: 'post1', upvotes: 5},
        {title: 'post2', upvotes: 2},
        {title: 'post3', upvotes: 15},
        {title: 'post4', upvotes: 9},
        {title: 'post5', upvotes: 4},
        {title: 'post6', upvotes: 3},
        {title: 'post7', upvotes: 10},
        {title: 'post8', upvotes: 7}        
    ]};
    return o;
}]);