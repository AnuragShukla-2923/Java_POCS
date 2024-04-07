package com.employee.management.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class SkillTabDto {
	
    
	
	private long SkillsId;
	private Integer softSkillsCounter=0;
//	@Column(name = "listOfSoftSkills",length = 100000)
	private String softSkills;
	
	
	private Integer technicalSkillsCounter=0;
//	@Column(name = "listOfTechnicalSkills",length = 100000)
	private String technicalSkills;

}
