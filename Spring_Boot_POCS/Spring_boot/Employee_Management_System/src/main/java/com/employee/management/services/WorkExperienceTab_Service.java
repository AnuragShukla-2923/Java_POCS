package com.employee.management.services;

import java.util.List;

import com.employee.management.payloads.WorkExperienceTabDto;




public interface WorkExperienceTab_Service {
	WorkExperienceTabDto createWorkExperience(WorkExperienceTabDto workExperienceDto,Long pid);
	WorkExperienceTabDto updateWorkExperience(WorkExperienceTabDto workExperienceDto,Long workExperienceId);
	WorkExperienceTabDto getWorkExperiencebyId(Long workExperienceId);
	
	List<WorkExperienceTabDto>getAllWorkExperience();
	void deleteWorkExperience(Long workExperienceId);

}
