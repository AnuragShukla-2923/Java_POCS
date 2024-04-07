package com.user.microservice.controllers;

import java.util.List;

import javax.websocket.server.PathParam;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import com.user.microservice.entities.User;
import com.user.microservice.services.UserService;
import com.user.microservice.services.Impl.UserServiceImpl;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;
import io.github.resilience4j.retry.annotation.Retry;

@RestController
@RequestMapping("/users")
public class UserController {
	
	
	private Logger logger = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;

	@PostMapping
	public ResponseEntity<User> createUser(@RequestBody User user) {
		User createdUser = userService.createUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(user);
	}
	int retryCount=1;

//	@PreAuthorize("hasAuthority('Admin')|| hasAuthority('Normal')")
	@GetMapping("/{userId}")
	@CircuitBreaker(name = "ratingHotelBreaker", fallbackMethod = "ratingHotelFallback")
	@Retry(name = "ratingHotelService",fallbackMethod ="ratingHotelFallback")
	@RateLimiter(name = "userRateLimiter",fallbackMethod ="ratingHotelFallback")
	public ResponseEntity<User> getUser(@PathVariable String userId) {
		logger.info("Get single user handler:UserController");
		logger.info("RetryCount:{}",retryCount);
		retryCount++;
		User user = userService.getUser(userId);
		return ResponseEntity.ok(user);

	}

//	creating fallback method for circuitbreaker
	
	public ResponseEntity<User>ratingHotelFallback(String userId,Exception ex){
//		logger.info("fallback is executed becz service is down:",ex.getMessage());
		ex.printStackTrace();
		
		User user = User.builder().email("dummy@gmail.com")
		.name("dummy").about("This user is created dummy becz service is down")
		.userId("1223343").build();
		return new ResponseEntity<User>(user,HttpStatus.BAD_REQUEST);
		
	}

	@GetMapping
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> allUser = userService.getAllUser();
		return ResponseEntity.ok(allUser);
	}

	@DeleteMapping("/{userId}")
	public ResponseEntity<User> deleteUser(@PathVariable String userId) {
		userService.deleteUser(userId);
//		return ResponseEntity.status(HttpStatus.ACCEPTED).body(user); 
		return new ResponseEntity<>(HttpStatus.ACCEPTED);

	}

	@PutMapping("/{userId}")
	public ResponseEntity<User> updateUser(@PathVariable String userId, @RequestBody User user) {
		User updateUser = userService.updateUser(userId, user);
		return ResponseEntity.status(HttpStatus.CREATED).body(updateUser);
	}
}
