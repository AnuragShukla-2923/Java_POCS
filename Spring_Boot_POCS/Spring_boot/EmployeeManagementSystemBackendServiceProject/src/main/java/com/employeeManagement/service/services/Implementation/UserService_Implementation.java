package com.employeeManagement.service.services.Implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.employeeManagement.service.config.AppConstants;
import com.employeeManagement.service.entities.Role;
import com.employeeManagement.service.entities.User;
import com.employeeManagement.service.exceptions.ResourceNotFoundException;
import com.employeeManagement.service.payloads.UserDto;
import com.employeeManagement.service.repositories.RoleRepo;
import com.employeeManagement.service.repositories.UserRepo;
import com.employeeManagement.service.services.UserService;

@Service
public class UserService_Implementation implements UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleRepo roleRepo;
	
	

	@Override
	public UserDto createUser(UserDto userDto) {
		User user = this.modelMapper.map(userDto, User.class);
		User saved_user = this.userRepo.save(user);
		return this.modelMapper.map(saved_user, UserDto.class);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {
		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "user id", userId));
		user.setName(userDto.getName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		user.setAbout(userDto.getAbout());
		User updated_user = this.userRepo.save(user);
		return this.modelMapper.map(updated_user, UserDto.class);
	}

	@Override
	public UserDto getUserById(Integer userId) {
		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "user id", userId));
		return this.modelMapper.map(user, UserDto.class);
	}

	@Override
	public List<UserDto> getAllUsers() {
		List<User> userList = this.userRepo.findAll();
		List<UserDto> UsetDtoList = userList.stream().map(user->this.modelMapper.map(user, UserDto.class)).collect(Collectors.toList());
		return UsetDtoList;
	}

	@Override
	public void deleteUser(Integer userId) {
		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "user id", userId));
		this.userRepo.delete(user);
		
	}

	@Override
	public UserDto registerNewUser(UserDto userDto) {
		User user = this.modelMapper.map(userDto, User.class);
		
		//password encoding
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		
		//Role assigning:Bydefault every new User is Normal User Only
		
		Role roleId = this.roleRepo.findById(AppConstants.NORMAL_USER).get();
		user.getRoles().add(roleId);
		User new_user = this.userRepo.save(user);
		
		return this.modelMapper.map(new_user, UserDto.class);
//		return this.modelMapper.map(new_user, userDto.getClass());
	}

}
