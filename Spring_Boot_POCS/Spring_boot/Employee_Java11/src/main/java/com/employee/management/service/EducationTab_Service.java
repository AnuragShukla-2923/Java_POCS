package com.employee.management.service;

import java.util.List;

import com.employee.management.payloads.EducationTabDto;
public interface EducationTab_Service {
	
	EducationTabDto createEducationDetails(EducationTabDto EducationtabDto);
	EducationTabDto updateEducationDetails(EducationTabDto EducationtabDto,Long educationalId);
	EducationTabDto getEducationDetailsbyId(Long educationalId);
	
	List<EducationTabDto>getAllEducationDetails();
	void deleteEducationDetails(Long educationalId);

}
