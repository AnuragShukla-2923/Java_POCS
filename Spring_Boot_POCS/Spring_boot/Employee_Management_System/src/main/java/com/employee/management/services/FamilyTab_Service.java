package com.employee.management.services;

import java.util.List;

import com.employee.management.payloads.FamilyTabDto;





public interface FamilyTab_Service {
	
	FamilyTabDto createFamilyDetails(FamilyTabDto familyTabDto,Long pid);
	FamilyTabDto updateFamilyDetails(FamilyTabDto familyTabDto,Long familyId);
	FamilyTabDto getFamilyDetailsbyId(Long familyId);
	
	List<FamilyTabDto>getAllFamilyDetails();
	void deleteFamilyDetails(Long familyId);

}
