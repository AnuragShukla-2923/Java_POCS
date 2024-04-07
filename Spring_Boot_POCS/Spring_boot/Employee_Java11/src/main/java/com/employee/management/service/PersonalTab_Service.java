package com.employee.management.service;

import java.util.List;

import com.employee.management.payloads.PersonalDTO;

//import com.employee.apis.payloads.PersonalDTO;

public interface PersonalTab_Service {
	
	PersonalDTO createPersonal(PersonalDTO Personal_tab);
	PersonalDTO updatePersonal(PersonalDTO Personal_tab,Long personid);
	PersonalDTO getPersonalbyId(Long Personal_tab);
	
	List<PersonalDTO>getAllPersonal();
	void deletePersonal(Long personalId);

}
