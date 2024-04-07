package com.hotelServices.micro.exceptions;

public class ResourceNotFoundException extends RuntimeException{
	
	public ResourceNotFoundException() {
		super("Hotel Not found");
	}
	
	public ResourceNotFoundException(String s) {
		super(s);
	}
		

}
