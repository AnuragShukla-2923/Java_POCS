//package com.rating.microservice.services;
//
//import java.util.List;
//
//import com.rating.microservice.entities.Rating;
//
//public interface RatingService {
//	
//    Rating createRating(Rating rating);
//	List<Rating> getAllRatings();
//	Rating getRating(String ratingId);
//	Rating updateRating(String ratingId,Rating rating);
//	void deleteRating(String ratingId);
//
//	
////	getallbyUserId
//	List<Rating>getRatingByUserId(String userId);
//
////	getAllbyhotel
//	List<Rating>getRatingByHotelId(String hotelId);
//}


//Method2:


package com.rating.microservice.services;

import java.util.List;

import com.rating.microservice.entities.Rating;


public interface RatingServices {
	
	Rating createRatings(Rating  rating);
	List<Rating>getAll();
	Rating getById(String ratingId);
	Rating updateById(Rating rating,String ratingId);
	void deleteRating(String ratingId);
	
	List<Rating>getRatingsByUserId(String userId);
	List<Rating>getRatingsByHotelId(String hotelId);

}
