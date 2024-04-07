//package com.rating.microservice.services.Impl;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.rating.microservice.entities.Rating;
//import com.rating.microservice.exceptions.ResourceNotFoundException;
//import com.rating.microservice.repositories.RatingRepository;
//import com.rating.microservice.services.RatingService;
//
//@Service
//public class RatingServiceImpl  implements RatingService{
//	
//	
//	@Autowired
//	private RatingRepository  ratingRepository;
//
//	@Override
//	public Rating createRating(Rating rating) {
//		// TODO Auto-generated method stub
//		return ratingRepository.save(rating);
//	}
//
//	@Override
//	public List<Rating> getAllRatings() {
//		// TODO Auto-generated method stub
//		return ratingRepository.findAll();
//	}
//
//	@Override
//	public Rating getRating(String ratingId) {
//		// TODO Auto-generated method stub
//		return ratingRepository.findById(ratingId).orElseThrow(()->new ResourceNotFoundException());
//	}
//
//	@Override
//	public Rating updateRating(String ratingId, Rating rating) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//	@Override
//	public void deleteRating(String ratingId) {
//		// TODO Auto-generated method stub
//		
//	}
//
//	@Override
//	public List<Rating> getRatingByUserId(String userId) {
//		// TODO Auto-generated method stub
//		return ratingRepository.findByUserId(userId);
//	}
//
//	@Override
//	public List<Rating> getRatingByHotelId(String hotelId) {
//		// TODO Auto-generated method stub
//		return ratingRepository.findByHotelId(hotelId);
//	}
//
//}



//Method2

package com.rating.microservice.services.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rating.microservice.entities.Rating;
import com.rating.microservice.repositories.RatingRepository;
import com.rating.microservice.services.RatingServices;


@Service
public class RatingServiceImpl implements RatingServices {

	@Autowired
	private RatingRepository ratingRespository;

	@Override
	public Rating createRatings(Rating rating) {
		return ratingRespository.save(rating);
	}

	@Override
	public List<Rating> getAll() {
		// TODO Auto-generated method stub
		return ratingRespository.findAll();
	}

	@Override
	public List<Rating> getRatingsByUserId(String userId) {

		return ratingRespository.findByUserId(userId);
	}

	@Override
	public List<Rating> getRatingsByHotelId(String hotelId) {
		// TODO Auto-generated method stub
		return ratingRespository.findByHotelId(hotelId);
	}

	@Override
	public Rating getById(String ratingId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Rating updateById(Rating rating, String ratingId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteRating(String ratingId) {
		// TODO Auto-generated method stub

	}

}



