package com.hotel.microservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.microservice.entites.Hotel;
import com.hotel.microservice.services.HotelService;

@RestController
@RequestMapping("/hotels")
public class HotelController {

	@Autowired
	private HotelService hotelService;

	// create
	@PreAuthorize("hasAuthority('Admin')")
	@PostMapping
	public ResponseEntity<Hotel> createHotel(@RequestBody Hotel hotel) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(hotelService.createHotel(hotel));
	}
	// getsingle
	
//	@PreAuthorize("hasAuthority('SCOPE_internal')")
	@GetMapping("/{hotelId}")
	public ResponseEntity<Hotel>getHotel(@PathVariable String hotelId){
		return ResponseEntity.status(HttpStatus.OK)
				.body(hotelService.getHotel(hotelId));
	}
	
	@PreAuthorize("hasAuthority('SCOPE_internal')|| hasAuthority('Admin')")
	@GetMapping()
	public ResponseEntity<List<Hotel>>getAllHotel(){
		return ResponseEntity.status(HttpStatus.OK)
				.body(hotelService.getAllHotels());
	}
//	@DeleteMapping("/{hotelId}")
//	public ResponseEntity<Hotel>deleteHotel(@PathVariable String hotelId){
//		hotelService.deleteHotel(hotelId);
//		return  ResponseEntity.ok(HttpStatus.OK);
//				
//	}
	

}
