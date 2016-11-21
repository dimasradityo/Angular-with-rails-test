var app = angular.module('flapperNews', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl as main'
    })
    .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCrtl as post'
    });

  $urlRouterProvider.otherwise('home');
}])

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

app.controller('MainCtrl', function(posts){
    this.posts = posts.posts;
    this.addPost = function(){
        if (this.title){
            this.posts.push({
                title: this.title, 
                link: this.link, 
                upvotes: 0,
                comments: [
                    {author: 'Joe', body: 'nice!', upvotes: 4},
                    {author: 'Mark', body: 'lol', upvotes: 2}
                ]
            });
            this.title = '';
            this.link = '';
        }
    }

    this.incrementUpvotes = function(post){
        post.upvotes += 1;
    }
});

app.controller('PostsCrtl', function($stateParams, posts){
    this.post = posts.posts[$stateParams.id];

    this.addComment = function(){
        if (this.comment){
            this.post.comments.push ({
                author: this.commentAuthor,
                body: this.commentBody,
                upvotes: 0
            });
            this.commentAuthor = '';
            this.commentBody = '';
        }
    };

    this.incrementUpvotes = function(post){
        post.upvotes += 1;
    }
});