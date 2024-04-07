package com.employee.management.services.Implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entities.Personal_Tab;
import com.employee.management.entities.WorkExperience_Tab;
import com.employee.management.exceptions.ResourceNotFoundException;
import com.employee.management.payloads.WorkExperienceTabDto;
import com.employee.management.repositories.PersonalTabRepo;
import com.employee.management.repositories.WorkExperienceTabRepo;
import com.employee.management.services.WorkExperienceTab_Service;



@Service
public class WorkExperienceTab_Service_Implementation implements WorkExperienceTab_Service {
	

	@Autowired
	private WorkExperienceTabRepo  workExperienceTabRepo;
	
	@Autowired
	private PersonalTabRepo personalTabRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public WorkExperienceTabDto createWorkExperience(WorkExperienceTabDto workExperienceDto,Long pid) {
		WorkExperience_Tab workExperience_Tab = this.modelMapper.map(workExperienceDto, WorkExperience_Tab.class);
		Personal_Tab person = this.personalTabRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Person", "PersonalId", pid));
		workExperience_Tab.setPersonalId(person);
		WorkExperience_Tab workExperience_Tab2 = this.workExperienceTabRepo.save(workExperience_Tab);
		return this.modelMapper.map(workExperience_Tab2, WorkExperienceTabDto.class);
	}

	@Override
	public WorkExperienceTabDto updateWorkExperience(WorkExperienceTabDto workExperienceDto, Long workExperienceId) {
		WorkExperience_Tab workExperience_Tab = this.workExperienceTabRepo.findById(workExperienceId)
				.orElseThrow(()->new ResourceNotFoundException("WorkExperience", "WorkExperienceID", workExperienceId));
		workExperience_Tab.setTotalWorkExperience(workExperienceDto.getTotalWorkExperience());
		workExperience_Tab.setEmployeeId(workExperienceDto.getEmployeeId());
		workExperience_Tab.setEmployerDetails(workExperienceDto.getEmployerDetails());
		workExperience_Tab.setJobTitle(workExperienceDto.getJobTitle());
		workExperience_Tab.setDatesOfEmployement(workExperienceDto.getDatesOfEmployement());
		workExperience_Tab.setJobLocation(workExperienceDto.getJobLocation());
		workExperience_Tab.setListOfResponsibilities(workExperienceDto.getListOfResponsibilities());
		workExperience_Tab.setListOfAwardsOrRecognitions(workExperienceDto.getListOfAwardsOrRecognitions());
		workExperience_Tab.setExperienceLetter(workExperienceDto.getExperienceLetter());
		WorkExperience_Tab save = this.workExperienceTabRepo.save(workExperience_Tab);
		
		return this.modelMapper.map(save, WorkExperienceTabDto.class);
	}

	@Override
	public WorkExperienceTabDto getWorkExperiencebyId(Long workExperienceId) {
		WorkExperience_Tab workExperience_Tab = this.workExperienceTabRepo.findById(workExperienceId)
				.orElseThrow(()->new ResourceNotFoundException("WorkExperince", "WorkExperinceId", workExperienceId));
		return this.modelMapper.map(workExperience_Tab, WorkExperienceTabDto.class);
	}

	@Override
	public List<WorkExperienceTabDto> getAllWorkExperience() {
		List<WorkExperience_Tab> findAll = this.workExperienceTabRepo.findAll();
		
		if(findAll.size()==0) {
			throw new ResourceNotFoundException("Record", "", 0);
		}else {
			List<WorkExperienceTabDto> collectedWorkExperiences = findAll.stream().map(workExperience->this.modelMapper.map(workExperience, WorkExperienceTabDto.class)).collect(Collectors.toList());
			return collectedWorkExperiences;
		}
		
	}

	@Override
	public void deleteWorkExperience(Long workExperienceId) {
	WorkExperience_Tab workExperience_Tab = this.workExperienceTabRepo.findById(workExperienceId)
			.orElseThrow(()->new ResourceNotFoundException("Work Experience","WorkExperienceId",workExperienceId));
	this.workExperienceTabRepo.delete(workExperience_Tab);
		
	}


}
