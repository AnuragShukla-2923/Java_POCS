package com.blog.apis.controllers;


import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

//import javax.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletResponse;

//import org.hibernate.engine.jdbc.StreamUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.blog.apis.config.AppConstants;
//import com.blog.apis.entites.Category;
//import com.blog.apis.entites.Post;
//import com.blog.apis.entites.User;
import com.blog.apis.payloads.ApiResponse;
import com.blog.apis.payloads.PostDto;
import com.blog.apis.payloads.PostResponse;
import com.blog.apis.repositories.PostRepo;
import com.blog.apis.services.FileService;
import com.blog.apis.services.PostService;

@RestController
@RequestMapping("/api/v1")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private FileService fileService;
	
	@Value("${project.image}")
	private String path;
	
	//create
	@PostMapping("/user/{userId}/category/{categoryId}/posts")
	public ResponseEntity<PostDto>createPost(@RequestBody PostDto postDto,@PathVariable Integer userId,@PathVariable Integer categoryId ){
		PostDto createPost = this.postService.createPost(postDto, userId, categoryId);
		return new ResponseEntity<PostDto>(createPost,HttpStatus.CREATED);
	}
	
	
	//get by user
	@GetMapping("/users/{userId}/posts")
	public ResponseEntity<List<PostDto>>getPostsByUser(@PathVariable Integer userId){
	List<PostDto> postsbyUser = this.postService.getPostsbyUser(userId);
		return new ResponseEntity<List<PostDto>>(postsbyUser,HttpStatus.OK);
		
	}
	
	
	//get by category
	@GetMapping("/category/{categoryId}/posts")
	public ResponseEntity<List<PostDto>>getPostsByCategory(@PathVariable Integer categoryId){
	List<PostDto> postsbyCategory = this.postService.getPostsbyCategory(categoryId);
	return new ResponseEntity<List<PostDto>>(postsbyCategory,HttpStatus.OK);
		
	}
	
	
	//put
	
	//delete
	
	//get single
	@GetMapping("/posts/{postId}")
	public ResponseEntity<PostDto>getPostById(@PathVariable Integer postId){
	   PostDto postDto = this.postService.getPost(postId);
		return new ResponseEntity<PostDto>(postDto,HttpStatus.OK);
	}
	
	//get all
//	@GetMapping("/posts")
//	public ResponseEntity<PostResponse>getAllPosts(
//			@RequestParam(value = "pageNumber",defaultValue = "0",required = false) Integer pageNumber,
//			@RequestParam(value = "pageSize",defaultValue = "10",required = false) Integer pageSize,
//	        @RequestParam(value = "sortBy",defaultValue = "postId",required = false )String sortBy,
//	        @RequestParam(value = "sortingOrder",defaultValue = "ASC",required = false )String sortingOrder){
//		   
//		
//		PostResponse postResponse = this.postService.getAllPost(pageNumber,pageSize,sortBy,sortingOrder);
//		return new ResponseEntity<PostResponse>(postResponse,HttpStatus.OK);
//	}
	
	@GetMapping("/posts")
	public ResponseEntity<PostResponse>getAllPosts(
			@RequestParam(value = "pageNumber",defaultValue = AppConstants.PAGE_NUMBER,required = false) Integer pageNumber,
			@RequestParam(value = "pageSize",defaultValue = AppConstants.PAGE_SIZE,required = false) Integer pageSize,
	        @RequestParam(value = "sortBy",defaultValue = AppConstants.SORT_BY,required = false )String sortBy,
	        @RequestParam(value = "sortingOrder",defaultValue = AppConstants.SORTING_ORDER,required = false )String sortingOrder){
		   
		
		PostResponse postResponse = this.postService.getAllPost(pageNumber,pageSize,sortBy,sortingOrder);
		return new ResponseEntity<PostResponse>(postResponse,HttpStatus.OK);
	}
	
	//delete post
	@DeleteMapping("posts/{postId}")
	public ResponseEntity<ApiResponse>deletePost(@PathVariable Integer postId){
		this.postService.deletePost(postId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Post deleted Successfully!",true),HttpStatus.OK);
		
	}
	
	//update post
		@PutMapping("posts/{postId}")
		public ResponseEntity<PostDto>updatePost(@RequestBody PostDto postDto, @PathVariable Integer postId){
			PostDto updatePost = this.postService.updatePost(postDto, postId);
			return new ResponseEntity<PostDto>(updatePost,HttpStatus.OK);
			
		}
		
		// searching method
		@GetMapping("/posts/search/{keyword}")
		public ResponseEntity<List<PostDto>>searchPostByTitle(@PathVariable("keyword") String keyword){
			List<PostDto> searchedPosts = this.postService.searchPosts(keyword);
			return new ResponseEntity<List<PostDto>>(searchedPosts,HttpStatus.OK);
		}
		
		
		//post image upload
		@PostMapping("/post/image/upload/{postId}")
		public ResponseEntity<PostDto>uploadPostImage(
				@RequestParam("image") MultipartFile image,
		        @PathVariable Integer postId) throws IOException{
			PostDto postDto = this.postService.getPost(postId);
			String fileName = this.fileService.uploadImage(path, image);
		
			postDto.setImageName(fileName);
			PostDto updatePost = this.postService.updatePost(postDto, postId);
			return new ResponseEntity<PostDto>(updatePost,HttpStatus.OK);
			
		}
		
		//methods to serve files
		@GetMapping(value = "/post/image/{imageName}",produces = MediaType.IMAGE_JPEG_VALUE)
		public void downloadImage(@PathVariable("imageName")String imageName,HttpServletResponse response) throws IOException,FileNotFoundException {
			InputStream resource = this.fileService.getResource(path, imageName);
			response.setContentType(MediaType.IMAGE_JPEG_VALUE);
			StreamUtils.copy(resource,response.getOutputStream());
		}

}
