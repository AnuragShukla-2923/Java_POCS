package com.employee.management.payloads;

import java.util.Date;
//
//import com.employee.apis.validations.Age;
//import com.employee.apis.validations.BirthDate;

import com.employee.management.validations.Age;
import com.employee.management.validations.BirthDate;

import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class PersonalDTO {

	private long pid;

	@NotEmpty
	@Pattern(regexp = "^[a-zA-Z]{2,12}$", message = "Incorrect lastname,Only 2-12 letters are allowed!")
	private String firstName;
	@Pattern(regexp = "^([a-zA-Z]{2,12})$|^()$", message = "Incorrest lastname,Only 2-12 letters or blank value is allowed!")
	private String secondName;
	@Pattern(regexp = "^[a-zA-Z]{2,12}$", message = "Incorrect lastname,can be 2-12 letters only")
	private String lastName;

	@Age(message = "Age must be in between 18 to 100 years")
	private int age;

	@Temporal(TemporalType.DATE)
	@NotNull(message = "The date of birth is required.")
	@BirthDate(message = "The birth date must be in between 18 to 100 years")
	@Past(message = "The date of birth must be in the past.")
	private Date dob;

//	@Pattern(regexp = "^([FEMALE]{6})$|^([female]{6})$|^([MALE]{4})$|^([male]{4})$|^([OTHER]{5})$|^([other]{5})$", message = "Invalid gender,enter eithe all in caps or smalls('FEMALE|female')")
	@Pattern(regexp = "^([FEMALE]{6})$|^([female]{6})$|^([Female]{6})$|^([MALE]{4})$|^([male]{4})$|^([Male]{4})$|^([OTHER]{5})$|^([other]{5})$|^([Other]{5})$", message = "Invalid gender")
	private String gender;
	@NotEmpty
	@Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "Invalid Email,please give like'Anurag.Shukla@gmail.com'")
	private String emailId;
	@Pattern(regexp = "^[789]\\d{9}$", message = "Invalid Mobile no!")
	private String mobileNo;
	private String address;
	@Pattern(regexp = "^[a-zA-Z]{2,20}$", message = "Invalid City Name!")
	private String city;
	@Pattern(regexp = "^[a-zA-Z]{2,20}$", message = "Invalid Country Name!")
	private String country;
	private int pinCode;
	@Pattern(regexp = "^[789]\\d{9}$", message = "Invalid  Alternate Mobile no!")
	private String alternateMobileNo;
	@Pattern(regexp = "^[789]\\d{9}$", message = "Invalid Emergency Mobile no!")
	private String emergencyMobileNo;
	@Pattern(regexp = "^(A|B|AB|O)[+]{1}$|^(A|B|AB|O)[-]{1}$", message = "Please enter proper bloodgrp")
	private String bloodGroup;
	private boolean passport;
	@Pattern(regexp = "^[A-Z]{1}[1-9]{1}[0-9]{6}$", message = "Invalid passport Details,please give like 'A1000234'")
	private String passportDetails;

	private byte[] passportCopy;
	private boolean aadhar;
	@Pattern(regexp = "^\\d{4}\\s\\d{4}\\s\\d{4}$", message = "Invalid Aadhar Details!('2345 3456 4567' please follow this format)")
	private String aadharDetails;

	private byte[] aadharCopy;

	private boolean drivingLicense;
	@Pattern(regexp = "^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$", message = "Invalid Driving Details,please give either 'HR-0619850034761' or 'UP14 20160034761'")
	private String drivingLicenseDetails;

	private byte[] drivingLicenseCopy;

//	@Pattern(regexp = "^([UNMARRIED]{9})$|^([unmarried]{9})$|^([MARRIED]{7})$|^([married]{7})$", message = "Invalid status,give all in caps or smalls")
	@Pattern(regexp = "^([UNMARRIED]{9})$|^([unmarried]{9})$|^([Unmarried]{9})$|^([MARRIED]{7})$|^([married]{7})$|^([Married]{7})$", message = "Invalid status")
	private String maritalStatus;
	@Pattern(regexp = "^[a-zA-Z]{2,20}$", message = "Invalid Work Location!")
	private String workLocation;

}
