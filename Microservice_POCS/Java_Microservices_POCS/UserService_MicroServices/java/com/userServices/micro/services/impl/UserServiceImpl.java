package com.userServices.micro.services.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.userServices.micro.entities.Hotel;
import com.userServices.micro.entities.Rating;
import com.userServices.micro.entities.User;
import com.userServices.micro.exceptions.ResourceNotFoundException;
import com.userServices.micro.repositories.UserRepository;
import com.userServices.micro.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	
	private Logger logger=LoggerFactory.getLogger(UserServiceImpl.class);

	@Override
	public User saveUser(User user) {
		String randomUserId = UUID.randomUUID().toString(); 
		user.setUserId(randomUserId);
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUser() {
//		implementing rating service call using resttemplate
		return userRepository.findAll();
	}

	@Override
	public User getUser(String userId) {
		// TODO Auto-generated method stub
		User user= userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User With given Id Not Found on server:"+userId));
//		fetch rating of the above
//		http://localhost:8083/ratings/users/7c27719b-5054-405f-9143-70f74b9ec3f2
//		restTemplate.getForObject(url:"http://localhost:8083/ratings/users/7c27719b-5054-405f-9143-70f74b9ec3f2",ArrayList.class);
		Rating[] ratingofuser = restTemplate.getForObject("http://RATING-SERVICE/ratings/users/"+user.getUserId(),Rating[].class);
		logger.info("{}",ratingofuser);
		List<Rating> ratings = Arrays.stream(ratingofuser).toList();
		
		
		List<Rating> ratingList = ratings.stream().map(rating->{
//			APi call to hotel Service
//			http://localhost:8082/hotels/bd400a2d-dcd9-4597-8347-7f7b317cc79e
			ResponseEntity<Hotel> forEntity = restTemplate.getForEntity("http://HOTEL-SERVICE/hotels/"+rating.getHotelId(), Hotel.class);
			Hotel hotel = forEntity.getBody();
			logger.info("response status code:{}",forEntity.getStatusCode());
//			set the hotel to ratings
			rating.setHotel(hotel);
//			return rating
			return rating;
		}).collect(Collectors.toList());
		
//		user.setRatings(ratingofuser);
		user.setRatings(ratingList);
		return user;
	
	}

	@Override
	public User updateUser(String userId, User user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteUser(String userId) {
		// TODO Auto-generated method stub
		
	}

}
