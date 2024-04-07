package com.employee.management.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.employee.management.payloads.AccommodationTabDto;
import com.employee.management.payloads.ApiResponse;
import com.employee.management.service.AccommodationTab_Service;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/employee/accommodationTab")
public class Accomodation_Tab_Controller {
	
	@Autowired
	private AccommodationTab_Service accommodationTab_Service;
	
	
	//getAll
	@GetMapping("/getAll")
	public ResponseEntity<List<AccommodationTabDto>>getAllAccommodationDetails(){
		List<AccommodationTabDto> allAccommodationDetails = this.accommodationTab_Service.getAllAccommodationDetails();
		return new ResponseEntity<List<AccommodationTabDto>>(allAccommodationDetails,HttpStatus.OK);
		
	}
	//getById
	@GetMapping("/{accommodationId}")
	public ResponseEntity<AccommodationTabDto>getAccommodationDetailsById(@PathVariable Long accommodationId ){
		AccommodationTabDto accommodationDetailsbyId = this.accommodationTab_Service.getAccommodationDetailsbyId(accommodationId);
		return new ResponseEntity<AccommodationTabDto>(accommodationDetailsbyId,HttpStatus.OK);
		
	}
//	//@Requestpart is creating problem for front end.
//	//create
//	@PostMapping("/create")
//	public ResponseEntity<AccommodationTabDto>createAccommodationDetails(@RequestPart AccommodationTabDto accommodationTabDto){
//		AccommodationTabDto createdAccommodationDetails = this.accommodationTab_Service.createAccommodationDetails(accommodationTabDto);
//		return new ResponseEntity<AccommodationTabDto>(createdAccommodationDetails,HttpStatus.OK);
//	}
//	
//	
//	//update
//	@PutMapping("/{accommodationId}")
//	public ResponseEntity<AccommodationTabDto>updateAccommodationDetails(@RequestPart AccommodationTabDto accommodationTabDto
//			,@PathVariable Long accommodationId){
//		AccommodationTabDto updatedAccommodationDetails = this.accommodationTab_Service.updateAccommodationDetails(accommodationTabDto, accommodationId);
//		return new ResponseEntity<AccommodationTabDto>(updatedAccommodationDetails,HttpStatus.OK);
//	}
	
	
	//create
	@PostMapping("/create")
	public ResponseEntity<AccommodationTabDto>createAccommodationDetails(@RequestBody AccommodationTabDto accommodationTabDto){
		AccommodationTabDto createdAccommodationDetails = this.accommodationTab_Service.createAccommodationDetails(accommodationTabDto);
		return new ResponseEntity<AccommodationTabDto>(createdAccommodationDetails,HttpStatus.OK);
	}
	
	//@RequestBody
	//update
	@PutMapping("/{accommodationId}")
	public ResponseEntity<AccommodationTabDto>updateAccommodationDetails(@RequestBody AccommodationTabDto accommodationTabDto
			,@PathVariable Long accommodationId){
		AccommodationTabDto updatedAccommodationDetails = this.accommodationTab_Service.updateAccommodationDetails(accommodationTabDto, accommodationId);
		return new ResponseEntity<AccommodationTabDto>(updatedAccommodationDetails,HttpStatus.OK);
	}
	
	
	//delete
	@DeleteMapping("/{accommodationId}")
	public ResponseEntity<ApiResponse>deleteAccommodationDetails(@PathVariable Long accommodationId ){
		this.accommodationTab_Service.deleteAccommodationDetails(accommodationId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Deleted Successfully!!",true),HttpStatus.OK);
		
	}

}
