package com.employee.management.payloads;

import java.util.Date;
import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class AccommodationTabDto {
	
	
	private Long accommodationId;
	@NotNull
	@AssertTrue
	private Boolean accommodationGivenByCompany;
	private String flatNo;
	@NotEmpty(message = "Please Provide Complete Postal Address")
	private String completePostalAddress;
	private String ContactDetails;
	@com.employee.management.validations.ShiftedOn
	private Date ShiftedOn;
	private Date RelievedOn;
	private String durationOfTime;
	@NotEmpty(message = "Please Enter monthly Rent")
	private String monthlyRent;
	private String miscellaneousChargesIfAny;
	private String anyIssueIf;

}
