package com.hotelServices.micro.services.Impl;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelServices.micro.entities.Hotel;
import com.hotelServices.micro.exceptions.ResourceNotFoundException;
import com.hotelServices.micro.repositories.HotelRepo;
import com.hotelServices.micro.services.HotelService;

@Service
public class HotelServiceImpl implements HotelService {
	
	
	@Autowired
	private HotelRepo hotelRepo;

	@Override
	public Hotel createHotel(Hotel hotel) {
		String id = UUID.randomUUID().toString();
		hotel.setId(id);
	
		Hotel hotel2 = hotelRepo.save(hotel);
		return hotel2;
	}

	@Override
	public List<Hotel> getAll() {
		return hotelRepo.findAll();
	}

	@Override
	public Hotel getSingleHotel(String id) {
		Hotel hotel = hotelRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Hotel with id not found:"+id));
		return hotel;
	}

}
