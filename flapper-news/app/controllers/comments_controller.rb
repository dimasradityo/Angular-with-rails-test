class CommentsController < ApplicationController
include CommentsHelper

    def show
        post = Post.find(params[:id])
        comment = post.comments.find(params[:id])
        respond_with post, comment
    end
    
    def create
        post = Post.find(params[:id])
        comment = post.comments.create(comment_params)
        respond_with post, comment
    end

    def upvote
        post = Post.find(params[:id])
        comment = post.comments.find(params[:id])
        comment.increment!(:upvotes)
        respond_with post, comment
    end
end
