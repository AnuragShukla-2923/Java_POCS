package com.employee.management.services.Implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.employee.management.config.AppConstants;
import com.employee.management.entities.Role;
import com.employee.management.entities.User;
import com.employee.management.exceptions.ResourceNotFoundException;
import com.employee.management.payloads.UserDto;
import com.employee.management.repositories.RoleRepo;
import com.employee.management.repositories.UserRepo;
import com.employee.management.services.UserService;



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
//		user.getRoles().add(roleId);
		User new_user = this.userRepo.save(user);
		
		return this.modelMapper.map(new_user, UserDto.class);
//		return this.modelMapper.map(new_user, userDto.getClass());
	}

}
