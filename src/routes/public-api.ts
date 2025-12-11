import express from 'express';
import { UserController } from '../controllers/user-controller';
import { PostController } from '../controllers/post-controller';
import { CommentController } from '../controllers/comment-controller';
import { VoteController } from '../controllers/vote-controller';

export const publicRouter = express.Router();

// ==================== USER ROUTES ====================
publicRouter.post("/register", UserController.register);
publicRouter.post("/login", UserController.login);

// ==================== POST ROUTES ====================
publicRouter.post("/posts", PostController.createPost);
publicRouter.get("/posts", PostController.getAllPosts);
publicRouter.get("/posts/:id", PostController.getPostById);
publicRouter.put("/posts/:id", PostController.updatePost);
publicRouter.delete("/posts/:id", PostController.deletePost);

// ==================== COMMENT ROUTES ====================
publicRouter.post("/comments", CommentController.createComment);
publicRouter.get("/comments/:id", CommentController.getCommentById);
publicRouter.put("/comments/:id", CommentController.updateComment);
publicRouter.delete("/comments/:id", CommentController.deleteComment);
publicRouter.get("/posts/:postId/comments", CommentController.getCommentsByPostId);

// ==================== VOTE ROUTES ====================
publicRouter.post("/votes", VoteController.addVote);
publicRouter.delete("/votes/:voteId", VoteController.removeVote);
publicRouter.get("/comments/:commentId/votes/stats", VoteController.getCommentVoteStats);