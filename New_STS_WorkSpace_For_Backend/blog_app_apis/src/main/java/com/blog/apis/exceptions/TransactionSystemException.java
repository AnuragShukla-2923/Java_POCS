package com.blog.apis.exceptions;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class TransactionSystemException {
	String resourceName;
	String fieldName;
	long fieldValue;
	public TransactionSystemException(String resourceName, String fieldName, long fieldValue) {
		super();
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}

}
