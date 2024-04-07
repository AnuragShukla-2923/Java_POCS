package com.userServices.micro.services;

import java.util.List;

import com.userServices.micro.entities.User;

public interface UserService {
	
	
   User saveUser(User user);
   List<User>getAllUser();
   User getUser(String userId);
   
   User updateUser(String userId,User user);
   void deleteUser(String userId);
   

}
