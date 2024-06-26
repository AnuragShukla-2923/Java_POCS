package com.blog.apis.services.Implementations;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.apis.entities.Comment;
import com.blog.apis.entities.Post;
//import com.blog.apis.entites.Comment;
//import com.blog.apis.entites.Post;
import com.blog.apis.exceptions.ResourceNotFoundException;
import com.blog.apis.payloads.CommentDto;
import com.blog.apis.payloads.PostDto;
import com.blog.apis.repositories.CommentRepo;
import com.blog.apis.repositories.PostRepo;
import com.blog.apis.services.CommentService;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private PostRepo postRepo;
	@Autowired
	private CommentRepo commentRepo;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public CommentDto createComment(CommentDto commentDto, Integer postId) {
		Post post = this.postRepo.findById(postId)
				.orElseThrow(() -> new ResourceNotFoundException("Post", "post id", postId));
		Comment comment = this.modelMapper.map(commentDto, Comment.class);
		comment.setPost(post);
		Comment saved_comment = this.commentRepo.save(comment);

		return this.modelMapper.map(saved_comment, CommentDto.class);
	}

	@Override
	public void deleteComment(Integer commentId) {
		Comment comment = this.commentRepo.findById(commentId).orElseThrow(()->new ResourceNotFoundException("Comment", "comment id", commentId));
       this.commentRepo.delete(comment);
	}

}
