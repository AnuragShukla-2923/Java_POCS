package com.hotel.microservice.services.Impl;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.microservice.entites.Hotel;
import com.hotel.microservice.exceptions.ResourceNotFoundException;
import com.hotel.microservice.repositories.HotelRepository;
import com.hotel.microservice.services.HotelService;

@Service
public class HotelServiceImpl implements HotelService {
	
	@Autowired
	private HotelRepository  hotelRepositories;

	@Override
	public Hotel createHotel(Hotel hotel) {
		String hotelId = UUID.randomUUID().toString();
		hotel.setId(hotelId);
		return this.hotelRepositories.save(hotel);
	}

	@Override
	public List<Hotel> getAllHotels() {
		return this.hotelRepositories.findAll();
	}

	@Override
	public Hotel getHotel(String hotelId) {
		return hotelRepositories.findById(hotelId).orElseThrow(()->new ResourceNotFoundException("Hotel with id not found!:"+hotelId));
	}

	@Override
	public Hotel updateHotel(String hotelId, Hotel hotel) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteHotel(String hotelId) {
		  this.hotelRepositories.deleteById(hotelId);
		
	}

}
