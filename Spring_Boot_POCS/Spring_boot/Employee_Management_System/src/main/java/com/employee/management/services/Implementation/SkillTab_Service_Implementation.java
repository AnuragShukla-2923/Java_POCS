package com.employee.management.services.Implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entities.Personal_Tab;
import com.employee.management.entities.Skill_Tab;
import com.employee.management.exceptions.ResourceNotFoundException;
import com.employee.management.payloads.SkillTabDto;
import com.employee.management.repositories.PersonalTabRepo;
import com.employee.management.repositories.SkillTabRepo;
import com.employee.management.services.SkillTab_Service;



@Service
public class SkillTab_Service_Implementation implements SkillTab_Service{
	

	@Autowired
	private SkillTabRepo  skillTabRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private PersonalTabRepo personalTabRepo;
	
	@Override
	public SkillTabDto createSkills(SkillTabDto skillsDto,Long pid) {
		Personal_Tab personal = this.personalTabRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Person", "PersonId", pid));
		
		Skill_Tab skill_Tab = this.modelMapper.map(skillsDto, Skill_Tab.class);
		skill_Tab.setPersonalId(personal);
		Skill_Tab saved_skills = this.skillTabRepo.save(skill_Tab);
		
		return this.modelMapper.map(saved_skills,SkillTabDto.class);
	}

	@Override
	public SkillTabDto updateSkills(SkillTabDto Skills, Long skillsId) {
	Skill_Tab skill_Tab = this.skillTabRepo.findById(skillsId).orElseThrow(()->new ResourceNotFoundException("Skill", "SkillId", skillsId));
	skill_Tab.setSoftSkills(Skills.getSoftSkills());
	skill_Tab.setTechnicalSkills(Skills.getTechnicalSkills());
	skill_Tab.setSoftSkillsCounter(Skills.getSoftSkillsCounter());
	skill_Tab.setTechnicalSkillsCounter(Skills.getSoftSkillsCounter());
	

	Skill_Tab updatedSkills = this.skillTabRepo.save(skill_Tab);
	
	return this.modelMapper.map(updatedSkills, SkillTabDto.class);
	}

	@Override
	public SkillTabDto getSkillbyId(Long skillsId) {
		Skill_Tab skill = this.skillTabRepo.findById(skillsId).orElseThrow(()->new ResourceNotFoundException("Skill", "SkillID", skillsId));
		return this.modelMapper.map(skill, SkillTabDto.class);
	}

	@Override
	public List<SkillTabDto> getAllSkills() {
		List<Skill_Tab> allSkills = this.skillTabRepo.findAll();
		if(allSkills.size()==0) {
			throw new ResourceNotFoundException("Record", "", 0);
		}else {
			List<SkillTabDto> collectedSkills = allSkills.stream().map(skill->this.modelMapper.map(skill, SkillTabDto.class)).collect(Collectors.toList());
			return collectedSkills;
		}
		
	}

	@Override
	public void deleteSkill(Long skillsId) {
		Skill_Tab skill_Tab = this.skillTabRepo.findById(skillsId).orElseThrow(()->new ResourceNotFoundException("Skill", "Skillid", skillsId));
		this.skillTabRepo.delete(skill_Tab);
	}


}
