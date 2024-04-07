package com.employee.management.controllers;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.management.entities.User;
import com.employee.management.exceptions.ApiException;
import com.employee.management.payloads.JwtAuthRequest;
import com.employee.management.payloads.JwtAuthResponse;
import com.employee.management.payloads.UserDto;
import com.employee.management.security.JwtTokenHelper;
import com.employee.management.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/auth")
//@Secured("IS_AUTHENTICATED_ANONYMOUSLY")
//@CrossOrigin(origins = "http://localhost:3000")  // this is also working for me
//@CrossOrigin(origins = "*", allowedHeaders = "*")    //this is working for me
public class AuthController {

	@Autowired
	private JwtTokenHelper jwtTokenHelper;

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/login")
	public ResponseEntity<JwtAuthResponse> createToken( @RequestBody JwtAuthRequest request) throws Exception {
		this.authenticate(request.getUsername(), request.getPassword());
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());

		String token = this.jwtTokenHelper.generateToken(userDetails);
		
		JwtAuthResponse authResponse = new JwtAuthResponse();
		authResponse.setToken(token);
		
	    authResponse.setUser(this.modelMapper.map((User)userDetails, UserDto.class));
		return new ResponseEntity<JwtAuthResponse>(authResponse, HttpStatus.OK);

	}

	private void authenticate(String username, String password) throws Exception {

		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,
				password);
		try {
			this.authenticationManager.authenticate(authenticationToken);
		} catch (BadCredentialsException e) {
			System.out.println("Invalid userName and Password");
			throw new ApiException("Invalid userName and Password");
		}

	}
	
	//Register New User api
	@PostMapping("/register") 
	public ResponseEntity<UserDto> registerNewUser(@Valid @RequestBody UserDto userDto){
		UserDto newUser = this.userService.registerNewUser(userDto);
		return new ResponseEntity<UserDto>(newUser,HttpStatus.CREATED);
	}

}
