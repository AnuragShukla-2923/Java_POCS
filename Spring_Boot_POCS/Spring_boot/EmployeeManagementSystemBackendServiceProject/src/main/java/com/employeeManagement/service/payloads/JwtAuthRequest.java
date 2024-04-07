package com.employeeManagement.service.payloads;

import lombok.Data;

@Data
public class JwtAuthRequest {

	private String username;
	private String password;
}
