package com.employee.management.service;

import java.util.List;

import com.employee.management.payloads.SkillTabDto;

//import com.employee.apis.payloads.SkillTabDto;

public interface SkillTab_Service {
	
	SkillTabDto createSkills(SkillTabDto Skills);
	SkillTabDto updateSkills(SkillTabDto Skills,Long skillId);
	SkillTabDto getSkillbyId(Long skillId);
	
	List<SkillTabDto>getAllSkills();
	void deleteSkill(Long skillId);

}
