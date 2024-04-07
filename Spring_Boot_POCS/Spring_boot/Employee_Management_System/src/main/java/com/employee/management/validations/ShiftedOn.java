package com.employee.management.validations;

import jakarta.validation.Payload;

public @interface ShiftedOn {
	
    //	error Messages
	String message() default("com.employee.apis.validations.ShiftedOn.message");
	
	
	// represents group of Contraints
	Class <?> [] groups() default{};
	
	// additional info about annotations 
    Class <? extends Payload > [] payloads() default{};
	

	
	

}
