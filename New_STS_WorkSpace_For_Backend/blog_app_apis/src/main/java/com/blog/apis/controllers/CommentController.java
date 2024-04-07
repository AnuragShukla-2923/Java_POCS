package com.blog.apis.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.blog.apis.entites.Comment;
import com.blog.apis.payloads.ApiResponse;
import com.blog.apis.payloads.CommentDto;
import com.blog.apis.services.CommentService;

@RestController
@RequestMapping("/api/v1")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@PostMapping("/post/{postId}/comments")
	public ResponseEntity<CommentDto>createComment(@RequestBody CommentDto comments,@PathVariable Integer postId){
	CommentDto createComment = this.commentService.createComment(comments, postId);
	return new ResponseEntity<CommentDto>(createComment,HttpStatus.OK);	
	}
	
	@DeleteMapping("/comments/{commentId}")
	public ResponseEntity<ApiResponse>createComment(@PathVariable Integer commentId){
	this.commentService.deleteComment(commentId);
	return new ResponseEntity<ApiResponse>(new ApiResponse("Comment Deleted Successfully!",true),HttpStatus.OK);	
	}

}
