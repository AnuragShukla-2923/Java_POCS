package com.employeeManagement.service.services.Implementation;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.hibernate.ResourceClosedException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeeManagement.service.entities.Personal_Tab;
import com.employeeManagement.service.payloads.PersonalDTO;
import com.employeeManagement.service.repositories.PersonalTabRepo;
import com.employeeManagement.service.services.PersonalTab_Service;
import com.employeeManagement.service.exceptions.*;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Service
public class PersonalTab_Service_Implementation implements PersonalTab_Service {

	@Autowired
	private PersonalTabRepo personalRepo;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public PersonalDTO createPersonal(PersonalDTO Personal_tab) {
		Personal_Tab tab = this.dtotoPersonal(Personal_tab);
		Personal_Tab saved_tab = this.personalRepo.save(tab);

		return this.personalTODto(saved_tab);
	}

	@Override
	public PersonalDTO updatePersonal(PersonalDTO Personal_dto, Long personid) {
//Optional<Personal_tab> tab=Optional.ofNullable(this.personalRepo.findById(personid).orElseThrow(()->new ResourceNotFoundException("Person","id",personid)));
		Personal_Tab tab = this.personalRepo.findById(personid)
				.orElseThrow(() -> new ResourceNotFoundException("Person", "id", personid));
//		tab.setPid(Personal_dto.getPid());
		tab.setFirstName(Personal_dto.getFirstName());
		tab.setSecondName(Personal_dto.getSecondName());
		tab.setLastName(Personal_dto.getLastName());
		tab.setAge(Personal_dto.getAge());
		tab.setDob(Personal_dto.getDob());
		tab.setBloodGroup(Personal_dto.getBloodGroup());
		tab.setGender(Personal_dto.getGender());
		tab.setEmailId(Personal_dto.getEmailId());
		tab.setMobileNo(Personal_dto.getMobileNo());
		tab.setAddress(Personal_dto.getAddress());
		tab.setCity(Personal_dto.getCity());
		tab.setCountry(Personal_dto.getCountry());
		tab.setPinCode(Personal_dto.getPinCode());
		tab.setAlternateMobileNo(Personal_dto.getAlternateMobileNo());
		tab.setEmergencyMobileNo(Personal_dto.getEmergencyMobileNo());

		tab.setPassport(Personal_dto.isPassport());
		tab.setPassportDetails(Personal_dto.getPassportDetails());
		tab.setPassportCopy(Personal_dto.getPassportCopy());

		tab.setAadhar(Personal_dto.isAadhar());
		tab.setAadharDetails(Personal_dto.getAadharDetails());
		tab.setAadharCopy(Personal_dto.getAadharCopy());

		tab.setDrivingLicense(Personal_dto.isDrivingLicense());
		tab.setDrivingLicenseDetails(Personal_dto.getDrivingLicenseDetails());
		tab.setDrivingLicenseCopy(Personal_dto.getDrivingLicenseCopy());
		tab.setMaritalStatus(Personal_dto.getMaritalStatus());
		tab.setWorkLocation(Personal_dto.getWorkLocation());

		Personal_Tab saved_tab = this.personalRepo.save(tab);

		PersonalDTO dto1 = this.personalTODto(saved_tab);
		return dto1;
	}

	@Override
	public PersonalDTO getPersonalbyId(Long PersonalId) {
		Personal_Tab tab1 = this.personalRepo.findById(PersonalId)
				.orElseThrow(() -> new ResourceNotFoundException("Person", "Id", PersonalId));
		return this.personalTODto(tab1);
	}

	@Override
	public List<PersonalDTO> getAllPersonal() {
		List<Personal_Tab> persons = this.personalRepo.findAll();
		if (persons.size() == 0) {
			throw new ResourceNotFoundException("Record", "", 0);

		} else {
			List<PersonalDTO> personDTOs = persons.stream().map(person -> this.personalTODto(person))
					.collect(Collectors.toList());
			return personDTOs;
		}
	}

	@Override
	public void deletePersonal(Long personalId) {
		Personal_Tab person = this.personalRepo.findById(personalId)
				.orElseThrow(() -> new ResourceNotFoundException("Person", "Id", personalId));
		this.personalRepo.delete(person);
	}

	public Personal_Tab dtotoPersonal(PersonalDTO personal_Dto) {

		Personal_Tab person = new Personal_Tab();

		person.setPid(personal_Dto.getPid());
		person.setFirstName(personal_Dto.getFirstName());
		person.setSecondName(personal_Dto.getSecondName());
		person.setLastName(personal_Dto.getLastName());
		person.setAge(personal_Dto.getAge());
		person.setDob(personal_Dto.getDob());
		person.setGender(personal_Dto.getGender());
		person.setBloodGroup(personal_Dto.getBloodGroup());
		person.setEmailId(personal_Dto.getEmailId());
		person.setMobileNo(personal_Dto.getMobileNo());
		person.setAddress(personal_Dto.getAddress());
		person.setCity(personal_Dto.getCity());
		person.setCountry(personal_Dto.getCountry());
		person.setPinCode(personal_Dto.getPinCode());
		person.setAlternateMobileNo(personal_Dto.getAlternateMobileNo());
		person.setEmergencyMobileNo(personal_Dto.getEmergencyMobileNo());
		person.setPassport(personal_Dto.isPassport());
		person.setPassportDetails(personal_Dto.getPassportDetails());
		person.setMaritalStatus(personal_Dto.getMaritalStatus());
		person.setWorkLocation(personal_Dto.getWorkLocation());
		person.setAadhar(personal_Dto.isAadhar());
		person.setAadharDetails(personal_Dto.getAadharDetails());
		person.setDrivingLicense(personal_Dto.isDrivingLicense());
		person.setDrivingLicenseDetails(personal_Dto.getDrivingLicenseDetails());

		if ((personal_Dto.getPassportCopy() != null)) {
			person.setPassportCopy(personal_Dto.getPassportCopy());
		}

		if ((personal_Dto.getAadharCopy() != null)) {
			person.setAadharCopy(personal_Dto.getAadharCopy());
		}

		if ((personal_Dto.getDrivingLicenseCopy() != null)) {
			person.setDrivingLicenseCopy(personal_Dto.getDrivingLicenseCopy());
		}

		return person;
	}

	public PersonalDTO personalTODto(Personal_Tab personal_tab) {

		PersonalDTO dto = new PersonalDTO();

		dto.setPid(personal_tab.getPid());
		dto.setFirstName(personal_tab.getFirstName());
		dto.setSecondName(personal_tab.getSecondName());
		dto.setLastName(personal_tab.getLastName());
		dto.setAge(personal_tab.getAge());
		dto.setDob(personal_tab.getDob());
		dto.setGender(personal_tab.getGender());
		dto.setEmailId(personal_tab.getEmailId());
		dto.setMobileNo(personal_tab.getMobileNo());
		dto.setAddress(personal_tab.getAddress());
		dto.setBloodGroup(personal_tab.getBloodGroup());
		dto.setCity(personal_tab.getCity());
		dto.setCountry(personal_tab.getCountry());
		dto.setPinCode(personal_tab.getPinCode());
		dto.setAlternateMobileNo(personal_tab.getAlternateMobileNo());
		dto.setEmergencyMobileNo(personal_tab.getEmergencyMobileNo());
		dto.setPassport(personal_tab.isPassport());
		dto.setPassportDetails(personal_tab.getPassportDetails());
		dto.setAadhar(personal_tab.isAadhar());
		dto.setAadharDetails(personal_tab.getAadharDetails());
		dto.setDrivingLicense(personal_tab.isDrivingLicense());
		dto.setDrivingLicenseDetails(personal_tab.getDrivingLicenseDetails());
		dto.setMaritalStatus(personal_tab.getMaritalStatus());
		dto.setWorkLocation(personal_tab.getWorkLocation());

		if ((personal_tab.getPassportCopy() != null)) {
			dto.setPassportCopy(personal_tab.getPassportCopy());
		}

		if ((personal_tab.getAadharCopy() != null)) {
			dto.setAadharCopy(personal_tab.getAadharCopy());
		}

		if ((personal_tab.getDrivingLicenseCopy() != null)) {
			dto.setDrivingLicenseCopy(personal_tab.getDrivingLicenseCopy());
		}

		return dto;
	}

}
