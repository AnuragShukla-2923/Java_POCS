package com.employeeManagement.service.payloads;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;

//import jakarta.persistence.Column;
//import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class UserDto {
	
	private int id;
//	@Pattern(regexp = "^[a-zA-Z\\s]{4,20}$", message = "Invalid Name,must between 4 to 20 chars!!")
	@Pattern(regexp = "^[a-zA-Z ]{4,20}$",message = "Invalid Name,must between 4 to 20 chars!!")
	private String name;

	@Column(unique = true)
	@Pattern(regexp = "^(.+)@(.+)$",message = "Invalid Email('anurag.shukla@gmail.com')!!")
//	@Pattern(regexp = "^([A-Za-z0-9-_.]+@[A-Za-z0-9-_]+(?:\\.[A-Za-z0-9]+)+)$", message = "Invalid Email!!")
	private String email;
//	@Pattern(regexp = "^[a-zA-Z0-9@._#]{4,16}$", message = "Password must be in between 4 to 16 chars!!")
	@Pattern(regexp = "^[a-zA-Z0-9@._#]{4,16}$",message = "Password must be in between 4 to 16 chars!!")
	private String password;
//	@Pattern(regexp = "^[a-zA-Z\\s]{4,1000}$", message = "Invalid About")
	 @Pattern(regexp = "^[a-zA-Z ]{4,1000}$",message = "Invalid About")
	private String about;
	
	private Set<RoleDto> roles=new HashSet<>();
	
	@JsonIgnore
	public String getPassword() {
		return this.password; 
	}

}
