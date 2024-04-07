package com.employee.management.services.Implementations;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entities.Education_Tab;
import com.employee.management.exceptions.ResourceNotFoundException;
import com.employee.management.payloads.EducationTabDto;
import com.employee.management.repositories.EducationTabRepo;
import com.employee.management.service.EducationTab_Service;



@Service
public class EducationTab_Service_Implementation implements EducationTab_Service {
	
	@Autowired
	private EducationTabRepo educationTabRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public EducationTabDto createEducationDetails(EducationTabDto EducationtabDto) {
		Education_Tab education_Tab = this.modelMapper.map(EducationtabDto, Education_Tab.class);
		Education_Tab saved = this.educationTabRepo.save(education_Tab);
		return this.modelMapper.map(saved, EducationTabDto.class);
	}

	@Override
	public EducationTabDto updateEducationDetails(EducationTabDto educationtabDto, Long educationalId) {
		System.out.println("Educational Details Updated");
		Education_Tab education_Tab = this.educationTabRepo.findById(educationalId).orElseThrow(()->new ResourceNotFoundException("Educational", "educationalId", educationalId));
		
		// for graduation 
		
		education_Tab.setGraduationDegreeName(educationtabDto.getGraduationDegreeName());
		education_Tab.setGraduationUniversityName(educationtabDto.getGraduationUniversityName());
		education_Tab.setGraduationCollegeName(educationtabDto.getGraduationCollegeName());
		education_Tab.setGradautionPassingYear(educationtabDto.getGradautionPassingYear());
		education_Tab.setGraduationBackLogs(educationtabDto.getGraduationBackLogs());
		educationtabDto.setGraduationBackLogsClearedIf(educationtabDto.getGraduationBackLogsClearedIf());
		education_Tab.setGraduationCGPA(educationtabDto.getGraduationCGPA());
		education_Tab.setEducationGap(educationtabDto.getEducationGap());
		education_Tab.setEducationGapDuration(educationtabDto.getEducationGapDuration());
		education_Tab.setGraduationMarkSheet(educationtabDto.getGraduationMarkSheet());
		
		
		// for post graduation
		
		
		
		education_Tab.setPostGraduationDegree(educationtabDto.getPostGraduationDegree());
		education_Tab.setPostGraduationDegreeName(educationtabDto.getPostGraduationDegreeName());
		education_Tab.setPostGraduationUniversityName(educationtabDto.getPostGraduationUniversityName());
		education_Tab.setPostGraduationCollegeName(educationtabDto.getPostGraduationCollegeName());
		education_Tab.setPostGraduationPassingYear(educationtabDto.getPostGraduationPassingYear());
		education_Tab.setPostGraduationCGPA(educationtabDto.getPostGraduationCGPA());
		education_Tab.setPostGraduationBackLogs(educationtabDto.getPostGraduationBackLogs());
		education_Tab.setPostGraduationBackLogsClearedIf(educationtabDto.getPostGraduationBackLogsClearedIf());
		education_Tab.setPostGraduationMarkSheet(educationtabDto.getPostGraduationMarkSheet());
		
		
		//for tenth standard
		education_Tab.setTenthStandard(educationtabDto.getTenthStandard());
		education_Tab.setTenthStandardSchoolName(educationtabDto.getTenthStandardSchoolName());
		education_Tab.setTenthStandardBoardName(educationtabDto.getTenthStandardBoardName());
		education_Tab.setTenthStandardPassingyear(educationtabDto.getTenthStandardPassingyear());
		education_Tab.setTenthStandardCGPA_Percentage(educationtabDto.getTenthStandardCGPA_Percentage());
		education_Tab.setTenthStandardMarkSheets(educationtabDto.getTenthStandardMarkSheets());
		
		
		//twelfth standard
		education_Tab.setTwelfthStandard(educationtabDto.getTwelfthStandard());
		education_Tab.setTwelfthStandardSchoolName(educationtabDto.getTwelfthStandardSchoolName());
		education_Tab.setTwelfthStandardBoardName(educationtabDto.getTwelfthStandardBoardName());
		education_Tab.setTwelfthStandardPassingyear(educationtabDto.getTwelfthStandardPassingyear());
		education_Tab.setTwelfthStandardCGPA_Percentage(educationtabDto.getTwelfthStandardCGPA_Percentage());
		education_Tab.setTwelfthStandardMarkSheets(educationtabDto.getTwelfthStandardMarkSheets());
		

		
		
		
		
		Education_Tab education_Tab2 = this.educationTabRepo.save(education_Tab);
		
		
		return this.modelMapper.map(education_Tab2, EducationTabDto.class);
	}

	@Override
	public EducationTabDto getEducationDetailsbyId(Long educationalId) {
		Education_Tab findById = this.educationTabRepo.findById(educationalId).orElseThrow(()->new ResourceNotFoundException("Educational", "EducationalId", educationalId));
		return this.modelMapper.map(findById, EducationTabDto.class);
	}

	@Override
	public List<EducationTabDto> getAllEducationDetails() {
		List<Education_Tab> allEducationalDetails = this.educationTabRepo.findAll();
		if(allEducationalDetails.size()==0) {
			throw new ResourceNotFoundException("Record", "", 0);
			
		}else {
		  List<EducationTabDto> listofEducationalDetails = allEducationalDetails.stream().map((educationalDetails)->this.modelMapper.map(educationalDetails, EducationTabDto.class)).collect(Collectors.toList());
			return listofEducationalDetails;
		}
		
		
	}

	@Override
	public void deleteEducationDetails(Long educationalId) {
		Education_Tab education_Tab = this.educationTabRepo.findById(educationalId).orElseThrow(()->new ResourceNotFoundException("Educational", "EducationalId", educationalId));
		this.educationTabRepo.delete(education_Tab);
		
	}

}
