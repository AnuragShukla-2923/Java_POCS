package com.employee.management.services;

import java.util.List;

import com.employee.management.payloads.SkillTabDto;




public interface SkillTab_Service {
	
	SkillTabDto createSkills(SkillTabDto Skills,Long pid);
	SkillTabDto updateSkills(SkillTabDto Skills,Long skillsId);
	SkillTabDto getSkillbyId(Long skillsId);
	
	List<SkillTabDto>getAllSkills();
	void deleteSkill(Long skillsId);

}
