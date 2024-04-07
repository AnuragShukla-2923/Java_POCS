package com.employeeManagement.service.payloads;

import lombok.Data;

@Data
public class JwtAuthResponse {
	
	private String token;
	
	private UserDto user;

}
