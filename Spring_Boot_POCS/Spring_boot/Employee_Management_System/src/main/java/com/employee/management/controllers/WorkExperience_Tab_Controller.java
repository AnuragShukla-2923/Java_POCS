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
import org.springframework.web.bind.annotation.RestController;

import com.employee.management.payloads.ApiResponse;
import com.employee.management.payloads.WorkExperienceTabDto;
import com.employee.management.services.WorkExperienceTab_Service;


@RestController
@RequestMapping("/api/employee/workExperienceTab")
public class WorkExperience_Tab_Controller {
	
	@Autowired
	private WorkExperienceTab_Service workExperienceTab_Service;
	
	//getById
	@GetMapping("/{workExperienceId}")
	public ResponseEntity<WorkExperienceTabDto>getById(@PathVariable("workExperienceId")Long workExperienceId){
		WorkExperienceTabDto workExperiencebyId = this.workExperienceTab_Service.getWorkExperiencebyId(workExperienceId);
		return new ResponseEntity<WorkExperienceTabDto>(workExperiencebyId,HttpStatus.OK);
	}
	//getAll
	@GetMapping("/getAll")
	public ResponseEntity<List<WorkExperienceTabDto>>getAllWorkExperience(){
		List<WorkExperienceTabDto> allWorkExperience = this.workExperienceTab_Service.getAllWorkExperience();
		return new ResponseEntity<List<WorkExperienceTabDto>>(allWorkExperience,HttpStatus.OK);
	}
	//create
	@PostMapping("/create/{pid}")
	public ResponseEntity<WorkExperienceTabDto>createWorkExperience(@RequestBody WorkExperienceTabDto experienceTabDto
			,@PathVariable Long pid){
		WorkExperienceTabDto createdWorkExperience = this.workExperienceTab_Service.createWorkExperience(experienceTabDto,pid);
		return new ResponseEntity<WorkExperienceTabDto>(createdWorkExperience,HttpStatus.CREATED);
		
	}
	
    //update
	@PutMapping("/{workExperienceId}")
	public ResponseEntity<ApiResponse>updateWorkExperience(@RequestBody WorkExperienceTabDto experienceTabDto,
			@PathVariable Long workExperienceId){
		WorkExperienceTabDto updatedWorkExperience = this.workExperienceTab_Service.updateWorkExperience(experienceTabDto, workExperienceId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Work Experience Updated",true),HttpStatus.OK);
	}
	
	//deletebyId
	@DeleteMapping("/{workExperienceId}")
	public ResponseEntity<ApiResponse>deleteById(@PathVariable("workExperienceId") Long workExperienceId){
		this.workExperienceTab_Service.deleteWorkExperience(workExperienceId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Delete Successfully!!",true),HttpStatus.OK);
				
	}
	

}
