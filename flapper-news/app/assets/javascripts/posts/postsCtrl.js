var app = angular.module('flapperNews');
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