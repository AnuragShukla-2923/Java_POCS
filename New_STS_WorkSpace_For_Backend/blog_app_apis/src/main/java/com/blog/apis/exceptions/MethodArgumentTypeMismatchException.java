package com.blog.apis.exceptions;

public class MethodArgumentTypeMismatchException extends RuntimeException{
	String resourceName;
	String fieldName;
	long fieldValue;
	public MethodArgumentTypeMismatchException(String resourceName, String fieldName, long fieldValue) {
		super(String.format("%s not found with %s:%s", resourceName,fieldName,fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;

}
}