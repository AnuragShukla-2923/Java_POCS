package com.blog.apis.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.blog.apis.entities.Category;
import com.blog.apis.entities.Post;
import com.blog.apis.entities.User;



public interface PostRepo  extends JpaRepository<Post, Integer>{
	
	List<Post>findByUser(User user);
	List<Post>findByCategory(Category category);
	
//	working but one to customise query
	//method used for searching
	List<Post>findByTitleContaining(String title);
	
	
//	@Query("select p from Post p where p.title like:key")
//	List<Post>findByTitleContaining(@Param("key")String title);


}
