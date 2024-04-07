package com.hotelServices.micro.controllers;

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

import com.hotelServices.micro.entities.Hotel;
import com.hotelServices.micro.services.HotelService;

@RestController
@RequestMapping("/hotels")
public class HotelController {
	
	@Autowired
	private HotelService  hotelService;
	
	
//	create
	@PostMapping
	public ResponseEntity<Hotel>createHotel(@RequestBody Hotel hotel){
//		Hotel createHotel = hotelService.createHotel(hotel);
		return ResponseEntity.status(HttpStatus.CREATED).
				body(hotelService.createHotel(hotel));
		
	}
//	getAll
	@GetMapping
	public ResponseEntity<List<Hotel>>getAllHotels(){
//		List<Hotel> all = hotelService.getAll();
		return ResponseEntity.status(HttpStatus.CREATED).body(hotelService.getAll());
	}
//	getSingle
	@GetMapping("/{hotelId}")
	public ResponseEntity<Hotel>getSingle(@PathVariable String hotelId){
//	   Hotel singleHotel = hotelService.getSingleHotel(hotelId);
//	   return ResponseEntity.status(HttpStatus.OK).body(singleHotel);
		return ResponseEntity.status(HttpStatus.OK).body(hotelService.getSingleHotel(hotelId));
	}

}
