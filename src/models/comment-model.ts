export interface CommentResponse {
  id: number;
  post_id: number;
  content: string;
  created_at: Date;
  upvotes: number;
  downvotes: number;
}

export interface CreateCommentRequest {
  post_id: number;
  content: string;
}

export interface UpdateCommentRequest {
  content?: string;
}
