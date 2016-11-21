var app = angular.module('flapperNews');
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