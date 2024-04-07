package com.hotelServices.micro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotelServices.micro.entities.Hotel;

public interface HotelRepo extends JpaRepository<Hotel, String> {

}
