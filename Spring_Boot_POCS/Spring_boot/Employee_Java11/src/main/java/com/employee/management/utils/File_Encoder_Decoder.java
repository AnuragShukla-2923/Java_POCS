package com.employee.management.utils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import com.employee.management.controllers.Personal_Tab_Controller;
import com.employee.management.payloads.PersonalDTO;
import com.fasterxml.jackson.databind.ObjectMapper;

public class File_Encoder_Decoder {

	private ObjectMapper mapper;
	private org.slf4j.Logger logger = LoggerFactory.getLogger(Personal_Tab_Controller.class);

	public PersonalDTO encoder(PersonalDTO personalDetails, MultipartFile[] files) throws IOException {

		String fileType = null;
		for (MultipartFile file : files) {

			// trying for blank files
			fileType = file.getOriginalFilename();
			if (fileType.equalsIgnoreCase("aadharcard1003.png") && !fileType.isBlank()) {

				personalDetails.setAadharCopy(java.util.Base64.getEncoder().encode(file.getBytes()));
//			
			} else if (fileType.equalsIgnoreCase("Anurag_ pancard.jpeg") && !fileType.isBlank()) {

				personalDetails.setDrivingLicenseCopy(java.util.Base64.getEncoder().encode(file.getBytes()));

			} else if (fileType.equalsIgnoreCase("anurag_passport.jpg") && !fileType.isBlank()) {

				personalDetails.setPassportCopy(java.util.Base64.getEncoder().encode(file.getBytes()));

			}
		}

		return personalDetails;
	}

	public PersonalDTO decoder(PersonalDTO personalDetails) throws IOException {

		if (personalDetails.getAadharCopy() != null) {
			personalDetails.setAadharCopy(java.util.Base64.getDecoder().decode(personalDetails.getAadharCopy()));
		}
		if (personalDetails.getDrivingLicenseCopy() != null) {
			personalDetails.setDrivingLicenseCopy(
					java.util.Base64.getDecoder().decode(personalDetails.getDrivingLicenseCopy()));
		}
		if (personalDetails.getPassportCopy() != null) {
			personalDetails.setPassportCopy(java.util.Base64.getDecoder().decode(personalDetails.getPassportCopy()));
		}
		return personalDetails;
	}

	public List<PersonalDTO> decoderAll(List<PersonalDTO> tdo_obj) throws IOException {

		List<PersonalDTO> updatedList = new ArrayList<>();
		for (int i = 0; i < tdo_obj.size(); i++) {
			PersonalDTO list_obj = tdo_obj.get(i);
			PersonalDTO decoded_list = decoder(list_obj);

			updatedList.add(decoded_list);
		}

		return updatedList;

	}

}
