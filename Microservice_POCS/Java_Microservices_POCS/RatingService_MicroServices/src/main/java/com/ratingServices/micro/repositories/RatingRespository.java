package com.ratingServices.micro.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ratingServices.micro.entities.Rating;

public interface RatingRespository extends MongoRepository<Rating, String>{
	
	List<Rating>findByUserId(String userId);
	List<Rating>findByHotelId(String hotelId);

}
