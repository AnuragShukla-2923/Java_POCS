package com.employee.management.services;

import java.util.List;

import com.employee.management.payloads.AccommodationTabDto;
public interface AccommodationTab_Service {
	
	AccommodationTabDto createAccommodationDetails(AccommodationTabDto accommodationTabDto,Long pid);
	AccommodationTabDto updateAccommodationDetails(AccommodationTabDto accommodationTabDto,Long accommodationId);
	AccommodationTabDto getAccommodationDetailsbyId(Long accommodationId);
	
	List<AccommodationTabDto>getAllAccommodationDetails();
	void deleteAccommodationDetails(Long accommodationId);

}
