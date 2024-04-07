package com.employee.management.payloads;

import java.util.Date;



import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
public class AccommodationTabDto {
	
	private Long accommodationId;
//	@NotNull
//	@AssertTrue
	private Boolean accommodationGivenByCompany;
	private String flatNo;
//	@NotEmpty(message = "Please Provide Complete Postal Address")
	private String completePostalAddress;
//	@Pattern(regexp = "^[789]\\d{9}$", message = "Invalid Contact No!")
	private String contactDetails;
//	@ShiftedOn
//	private Date shiftedOn;
//	private Date relievedOn;
	
	
	private String shiftedOn;
	private String relievedOn;
	private String durationOfTime;
//	@NotEmpty(message = "Please Enter monthly Rent")
	private String monthlyRent;
	private String miscellaneousChargesIfAny;
	private String anyIssueIf;

}
