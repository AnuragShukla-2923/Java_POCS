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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.employee.management.payloads.ApiResponse;
import com.employee.management.payloads.WorkExperienceTabDto;
import com.employee.management.service.WorkExperienceTab_Service;


@RestController
@RequestMapping("/api/employee/workExperienceTab")
public class WorkExperience_Tab_Controller {
	
	@Autowired
	private WorkExperienceTab_Service workExperienceTab_Service;
	
	
	//getAll
	@GetMapping("/getAll")
	public ResponseEntity<List<WorkExperienceTabDto>>getAllWorkExperience(){
		List<WorkExperienceTabDto> allWorkExperience = this.workExperienceTab_Service.getAllWorkExperience();
		return new ResponseEntity<List<WorkExperienceTabDto>>(allWorkExperience,HttpStatus.OK);
		
	}
	//getById
	@GetMapping("/{workExperienceId}")
	public ResponseEntity<WorkExperienceTabDto>getByWorkExperience(@PathVariable("workExperienceId") Long workExperienceId){
		WorkExperienceTabDto workExperiencebyId = this.workExperienceTab_Service.getWorkExperiencebyId(workExperienceId);
		return new ResponseEntity<WorkExperienceTabDto>(workExperiencebyId,HttpStatus.OK);
		
	}
	//Create
	@PostMapping("/create")
	public ResponseEntity<ApiResponse>createWorkExperience(@RequestPart("workExperienceTabDto") WorkExperienceTabDto workExperienceTabDto ){
    WorkExperienceTabDto createdWorkExperience = this.workExperienceTab_Service.createWorkExperience(workExperienceTabDto);		
	return new ResponseEntity<ApiResponse>(new ApiResponse("Created Successfully!!",true),HttpStatus.OK);
	}
	
	
	//Update
	@PutMapping("/{workExperienceId}")
	public ResponseEntity<ApiResponse>updateWorkExperience(@RequestPart("workExperienceTabDto") WorkExperienceTabDto workExperienceTabDto,
			@PathVariable("workExperienceId") Long workExperienceId){
		WorkExperienceTabDto updatedWorkExperience = this.workExperienceTab_Service.updateWorkExperience(workExperienceTabDto, workExperienceId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Updated Successfully!!",true),HttpStatus.OK);
		
	}
	
    //Delete
	@DeleteMapping("/{workExperienceId}")
	public ResponseEntity<ApiResponse>deleteWorkExperience(@PathVariable("workExperienceId") Long workExperienceId){
		this.workExperienceTab_Service.deleteWorkExperience(workExperienceId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Deleted Successfully!!",true),HttpStatus.OK);
		
	}
	
	

}
