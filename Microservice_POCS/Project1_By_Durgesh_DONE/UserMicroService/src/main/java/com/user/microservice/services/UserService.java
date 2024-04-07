package com.user.microservice.services;

import java.util.List;

import com.user.microservice.entities.User;

public interface UserService {
	
	User createUser(User user);
	List<User> getAllUser();
	User getUser(String userId);
	
	
	void deleteUser(String userId);
	User updateUser(String userId,User user);

}
