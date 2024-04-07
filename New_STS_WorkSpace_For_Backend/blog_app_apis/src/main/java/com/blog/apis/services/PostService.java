package com.blog.apis.services;

import java.util.List;


import com.blog.apis.payloads.PostDto;
import com.blog.apis.payloads.PostResponse;

public interface PostService {

	PostDto createPost(PostDto postDto, Integer userId, Integer categoryId);

	PostDto updatePost(PostDto postDto, Integer postId);

	void deletePost(Integer postId);

	PostDto getPost(Integer postId);

	PostResponse getAllPost(Integer pageNumber,Integer pageSize,String sortBy,String sortingOrder);

	// getall post by category
	List<PostDto> getPostsbyCategory(Integer categoryId);

	// getall post by User
	List<PostDto> getPostsbyUser(Integer userId);

	// search posts
	List<PostDto> searchPosts(String keyword);

}
