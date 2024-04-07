package com.hotel.microservice.services;

import java.util.List;

import com.hotel.microservice.entites.Hotel;

public interface HotelService {
	
	Hotel createHotel(Hotel hotel);
	List<Hotel> getAllHotels();
	Hotel getHotel(String hotelId);
	Hotel updateHotel(String hotelId,Hotel hotel);
    void deleteHotel(String hotelId);
	

}
