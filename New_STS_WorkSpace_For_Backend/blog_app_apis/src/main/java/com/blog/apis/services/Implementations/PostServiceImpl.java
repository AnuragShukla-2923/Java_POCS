package com.blog.apis.services.Implementations;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.blog.apis.entities.Category;
import com.blog.apis.entities.Post;
import com.blog.apis.entities.User;
//import com.blog.apis.entites.Category;
//import com.blog.apis.entites.Post;
//import com.blog.apis.entites.User;
import com.blog.apis.exceptions.ResourceNotFoundException;
import com.blog.apis.payloads.PostDto;
import com.blog.apis.payloads.PostResponse;
import com.blog.apis.repositories.CategoryRepo;
import com.blog.apis.repositories.PostRepo;
import com.blog.apis.repositories.UserRepo;
import com.blog.apis.services.PostService;
import org.springframework.data.domain.Sort;

//import net.bytebuddy.asm.Advice.OffsetMapping.Sort;

@Service
public class PostServiceImpl implements PostService  {
	
	@Autowired
	private PostRepo postRepo;
	
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private CategoryRepo category;

	@Override
	public PostDto createPost(PostDto postDto,Integer userId,Integer categoryId) {
		
		User user=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","user id", userId));
		Category category =this.category.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category", "Category id", categoryId));
		
		Post post = this.modelMapper.map(postDto, Post.class);
		post.setImageName("default.png"); 
		post.setAddedDate(new Date()); 
		post.setUser(user); 
		post.setCategory(category); 
		
		Post saved_Post = this.postRepo.save(post);
		
		return this.modelMapper.map(saved_Post, PostDto.class);
	}

	@Override
	public PostDto updatePost(PostDto postDto, Integer postId) {
		Post post = this.postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("Post", "post id", postId));
		post.setAddedDate(postDto.getAddedDate());
		post.setTitle(postDto.getTitle());
		post.setContent(postDto.getContent());
		post.setImageName(postDto.getImageName());
		post.setAddedDate(new Date());
		Post updated_post = this.postRepo.save(post);
		return this.modelMapper.map(updated_post, PostDto.class);
	}

	@Override
	public void deletePost(Integer postId) {
	    Post post = this.postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("Post", "post id", postId));
		this.postRepo.delete(post);
		
	}

	@Override
	public PostDto getPost(Integer postId) {
	Post post = this.postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("Post", "post id", postId));
		return this.modelMapper.map(post, PostDto.class);
	}

	@Override
	public PostResponse getAllPost(Integer pageNumber,Integer pageSize,String sortBy,String sortingOrder) {
	//way 1
//		Sort sort=null;
//		if(sortingOrder.equalsIgnoreCase("asc")) {
//			sort=Sort.by(sortBy).ascending();
//		}else
//		{
//			sort=Sort.by(sortBy).descending();
//		}
		
		//way2:using ternary operator
		
		Sort sort=(sortingOrder.equalsIgnoreCase("asc"))?Sort.by(sortBy).ascending():Sort.by(sortBy).descending();
	
		
		
//		Pageable pageable=PageRequest.of(pageNumber, pageSize,Sort.by(sortBy).descending()); 
		Pageable pageable=PageRequest.of(pageNumber, pageSize,sort); 
	    Page<Post> pageOfPost = this.postRepo.findAll(pageable);
	    List<Post> allPost = pageOfPost.getContent();
	
	    List<PostDto> collected_post = allPost.stream().map((post)->this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		PostResponse postResponse=new PostResponse();
		postResponse.setContent(collected_post);
	    postResponse.setPageNumber(pageOfPost.getNumber());
	    postResponse.setPageSize(pageOfPost.getSize());
	    postResponse.setTotalElements(pageOfPost.getTotalElements());
	    postResponse.setTotalPages(pageOfPost.getTotalPages());
	    postResponse.setLastPage(pageOfPost.isLast());
	    
	    return postResponse;
	}

	@Override
	public List<PostDto> getPostsbyCategory(Integer categoryId) {
		Category category=this.category.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category","category id", categoryId));
		List<Post> posts = this.postRepo.findByCategory(category);
		List<PostDto> postsDto = posts.stream().map((post)->this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		return postsDto;
	}

	@Override
	public List<PostDto> getPostsbyUser(Integer userId) {
		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "user id", userId));
		List<Post> posts = this.postRepo.findByUser(user);
		List<PostDto> postsDtos = posts.stream().map((post)->this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		return postsDtos;
	}

	@Override
	public List<PostDto> searchPosts(String keyword) {
		List<Post> posts = this.postRepo.findByTitleContaining(keyword);
//		List<Post> posts = this.postRepo.findByTitleContaining("%"+keyword+"%");
		List<PostDto> collected_Posts = posts.stream().map((post)->this.modelMapper.map(post, PostDto.class)).collect(Collectors.toList());
		return collected_Posts;
	}

}
