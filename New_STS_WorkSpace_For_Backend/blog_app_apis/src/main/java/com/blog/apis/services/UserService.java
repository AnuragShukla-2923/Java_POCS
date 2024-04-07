package com.blog.apis.services;

import java.util.List;


import com.blog.apis.payloads.UserDto;

public interface UserService {
	
	
	UserDto registernNewUser(UserDto userDto);
	
	UserDto createUser(UserDto userdto);
	UserDto updateUser(UserDto userdto,Integer userId);
	UserDto getUserById(Integer userId);
	List<UserDto> getAllUsers();
	void deleteUser(Integer userId);
	

}
