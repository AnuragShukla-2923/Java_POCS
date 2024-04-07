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

import com.employee.management.payloads.ApiResponse;
import com.employee.management.payloads.FamilyTabDto;
import com.employee.management.service.FamilyTab_Service;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/employee/familyTab")
public class Family_Tab_Controller {
	
	@Autowired
	private FamilyTab_Service familyTab_Service;
	
	//getAll
	@GetMapping("/getAll")
	public ResponseEntity<List<FamilyTabDto>>getAllFamilyDetails(){
		List<FamilyTabDto> allFamilyDetails = this.familyTab_Service.getAllFamilyDetails();
		return new ResponseEntity<List<FamilyTabDto>>(allFamilyDetails,HttpStatus.OK);
	}
	//getById
	@GetMapping("/{familyId}")
	public ResponseEntity<FamilyTabDto>getById(@PathVariable("familyId")Long familyId){
		FamilyTabDto familyDetailsbyId = this.familyTab_Service.getFamilyDetailsbyId(familyId);
		return new ResponseEntity<FamilyTabDto>(familyDetailsbyId,HttpStatus.OK);
		
	}
	
	//@RequestPart is creating problem in front-end.
	//create
//	@PostMapping("/create")
//	public ResponseEntity<FamilyTabDto>createFamilyDetails(@RequestPart FamilyTabDto familyTabDto){
//		FamilyTabDto createdFamilyDetails = this.familyTab_Service.createFamilyDetails(familyTabDto);
//		return ResponseEntity.ok(createdFamilyDetails);
//	}
	
	//update
//		@PutMapping("/{familyId}")
//		public ResponseEntity<FamilyTabDto>updateFamilyDetails(
//				@RequestPart("familyTabDto") FamilyTabDto familyTabDto,
//				@PathVariable("familyId") Long familyId){
//			FamilyTabDto updatedFamilyDetails = this.familyTab_Service.updateFamilyDetails(familyTabDto, familyId);
//			return new ResponseEntity<FamilyTabDto>(updatedFamilyDetails,HttpStatus.OK);
//		}
	
	
	@PostMapping("/create")
	public ResponseEntity<FamilyTabDto>createFamilyDetails(@RequestBody FamilyTabDto familyTabDto){
		FamilyTabDto createdFamilyDetails = this.familyTab_Service.createFamilyDetails(familyTabDto);
		return ResponseEntity.ok(createdFamilyDetails);
	}
	//update
	@PutMapping("/{familyId}")
	public ResponseEntity<FamilyTabDto>updateFamilyDetails(
			@RequestBody FamilyTabDto familyTabDto,
			@PathVariable("familyId") Long familyId){
		FamilyTabDto updatedFamilyDetails = this.familyTab_Service.updateFamilyDetails(familyTabDto, familyId);
		return new ResponseEntity<FamilyTabDto>(updatedFamilyDetails,HttpStatus.OK);
	}
	
	
	//delete
	@DeleteMapping("/{familyId}")
	public ResponseEntity<ApiResponse>deleteById(@PathVariable("familyId") Long familyId){
		this.familyTab_Service.deleteFamilyDetails(familyId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Deleted Successfully!!",true),HttpStatus.OK);
		
	}

}
