package com.employee.management.services.Implementations;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entities.Skill_Tab;
import com.employee.management.exceptions.ResourceNotFoundException;
import com.employee.management.payloads.SkillTabDto;
import com.employee.management.repositories.SkillTabRepo;
import com.employee.management.service.SkillTab_Service;


@Service
public class SkillTab_Service_Implementation implements SkillTab_Service{

	
	@Autowired
	private SkillTabRepo  skillTabRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public SkillTabDto createSkills(SkillTabDto SkillsDto) {
		Skill_Tab skill_Tab = this.modelMapper.map(SkillsDto, Skill_Tab.class);
		Skill_Tab saved_skills = this.skillTabRepo.save(skill_Tab);
		return this.modelMapper.map(saved_skills,SkillTabDto.class);
	}

	@Override
	public SkillTabDto updateSkills(SkillTabDto Skills, Long skillId) {
	Skill_Tab skill_Tab = this.skillTabRepo.findById(skillId).orElseThrow(()->new ResourceNotFoundException("Skill", "SkillId", skillId));
	skill_Tab.setSoftSkills(Skills.getSoftSkills());
	skill_Tab.setTechnicalSkills(Skills.getTechnicalSkills());
	skill_Tab.setSoftSkillsCounter(Skills.getSoftSkillsCounter());
	skill_Tab.setTechnicalSkillsCounter(Skills.getSoftSkillsCounter());

	Skill_Tab updatedSkills = this.skillTabRepo.save(skill_Tab);
	
	return this.modelMapper.map(updatedSkills, SkillTabDto.class);
	}

	@Override
	public SkillTabDto getSkillbyId(Long skillId) {
		Skill_Tab skill = this.skillTabRepo.findById(skillId).orElseThrow(()->new ResourceNotFoundException("Skill", "SkillID", skillId));
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
	public void deleteSkill(Long skillId) {
		Skill_Tab skill_Tab = this.skillTabRepo.findById(skillId).orElseThrow(()->new ResourceNotFoundException("Skill", "Skillid", skillId));
		this.skillTabRepo.delete(skill_Tab);
	}

}
