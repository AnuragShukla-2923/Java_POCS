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
import com.employee.management.payloads.SalaryTabDto;
import com.employee.management.service.SalaryTab_Service;


@RestController
@RequestMapping("/api/employee/SalaryTab")
public class Salary_Tab_Controller {
	
	
	@Autowired
	private SalaryTab_Service salaryTab_Service;
	
	//getAll
	
	@GetMapping("/getAll")
	public ResponseEntity<List<SalaryTabDto>>getAllSalary(){
		List<SalaryTabDto> allSalary = this.salaryTab_Service.getAllSalary();
		return new ResponseEntity<List<SalaryTabDto>>(allSalary,HttpStatus.OK);
		
	}
	
	//getbyId
	@GetMapping("/{salaryId}")
	public ResponseEntity<SalaryTabDto>getById(@PathVariable("salaryId") Long  salaryId){
		SalaryTabDto salarybyId = this.salaryTab_Service.getSalarybyId(salaryId);
		return new ResponseEntity<SalaryTabDto>(salarybyId,HttpStatus.OK);
	}
	
	//create
//	@PostMapping("/create")
//	public ResponseEntity<ApiResponse>createSalary(@RequestPart("salaryTabDto") SalaryTabDto salaryTabDto){
//		SalaryTabDto createdSalary = this.salaryTab_Service.createSalary(salaryTabDto);
//		return new ResponseEntity<ApiResponse>(new ApiResponse("Salary Details Created Successfully!!",true),HttpStatus.OK);
//	}
	
	
	@PostMapping("/create")
	public ResponseEntity<SalaryTabDto>createSalary(@RequestPart SalaryTabDto salaryTabDto){
		SalaryTabDto createdSalary = this.salaryTab_Service.createSalary(salaryTabDto);
		return new ResponseEntity<SalaryTabDto>(createdSalary,HttpStatus.OK);
	}
	
	//update
	@PutMapping("/{salaryId}")
	public ResponseEntity<ApiResponse>updateSalaryDetails(@RequestPart("salaryTabDto") SalaryTabDto salaryTabDto,
			@PathVariable("salaryId") Long salaryId){
		SalaryTabDto updatedSalary = this.salaryTab_Service.updateSalary(salaryTabDto, salaryId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Salary Details Updated Successfully !!",true),HttpStatus.OK);
		
	}
	
	//Delete
	@DeleteMapping("/{salaryId}")
	public ResponseEntity<ApiResponse>deleteById(@PathVariable("salaryId") Long salaryId){
		this.salaryTab_Service.deleteSalary(salaryId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Deleted Successfully !!",true),HttpStatus.OK);
		
	}
	
	
	
	

}
