package com.employee.management.services;

import java.util.List;

import com.employee.management.payloads.PersonalDTO;


public interface PersonalTab_Service {
	
	PersonalDTO createPersonal(PersonalDTO Personal_tab,Integer userId);
	PersonalDTO updatePersonal(PersonalDTO Personal_tab,Long personid);
	PersonalDTO getPersonalbyId(Long Personal_tab);
	
	List<PersonalDTO>getAllPersonal();
	void deletePersonal(Long personalId);

}
