package com.user.microservice.services.Impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.hibernate.transform.ToListResultTransformer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.user.microservice.entities.Hotel;
import com.user.microservice.entities.Ratings;
import com.user.microservice.entities.User;
import com.user.microservice.exceptions.ResourceNotFoundException;
import com.user.microservice.externals.services.HotelService;
import com.user.microservice.repositories.UserRepository;
import com.user.microservice.services.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	
	@Autowired
	private UserRepository userRepository;
	
	private Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
	
	
	@Autowired
	private RestTemplate  restTemplate;
	
	
	@Autowired
	private HotelService hotelService;

	@Override
	public User createUser(User user) {
//		generating a unique userId
		String randomUserId = UUID.randomUUID().toString();
		user.setUserId(randomUserId);
		return this.userRepository.save(user);
	}

	@Override
	public List<User> getAllUser() {
//		implement ratingservice call using:RestTemplate
		return this.userRepository.findAll();
	}

//	Method 1:
	
//	@Override
//	public User getUser(String userId) {
//		User user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User with given Id is not found on server!:"+userId));
////		fetch rating of above user from rating service
////		http://localhost:8083/ratings/users/0027fd1d-4167-4e05-bb6c-74c83ec75334
//		Ratings[] ratingOfUsers = restTemplate.getForObject("http://RATING-SERVICE/ratings/users/"+user.getUserId(), Ratings[].class);
//		logger.info("{}",ratingOfUsers);
//		
//		List<Ratings> ratings = Arrays.stream(ratingOfUsers).toList();
//		
//		
//		List<Ratings> ratingList = ratings.stream().map(rating->{
////			api call to Hotelservice
////			http://localhost:8082/hotels/312ad493-2b38-4cb2-9aa0-a4f11ade237a
//			ResponseEntity<Hotel> hotelEntity = restTemplate.getForEntity("http://HOTEL-SERVICE/hotels/"+rating.getHotelId(), Hotel.class);
//
//			Hotel hotel = hotelEntity.getBody();
//			logger.info("{}",hotelEntity.getStatusCode());
////			set the hotel to rating
//			rating.setHotel(hotel);
////			return the rating
//			return rating;
//		}).collect(Collectors.toList());
//		
//		user.setRatings(ratingList);
//		return user;
//	}
	
	
//Method 2:
	
	@Override
	public User getUser(String userId) {
		User user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User with given Id is not found on server!:"+userId));
//		fetch rating of above user from rating service
//		http://localhost:8083/ratings/users/0027fd1d-4167-4e05-bb6c-74c83ec75334
//		Ratings[] ratingOfUsers = restTemplate.getForObject("http://RATING-SERVICE/ratings/users/"+user.getUserId(), Ratings[].class);
		
		Ratings[] ratingOfUsers = restTemplate.getForObject("http://RATING-SERVICE/ratings/users/" +user.getUserId(),Ratings[].class);
		
		logger.info("{}",ratingOfUsers);
		
		List<Ratings> ratings = Arrays.stream(ratingOfUsers).toList();
		
		
		List<Ratings> ratingList = ratings.stream().map(rating->{
//			api call to Hotelservice
//			http://localhost:8082/hotels/312ad493-2b38-4cb2-9aa0-a4f11ade237a
			
			Hotel hotel = hotelService.getHotel(rating.getHotelId());
//			set the hotel to rating
			rating.setHotel(hotel);
//			return the rating
			return rating;
		}).collect(Collectors.toList());
		
		user.setRatings(ratingList);
		return user;
	}


	@Override
	public void deleteUser(String userId) {
		userRepository.deleteById(userId);
		
	}

	@Override
	public User updateUser(String userId, User user) {
		// TODO Auto-generated method stub
		return null;
	}

}
