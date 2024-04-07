//package com.rating.microservice.controllers;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.rating.microservice.entities.Rating;
//import com.rating.microservice.services.RatingService;
//
//@RestController
//@RequestMapping("/ratings")
//public class RatingController {
//	
//	@Autowired
//	private RatingService ratingService;
//	
//	@PostMapping
//	public ResponseEntity<Rating>createRating(@RequestBody Rating rating){
//		return ResponseEntity.status(HttpStatus.CREATED).body(ratingService.createRating(rating));
//	}
//	
//	@GetMapping
//	public ResponseEntity<List<Rating>>getAllRatings(){
//		return ResponseEntity.status(HttpStatus.OK).body(ratingService.getAllRatings());
//	}
//	
//	
//	
//	@GetMapping("/users/{userId}")
//	public ResponseEntity<List<Rating>>getAllRatingsByUserId(@PathVariable String userId){
//		return ResponseEntity.ok(ratingService.getRatingByUserId(userId));
//	}
//	
//	
//	@GetMapping("/hotels/{hotelId}")
//	public ResponseEntity<List<Rating>>getAllRatingsByHotelId(@PathVariable String hotelId){
//		return ResponseEntity.ok(ratingService.getRatingByHotelId(hotelId));
//	}
//	
//	
//	
////	@GetMapping("/{ratingId}")
////	public ResponseEntity<Rating>getRating(@PathVariable String ratingId){
////		return ResponseEntity.status(HttpStatus.OK).body(ratingService.getRating(ratingId));
////	}
////	
//	
//	
//	
//	
//	
//	@PutMapping("/{ratingId}")
//	public ResponseEntity<Rating>updateRating(@RequestBody Rating rating,
//			@PathVariable String ratingId){
//		return ResponseEntity.status(HttpStatus.OK).body(ratingService.updateRating(ratingId, rating));
//		
//	}
//	
//
//}





//Method 2:



package com.rating.microservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rating.microservice.entities.Rating;
import com.rating.microservice.services.RatingServices;


@RestController
@RequestMapping("/ratings")
public class RatingController {

	@Autowired
	private RatingServices ratingServices;

	@PreAuthorize("hasAuthority('Admin')")
	@PostMapping
	public ResponseEntity<Rating> createRatings(@RequestBody Rating ratings) {
		Rating ratings2 = ratingServices.createRatings(ratings);
		return ResponseEntity.status(HttpStatus.CREATED).body(ratings2);
	}

	@GetMapping
	public ResponseEntity<List<Rating>> getAllRatings() {
		return ResponseEntity.ok(ratingServices.getAll());
	}

//	@PreAuthorize("hasAuthority('SCOPE_internal')|| hasAuthority('Admin')")
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

