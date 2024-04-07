package com.hotelServices.micro.services;

import java.util.List;

import com.hotelServices.micro.entities.Hotel;

public interface HotelService {

	
//	create
	Hotel createHotel(Hotel hotel);
//	getAll
	List<Hotel>getAll();
//	getSingle
	Hotel getSingleHotel(String id);
}
