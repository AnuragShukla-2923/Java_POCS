package com.employee.management.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class SalaryTabDto {
	
	private long salaryId;
	private String totolCTC;
	private String bankName;
	private String bankAddress;
	private String accountNo;
	private String ifscCode;

}
