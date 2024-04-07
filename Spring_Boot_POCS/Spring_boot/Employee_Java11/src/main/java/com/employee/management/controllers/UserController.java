package com.employee.management.controllers;

import java.util.List;

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

import com.employee.management.payloads.ApiResponse;
import com.employee.management.payloads.UserDto;
import com.employee.management.service.UserService;


@RestController
@RequestMapping("/api/users")
public class UserController {
	
	
	@Autowired
	private UserService userService;
//	//create user
//	@PostMapping("/")
//	public ResponseEntity<UserDto>createUser(@Valid @RequestBody UserDto userDto){
//		UserDto createdUser = this.userService.registerNewUser(userDto);
//		return new ResponseEntity<UserDto>(createdUser,HttpStatus.CREATED);
//	}
	
	//updateuser
	@PutMapping("/{userId}")
	public ResponseEntity<UserDto>updateUser(@RequestBody UserDto userDto,@PathVariable("userId") Integer userId){
		UserDto updatedUser = this.userService.updateUser(userDto, userId);
		return new ResponseEntity<UserDto>(updatedUser,HttpStatus.OK);
	}
	
	//deleteUser
	
	@DeleteMapping("/{userId}")
//	@PreAuthorize("hasRole('ADMIN')")  // only can delete a User
	public ResponseEntity<ApiResponse>deleteUser(@PathVariable("userId") Integer userId){
		this.userService.deleteUser(userId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("User Delete Succeefully!!",true),HttpStatus.OK);
	}
	
	//getallUser
	@GetMapping("/")
	public ResponseEntity<List<UserDto>>getAllUsers(){
		List<UserDto> allUsers = this.userService.getAllUsers();
		return new ResponseEntity<List<UserDto>>(allUsers,HttpStatus.OK);
	}
	
	//getSingleUser
	@GetMapping("/{userId}")
	public ResponseEntity<UserDto>getAllUsers(@PathVariable("userId") Integer userId){
		UserDto userById = this.userService.getUserById(userId);
		return new ResponseEntity<UserDto>(userById,HttpStatus.OK);
	}

}
