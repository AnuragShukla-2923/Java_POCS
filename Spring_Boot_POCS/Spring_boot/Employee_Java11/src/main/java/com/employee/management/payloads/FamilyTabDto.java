package com.employee.management.payloads;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class FamilyTabDto {
	

	
	private long familyId;
	@NotEmpty
	private String fathersName;
	@NotEmpty
	private String fathersOccupation;
	@NotEmpty
	private String mothersName;
	@NotEmpty
	private String mothersOccupation;
	@NotEmpty
	private Boolean marriedIf;
	private String partnerName;
	private String partnersOccupation;
	private Boolean childrenIf;
	private Integer noOfChildrens;

}
