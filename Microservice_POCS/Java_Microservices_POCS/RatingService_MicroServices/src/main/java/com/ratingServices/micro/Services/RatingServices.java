package com.ratingServices.micro.Services;

import java.util.List;

import com.ratingServices.micro.entities.Rating;

public interface RatingServices {
	
	Rating createRatings(Rating  rating);
	List<Rating>getAll();
	Rating getById(String ratingId);
	Rating updateById(Rating rating,String ratingId);
	void deleteRating(String ratingId);
	
	List<Rating>getRatingsByUserId(String userId);
	List<Rating>getRatingsByHotelId(String hotelId);

}
