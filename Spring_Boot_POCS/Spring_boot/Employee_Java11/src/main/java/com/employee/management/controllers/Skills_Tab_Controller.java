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
import com.employee.management.payloads.SkillTabDto;
import com.employee.management.service.SkillTab_Service;


@RestController
@RequestMapping("/api/employee/skillTab")
public class Skills_Tab_Controller {
	
	@Autowired
	private SkillTab_Service skillTab_Service;

	
	
	//getAllSkills
	@GetMapping("/getAll")
	public ResponseEntity<List<SkillTabDto>>getAllSkills(){
		List<SkillTabDto> allSkills = this.skillTab_Service.getAllSkills();
		return new ResponseEntity<List<SkillTabDto>>(allSkills,HttpStatus.OK);
	
	}
	//getSkillByid
	@GetMapping("/{skillId}")
	public ResponseEntity<SkillTabDto>getSkillById(@PathVariable("skillId")Long skillId){
		SkillTabDto skillbyId = this.skillTab_Service.getSkillbyId(skillId);
		return ResponseEntity.ok(skillbyId);
	}
	//CreateSkills
	@PostMapping("/create")
	public ResponseEntity<ApiResponse>createSkill(@RequestPart("Skills") SkillTabDto Skills){
		SkillTabDto createdSkills = this.skillTab_Service.createSkills(Skills);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Skill is created Successfully!",true),HttpStatus.OK);
	}
	
	//UpdateSkills
	@PutMapping("/{skillId}")
	public ResponseEntity<ApiResponse>updateSkill(@RequestPart("Skills") SkillTabDto Skills,@PathVariable("skillId")Long skillId){
		SkillTabDto createdSkills = this.skillTab_Service.updateSkills(Skills,skillId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Skill is created Successfully!",true),HttpStatus.OK);
	}
	
	//deleteSkills
	@DeleteMapping("/{skillId}")
	public ResponseEntity<ApiResponse>deleteSkill(@PathVariable("skillId")Long skillId){
		this.skillTab_Service.deleteSkill(skillId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Skill Deleted Successfully!!",true),HttpStatus.OK);
	}
	
}
