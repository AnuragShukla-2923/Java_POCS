package com.employee.management.service;

import java.util.List;

import com.employee.management.payloads.FamilyTabDto;

//import com.employee.apis.payloads.FamilyTabDto;

public interface FamilyTab_Service {
	
	
	FamilyTabDto createFamilyDetails(FamilyTabDto familyTabDto);
	FamilyTabDto updateFamilyDetails(FamilyTabDto familyTabDto,Long familyId);
	FamilyTabDto getFamilyDetailsbyId(Long familyId);
	
	List<FamilyTabDto>getAllFamilyDetails();
	void deleteFamilyDetails(Long familyId);

}
