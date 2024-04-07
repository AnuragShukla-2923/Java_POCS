package com.employee.management.service;

import java.util.List;

import com.employee.management.payloads.AccommodationTabDto;
public interface AccommodationTab_Service {
	
	AccommodationTabDto createAccommodationDetails(AccommodationTabDto accommodationTabDto);
	AccommodationTabDto updateAccommodationDetails(AccommodationTabDto accommodationTabDto,Long accommodationId);
	AccommodationTabDto getAccommodationDetailsbyId(Long accommodationId);
	
	List<AccommodationTabDto>getAllAccommodationDetails();
	void deleteAccommodationDetails(Long accommodationId);

}
