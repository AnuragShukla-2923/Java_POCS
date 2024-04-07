package com.ratingServices.micro.Services.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ratingServices.micro.Services.RatingServices;
import com.ratingServices.micro.entities.Rating;
import com.ratingServices.micro.repositories.RatingRespository;

@Service
public class RatingServiceImpl implements RatingServices {

	@Autowired
	private RatingRespository ratingRespository;

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
