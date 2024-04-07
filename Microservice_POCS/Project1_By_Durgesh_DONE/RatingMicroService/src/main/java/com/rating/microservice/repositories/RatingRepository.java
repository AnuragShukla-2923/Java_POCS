//package com.rating.microservice.repositories;
//
//import java.util.List;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//
//import com.rating.microservice.entities.Rating;
//
//public interface RatingRepository extends MongoRepository<Rating, String>{
//
////	custom finder methods
//	
//	List<Rating>findByUserId(String userId);
//	List<Rating>findByHotelId(String hotelId);
//}


//method2
package com.rating.microservice.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rating.microservice.entities.Rating;


public interface RatingRepository extends MongoRepository<Rating, String>{
	
	List<Rating>findByUserId(String userId);
	List<Rating>findByHotelId(String hotelId);

}
