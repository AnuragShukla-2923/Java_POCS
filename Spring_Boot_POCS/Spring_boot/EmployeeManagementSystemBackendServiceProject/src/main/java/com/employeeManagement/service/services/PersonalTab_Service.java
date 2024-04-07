package com.employeeManagement.service.services;

import java.util.List;

import com.employeeManagement.service.payloads.PersonalDTO;

public interface PersonalTab_Service {
	
	PersonalDTO createPersonal(PersonalDTO Personal_tab);
	PersonalDTO updatePersonal(PersonalDTO Personal_tab,Long personid);
	PersonalDTO getPersonalbyId(Long Personal_tab);
	
	List<PersonalDTO>getAllPersonal();
	void deletePersonal(Long personalId);

}
