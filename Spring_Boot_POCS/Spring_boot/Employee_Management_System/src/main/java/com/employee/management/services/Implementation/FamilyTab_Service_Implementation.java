package com.employee.management.services.Implementation;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.management.entities.Family_Tab;
import com.employee.management.entities.Personal_Tab;
import com.employee.management.exceptions.ResourceNotFoundException;
import com.employee.management.payloads.FamilyTabDto;
import com.employee.management.repositories.FamilyTabRepo;
import com.employee.management.repositories.PersonalTabRepo;
import com.employee.management.services.FamilyTab_Service;



@Service
public class FamilyTab_Service_Implementation implements FamilyTab_Service {

	@Autowired
	private FamilyTabRepo familyTabRepo;
	
	@Autowired
	private PersonalTabRepo  personalTabRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public FamilyTabDto createFamilyDetails(FamilyTabDto familyTabDto,Long pid) {
		Family_Tab family_Tab = this.modelMapper.map(familyTabDto, Family_Tab.class);
		Personal_Tab person = this.personalTabRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Person", "PersonalId", pid));
		family_Tab.setPersonalId(person);
		Family_Tab family_Tab2 = this.familyTabRepo.save(family_Tab);
		
		return this.modelMapper.map(family_Tab2, FamilyTabDto.class);
	}

	@Override
	public FamilyTabDto updateFamilyDetails(FamilyTabDto familyTabDto, Long familyId) {
		Family_Tab family_Tab = this.familyTabRepo.findById(familyId).orElseThrow(()->new ResourceNotFoundException("Family", "FamilyId", familyId));
		family_Tab.setFathersName(familyTabDto.getFathersName());
		family_Tab.setFathersOccupation(familyTabDto.getFathersOccupation());
		family_Tab.setMothersName(familyTabDto.getMothersName());
		family_Tab.setMothersOccupation(familyTabDto.getMothersOccupation());
		family_Tab.setMarriedIf(familyTabDto.getMarriedIf());
		family_Tab.setPartnerName(familyTabDto.getPartnerName());
		family_Tab.setChildrenIf(familyTabDto.getChildrenIf());
		family_Tab.setNoOfChildrens(familyTabDto.getNoOfChildrens());
		
		Family_Tab updated_family = this.familyTabRepo.save(family_Tab);
		
		return this.modelMapper.map(updated_family, FamilyTabDto.class);
	}

	@Override
	public FamilyTabDto getFamilyDetailsbyId(Long familyId) {
		Family_Tab family_Tab = this.familyTabRepo.findById(familyId).orElseThrow(()->new ResourceNotFoundException("Family", "FamilyId", familyId));
		return this.modelMapper.map(family_Tab, FamilyTabDto.class);
	}

	@Override
	public List<FamilyTabDto> getAllFamilyDetails() {
		List<Family_Tab> allFamilyDetails = this.familyTabRepo.findAll();
		if(allFamilyDetails.size()==0) {
			throw new ResourceNotFoundException("Record", "", 0);
			
		}else {
			List<FamilyTabDto> collectedList = allFamilyDetails.stream().map((familyDetail)->this.modelMapper.map(familyDetail, FamilyTabDto.class)).collect(Collectors.toList());
			return collectedList;
		}
		
	}

	@Override
	public void deleteFamilyDetails(Long familyId) {
	Family_Tab family_Tab = this.familyTabRepo.findById(familyId).orElseThrow(()->new ResourceNotFoundException("Family","FamilyId", familyId));
    this.familyTabRepo.delete(family_Tab);	
	}


}
