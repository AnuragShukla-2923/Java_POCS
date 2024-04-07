package com.blog.apis.services.Implementations;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.blog.apis.config.AppConstants;
import com.blog.apis.entities.Role;
import com.blog.apis.entities.User;
import com.blog.apis.entities.User;
//import com.blog.apis.entites.Role;
//import com.blog.apis.entites.User;
import com.blog.apis.exceptions.ResourceNotFoundException;
import com.blog.apis.payloads.UserDto;
import com.blog.apis.repositories.RoleRepo;
import com.blog.apis.repositories.UserRepo;
import com.blog.apis.services.UserService;

@Service
public class UserServiceImpl implements UserService {
// Model mapper not using
//	@Autowired
//	private UserRepo userRepo;
//
//	@Override
//	public UserDto createUser(UserDto userdto) {
//		User user = this.dtoToUser(userdto);
//		User savedUser = this.userRepo.save(user);
//		return this.userToDto(savedUser);
//	}
//
//	@Override
//	public UserDto updateUser(UserDto userdto, Integer userId) {
//		User user = this.userRepo.findById(userId)
//				.orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
//
//		user.setName(userdto.getName());
//		user.setEmail(userdto.getEmail());
//		user.setPassword(userdto.getPassword());
//		user.setAbout(userdto.getAbout());
//
//		User updatedUser = this.userRepo.save(user);
//		return this.userToDto(updatedUser);
//	}
//
//	@Override
//	public UserDto getUserById(Integer userId) {
//		User user = this.userRepo.findById(userId)
//				.orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
//		return this.userToDto(user);
//	}
//
//	@Override
//	public List<UserDto> getAllUsers() {
//		List<User> users = this.userRepo.findAll();
//		List<UserDto> userDtos = users.stream().map(User -> this.userToDto(User)).collect(Collectors.toList());
//
//		return userDtos;
//	}
//
//	@Override
//	public void deleteUser(Integer userId) {
//		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("user", "Id", userId));
//         this.userRepo.delete(user);
//	}
//
//	private User dtoToUser(UserDto userdto) {
//		User user = new User();
//		user.setId(userdto.getId());
//		user.setName(userdto.getName());
//		user.setEmail(userdto.getEmail());
//		user.setPassword(userdto.getPassword());
//		user.setAbout(userdto.getAbout());
//		return user;
//	}
//
//	private UserDto userToDto(User user) {
//		UserDto userDto = new UserDto();
//		userDto.setId(user.getId());
//		userDto.setName(user.getName());
//		userDto.setEmail(user.getEmail());
//		userDto.setPassword(user.getPassword());
//		userDto.setAbout(user.getAbout());
//
//		return userDto;
//	}
// ModelMapper library is used down	
	
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RoleRepo roleRepo;

	@Override
	public UserDto createUser(UserDto userdto) {
		User user = this.dtoToUser(userdto);
		User savedUser = this.userRepo.save(user);
		return this.userToDto(savedUser);
	}

	@Override
	public UserDto updateUser(UserDto userdto, Integer userId) {
		User user = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));

		user.setName(userdto.getName());
		user.setEmail(userdto.getEmail());
		user.setPassword(userdto.getPassword());
		user.setAbout(userdto.getAbout());

		User updatedUser = this.userRepo.save(user);
		return this.userToDto(updatedUser);
	}

	@Override
	public UserDto getUserById(Integer userId) {
		User user = this.userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User", "Id", userId));
		return this.userToDto(user);
	}

	@Override
	public List<UserDto> getAllUsers() {
		List<User> users = this.userRepo.findAll();
		List<UserDto> userDtos = users.stream().map(User -> this.userToDto(User)).collect(Collectors.toList());

		return userDtos;
	}

	@Override
	public void deleteUser(Integer userId) {
		User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("user", "Id", userId));
         this.userRepo.delete(user);
	}

	private User dtoToUser(UserDto userdto) {
		User user = new User();
		user=this.modelMapper.map(userdto,User.class);
		return user;
	}

	private UserDto userToDto(User user) {
		UserDto userDto = new UserDto();
		userDto=this.modelMapper.map(user,UserDto.class);
        return userDto;
	}

	@Override
	public UserDto registernNewUser(UserDto userDto) {
		User user = this.modelMapper.map(userDto, User.class);
		//encoded the password
		user.setPassword(this.passwordEncoder.encode(user.getPassword()));
		//roles:bydefault will take normal user only
		
		Role id = this.roleRepo.findById(AppConstants.NORMAL_USER).get();
		
		user.getRoles().add(id);
		
		User new_user = this.userRepo.save(user);
		return this.modelMapper.map(new_user, userDto.getClass());
	}


}
