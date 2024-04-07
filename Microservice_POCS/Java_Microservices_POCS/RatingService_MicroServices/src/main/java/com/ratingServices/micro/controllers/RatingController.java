package com.ratingServices.micro.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ratingServices.micro.Services.RatingServices;
import com.ratingServices.micro.entities.Rating;

@RestController
@RequestMapping("/ratings")
public class RatingController {

	@Autowired
	private RatingServices ratingServices;

	@PostMapping
	public ResponseEntity<Rating> createRatings(@RequestBody Rating ratings) {
		Rating ratings2 = ratingServices.createRatings(ratings);
		return ResponseEntity.status(HttpStatus.CREATED).body(ratings2);
	}

	@GetMapping
	public ResponseEntity<List<Rating>> getAllRatings() {
		return ResponseEntity.ok(ratingServices.getAll());
	}

	@GetMapping("/users/{userId}")
	public ResponseEntity<List<Rating>> getRatingsByUserId(@PathVariable String userId) {
		return ResponseEntity.status(HttpStatus.OK).body(ratingServices.getRatingsByUserId(userId));
	}

	@GetMapping("/hotels/{hotelId}")
	public ResponseEntity<List<Rating>> getRatingsByHotelId(@PathVariable String hotelId) {
		return ResponseEntity.status(HttpStatus.OK).body(ratingServices.getRatingsByHotelId(hotelId));
	}
	
	@GetMapping("/{ratingId}")
	public ResponseEntity<Rating>getById(@PathVariable String ratingId){
		return ResponseEntity.ok(ratingServices.getById(ratingId));
	}
}
