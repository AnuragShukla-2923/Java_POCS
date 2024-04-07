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
import com.employee.management.payloads.EducationTabDto;
import com.employee.management.services.EducationTab_Service;



@RestController
@RequestMapping("/api/employee/educationalTab")
public class Education_Tab_Controller {
	
	@Autowired
	private EducationTab_Service  educationTab_Service;
	
	
	//getAll
	@GetMapping("/getAll")
	public ResponseEntity<List<EducationTabDto>>getAllEducationalDetails(){
		List<EducationTabDto> allEducationDetails = this.educationTab_Service.getAllEducationDetails();
		return new ResponseEntity<List<EducationTabDto>>(allEducationDetails,HttpStatus.OK);
	}
	//getbyId
	@GetMapping("/{educationalId}")
	public ResponseEntity<EducationTabDto>getEducationalDetailsById(@PathVariable("educationalId")Long educationalId){
		EducationTabDto educationTabDto = this.educationTab_Service.getEducationDetailsbyId(educationalId);
		return new ResponseEntity<EducationTabDto>(educationTabDto,HttpStatus.OK);
	}
//	//post
//	@PostMapping("/create")
//	public ResponseEntity<ApiResponse>createEducationalDetails(
//			@RequestPart("educationTabDto") EducationTabDto educationTabDto){
//		EducationTabDto createdEducationDetails = this.educationTab_Service.createEducationDetails(educationTabDto);
//		return new ResponseEntity<ApiResponse>(new ApiResponse("Educational Details Created Successfully!!",true),HttpStatus.OK);
//	}
//	//put
//	@PutMapping("/{educationalId}")
//	public ResponseEntity<ApiResponse>updateEducationalDetails(@RequestPart EducationTabDto educationTabDto,
//			@PathVariable("educationalId") Long educationalId){
//		
//		EducationTabDto updatedEducationDetails = this.educationTab_Service.updateEducationDetails(educationTabDto, educationalId);
//		return new ResponseEntity<ApiResponse>(new ApiResponse("Updated Successfully!!",true),HttpStatus.OK);
//	}
	
	
	//post
		@PostMapping("/create/{pid}")
		public ResponseEntity<EducationTabDto>createEducationalDetails(
				@RequestBody EducationTabDto educationTabDto,
				@PathVariable Long pid){
			EducationTabDto createdEducationDetails = this.educationTab_Service.createEducationDetails(educationTabDto,pid);
			return new ResponseEntity<EducationTabDto>(createdEducationDetails,HttpStatus.OK);
		}
		//put
		@PutMapping("/{educationalId}")
		public ResponseEntity<ApiResponse>updateEducationalDetails(@RequestBody EducationTabDto educationTabDto,
				@PathVariable("educationalId") Long educationalId){
			
			EducationTabDto updatedEducationDetails = this.educationTab_Service.updateEducationDetails(educationTabDto, educationalId);
			return new ResponseEntity<ApiResponse>(new ApiResponse("Updated Successfully!!",true),HttpStatus.OK);
		}
	
	
	//delete
	@DeleteMapping("/{educationalId}")
	public ResponseEntity<ApiResponse>deleteEducationalDetails(@PathVariable("educationalId") Long educationalId){
		this.educationTab_Service.deleteEducationDetails(educationalId);
		return new  ResponseEntity<ApiResponse>(new ApiResponse("Educational Details Deleted Successfully!!",true),HttpStatus.OK);
	}
	


}
