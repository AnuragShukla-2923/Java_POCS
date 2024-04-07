package com.userservice.services;

import java.util.List;

import com.userservice.entities.User;



public interface UserService {
	
	
   User saveUser(User user);
   List<User>getAllUser();
   User getUser(String userId);
   
   User updateUser(String userId,User user);
   void deleteUser(String userId);
   

}
