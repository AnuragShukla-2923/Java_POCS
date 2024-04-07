package com.employee.management.service;

import java.util.List;

import com.employee.management.payloads.WorkExperienceTabDto;

public interface WorkExperienceTab_Service {
	
	WorkExperienceTabDto createWorkExperience(WorkExperienceTabDto workExperienceDto);
	WorkExperienceTabDto updateWorkExperience(WorkExperienceTabDto workExperienceDto,Long workExperienceId);
	WorkExperienceTabDto getWorkExperiencebyId(Long workExperienceId);
	
	List<WorkExperienceTabDto>getAllWorkExperience();
	void deleteWorkExperience(Long workExperienceId);

}
