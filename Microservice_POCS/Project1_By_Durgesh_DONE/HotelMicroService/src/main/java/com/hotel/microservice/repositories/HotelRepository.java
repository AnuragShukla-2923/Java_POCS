package com.hotel.microservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.microservice.entites.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, String> {

}
