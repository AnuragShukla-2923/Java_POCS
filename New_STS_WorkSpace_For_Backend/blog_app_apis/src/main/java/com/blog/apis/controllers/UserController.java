package com.blog.apis.controllers;

import java.util.List;
import java.util.Map;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.apis.payloads.ApiResponse;
import com.blog.apis.payloads.UserDto;
import com.blog.apis.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	//post user
	 
	@PostMapping("/")
	public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto){
     UserDto createUser = this.userService.createUser(userDto);
     return new ResponseEntity<>(createUser,HttpStatus.CREATED);
	}
	
	
	
	//put user
	@PutMapping("/{userId}")
	public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto userDto,@PathVariable("userId") Integer userId){
		UserDto updateUser = this.userService.updateUser(userDto, userId);
		
		return ResponseEntity.ok(updateUser);
	}
	
//	//delete user
//	@DeleteMapping("/{userId}")
//	public ResponseEntity<?>deleteUser(@PathVariable("userId") Integer userId){
//		
//		this.userService.deleteUser(userId);
////		return ResponseEntity.ok(Map.of("Message","User deleted successfullY"));
//		return new ResponseEntity(Map.of("Message","User deleted successfullY"),HttpStatus.OK);
//	
//	}
	
	//delete user
	@DeleteMapping("/{userId}")
	@PreAuthorize("hasRole('ADMIN')") // only admin can delete user
	public ResponseEntity<ApiResponse>deleteUser(@PathVariable("userId") Integer userId){
		
		this.userService.deleteUser(userId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("User Deleted Successfully",true),HttpStatus.OK);
	
	}
	
	//get All users
	
	@GetMapping("/")
	public ResponseEntity<List<UserDto>>getAllUsers(){
		return ResponseEntity.ok(this.userService.getAllUsers());
	}
	
	//get single user
	@GetMapping("/{userId}")
	public ResponseEntity<UserDto>getUser(@PathVariable("userId") Integer userId){
		return ResponseEntity.ok(this.userService.getUserById(userId));
	}

}
