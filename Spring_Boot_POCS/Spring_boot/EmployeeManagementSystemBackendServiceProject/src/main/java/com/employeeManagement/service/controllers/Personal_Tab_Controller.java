package com.employeeManagement.service.controllers;

import org.springframework.http.MediaType;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.employeeManagement.service.payloads.ApiResponse;
import com.employeeManagement.service.payloads.PersonalDTO;
import com.employeeManagement.service.services.PersonalTab_Service;
import com.employeeManagement.service.utils.File_Encoder_Decoder;

//import jakarta.validation.Valid;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/employee/personaltab")
public class Personal_Tab_Controller {

	@Autowired
	private PersonalTab_Service personal_service;
	@Autowired
	private ObjectMapper mapper;
	File_Encoder_Decoder encoder_obj=new File_Encoder_Decoder();
	private org.slf4j.Logger logger = LoggerFactory.getLogger(Personal_Tab_Controller.class);

	

	@GetMapping("/getAll")
	public ResponseEntity<List<PersonalDTO>> getAllPersons() throws IOException {
		List<PersonalDTO> tdo_obj= this.personal_service.getAllPersonal();
		List<PersonalDTO> tdo_obj1=this.encoder_obj.decoderAll(tdo_obj);
		return new ResponseEntity<List<PersonalDTO>>(tdo_obj1,HttpStatus.OK);

		

	}

	@GetMapping("/{personId}")
	public ResponseEntity<PersonalDTO> getSinglePerson(@PathVariable("personId") Long Pid) throws IOException {
        PersonalDTO tab= this.personal_service.getPersonalbyId(Pid);
		PersonalDTO tab1= this.encoder_obj.decoder(tab);
		return ResponseEntity.ok(tab1);
	}


	
	@PostMapping(path = "/add", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE,
			MediaType.APPLICATION_JSON_VALUE }, headers = { "Accept=application/json" })

	private ResponseEntity<ApiResponse> createPerson(@Valid @RequestPart("json") PersonalDTO personalDetails,
			@RequestPart(name = "files", required = true) MultipartFile[] files) throws IOException {

		this.logger.info("Add user request");
		logger.info("personalDetail:{}", personalDetails);

		personalDetails = this.encoder_obj.encoder(personalDetails, files);
		this.personal_service.createPersonal(personalDetails);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Person Created Successfull!",true),HttpStatus.CREATED);

	}
	

	@PutMapping(path = "/{personId}", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE,
			MediaType.APPLICATION_JSON_VALUE }, headers = { "Accept=application/json" })
	public ResponseEntity<ApiResponse> updatePerson(@Valid @RequestPart("json") PersonalDTO personalDetails,
			@PathVariable("personId") Long personid,
			@RequestPart(name = "files", required = true) MultipartFile[] files) throws Exception {

		personalDetails = this.encoder_obj.encoder(personalDetails, files);
		this.personal_service.updatePersonal(personalDetails, personid);

		return new ResponseEntity<ApiResponse>(new ApiResponse("Person updated Successfully!", true), HttpStatus.OK);

	}

	@DeleteMapping("/{personId}")
	public ResponseEntity<ApiResponse> deleteperson(@PathVariable("personId") Long pId) {
		this.personal_service.deletePersonal(pId);
		return new ResponseEntity<ApiResponse>(new ApiResponse("Person Deleted Successfully", true), HttpStatus.OK);

	}


}
