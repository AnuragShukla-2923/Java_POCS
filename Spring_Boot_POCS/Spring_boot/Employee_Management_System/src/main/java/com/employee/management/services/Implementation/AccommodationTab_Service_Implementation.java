package com.employee.management.services.Implementation;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entities.Accommodation_Tab;
import com.employee.management.entities.Personal_Tab;
import com.employee.management.exceptions.ResourceNotFoundException;
import com.employee.management.payloads.AccommodationTabDto;
import com.employee.management.repositories.AccommodationTabRepo;
import com.employee.management.repositories.PersonalTabRepo;
import com.employee.management.services.AccommodationTab_Service;
//
//import com.employeeManagement.service.entities.Accommodation_Tab;
//import com.employeeManagement.service.entities.Personal_Tab;
//import com.employeeManagement.service.exceptions.ResourceNotFoundException;
//import com.employeeManagement.service.payloads.AccommodationTabDto;
//import com.employeeManagement.service.repositories.AccommodationTabRepo;
//import com.employeeManagement.service.repositories.PersonalTabRepo;
//import com.employeeManagement.service.services.AccommodationTab_Service;

@Service
public class AccommodationTab_Service_Implementation implements AccommodationTab_Service {
	@Autowired
	private AccommodationTabRepo accommodationTabRepo;
	
	@Autowired
	private PersonalTabRepo personalTabRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public AccommodationTabDto createAccommodationDetails(AccommodationTabDto accommodationTabDto,Long pid) {
		Accommodation_Tab accommodation_Tab = this.modelMapper.map(accommodationTabDto, Accommodation_Tab.class);
	    Personal_Tab person = this.personalTabRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Person", "personalid", pid));
		accommodation_Tab.setPersonalId(person);
	    Accommodation_Tab accommodation_Tab2 = this.accommodationTabRepo.save(accommodation_Tab);
		return this.modelMapper.map(accommodation_Tab2, AccommodationTabDto.class);
	}

	@Override
	public AccommodationTabDto updateAccommodationDetails(AccommodationTabDto accommodationTabDto,
			Long accommodationId) {
		Accommodation_Tab accommodation_Tab = this.accommodationTabRepo.findById(accommodationId)
				.orElseThrow(()->new ResourceNotFoundException("AccommodationDetails","AccommodationId", accommodationId));
		
		
		
		accommodation_Tab.setAccommodationGivenByCompany(accommodationTabDto.getAccommodationGivenByCompany());
		accommodation_Tab.setFlatNo(accommodationTabDto.getFlatNo());
		accommodation_Tab.setCompletePostalAddress(accommodationTabDto.getCompletePostalAddress());
		accommodation_Tab.setContactDetails(accommodationTabDto.getContactDetails());
		accommodation_Tab.setShiftedOn(accommodationTabDto.getShiftedOn());
		accommodation_Tab.setRelievedOn(accommodationTabDto.getRelievedOn());
		accommodation_Tab.setDurationOfTime(accommodationTabDto.getDurationOfTime());
		accommodation_Tab.setMonthlyRent(accommodationTabDto.getMonthlyRent());
		accommodation_Tab.setMiscellaneousChargesIfAny(accommodationTabDto.getMiscellaneousChargesIfAny());
		accommodation_Tab.setAnyIssueIf(accommodationTabDto.getAnyIssueIf());
		
		
		Accommodation_Tab updatedAccommodationDetails = this.accommodationTabRepo.save(accommodation_Tab);
	    return this.modelMapper.map(updatedAccommodationDetails, AccommodationTabDto.class);
	}

	@Override
	public AccommodationTabDto getAccommodationDetailsbyId(Long accommodationId) {
		Accommodation_Tab accommodation_Tab = this.accommodationTabRepo.findById(accommodationId)
				.orElseThrow(()->new ResourceNotFoundException("AccommodationDetails", "AccommodationId", accommodationId));
		return this.modelMapper.map(accommodation_Tab, AccommodationTabDto.class);
	}

	@Override
	public List<AccommodationTabDto> getAllAccommodationDetails() {
		List<Accommodation_Tab> allAccommodationDetails = this.accommodationTabRepo.findAll();
		if(allAccommodationDetails.size()==0) {
			throw new ResourceNotFoundException("Record", "", 0);
		}else {
			List<AccommodationTabDto> collectedAccommodationDetails = allAccommodationDetails.stream()
			.map(accommodationDetails->this.modelMapper
					.map(accommodationDetails, AccommodationTabDto.class))
			.collect(Collectors.toList());
			return collectedAccommodationDetails;
		}
	
	}

	@Override
	public void deleteAccommodationDetails(Long accommodationId) {
		 Accommodation_Tab accommodation_Tab = this.accommodationTabRepo.findById(accommodationId)
		 .orElseThrow(()->new ResourceNotFoundException("AccommodationDetails", "AccommodationId", accommodationId));
		 this.accommodationTabRepo.delete(accommodation_Tab);
		
	}


}
