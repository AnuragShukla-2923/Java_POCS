package com.employee.management.payloads;



import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class SkillTabDto {
	
	private long skillsId;
	private Integer softSkillsCounter=0;
//    @NotEmpty(message ="Must not be empty")
    @Pattern(regexp = "^[a-zA-Z ]{2,100}$",message = "Invalid softSkills")
	private String softSkills;
	
	
	private Integer technicalSkillsCounter=0;
//    @NotEmpty(message = "Technical Skills can't be empty")
	 @Pattern(regexp = "^[a-zA-Z ]{2,100}$",message = "Invalid technicalSkills")
	private String technicalSkills;

}
