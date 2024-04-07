package com.employee.management.exceptions;

import java.net.ConnectException;
import java.sql.SQLTransientConnectionException;
import java.util.HashMap;
import java.util.Map;

import org.hibernate.exception.JDBCConnectionException;
import org.modelmapper.internal.bytebuddy.asm.Advice.OffsetMapping.ForOrigin.Renderer.ForReturnTypeName;
import org.springframework.dao.DataAccessResourceFailureException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.transaction.CannotCreateTransactionException;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

import com.employee.management.payloads.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	//when any user id is not present
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ApiResponse> resourceNotFoundExceptionHandler(ResourceNotFoundException ex) {
		String message = ex.getMessage();
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_FOUND);
	}

	
	//works when entity validation fails
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String, String>> handleMethodArgsNotValidException(MethodArgumentNotValidException ex) {
		Map<String, String> resp = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String defaultMessage = error.getDefaultMessage();
			resp.put(fieldName, defaultMessage);

		});
		return new ResponseEntity<Map<String, String>>(resp, HttpStatus.BAD_REQUEST);
	}

	// trying these:=> in-process

	@ExceptionHandler(CannotCreateTransactionException.class)
	public ResponseEntity<ApiResponse> cannotCreateTransactionExceptionHandler(CannotCreateTransactionException ex) {
		String message = "Database is not working or may be connection broken";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.SERVICE_UNAVAILABLE);

	}

	@ExceptionHandler(TransactionSystemException.class)
	public ResponseEntity<ApiResponse> transactionSystemExceptionHandler(TransactionSystemException ex) {
		String message = "Database is not working";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.SERVICE_UNAVAILABLE);

	}

	@ExceptionHandler(HttpRequestMethodNotSupportedException.class)
	public ResponseEntity<ApiResponse> httpRequestMethodNotSupportedExceptionHandler(
			HttpRequestMethodNotSupportedException ex) {
		String message = ex.getMessage();
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_FOUND);

	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<ApiResponse> dataIntegrityViolationExceptionHandler(DataIntegrityViolationException ex) {
		String message = "Primary key error";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}

	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<ApiResponse> httpMessageNotReadableExceptionHandler(HttpMessageNotReadableException ex) {
		String message = "Invalid Input in json Data";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}

	@ExceptionHandler(MethodArgumentTypeMismatchException.class)
	public ResponseEntity<ApiResponse> methodArgumentTypeMismatchExceptionHandler(
			MethodArgumentTypeMismatchException ex) {
		String message = "Invalid Aurgument type";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
	
	
	// when media type is not valid:json data is not sent
	
	@ExceptionHandler(HttpMediaTypeNotSupportedException.class)
	public ResponseEntity<ApiResponse> HttpMediaTypeNotSupportedExceptionHandler(
			HttpMediaTypeNotSupportedException ex) {
		String message = "Only json datatype is supported  ";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
	
	// when multi part file is missing:
	
		@ExceptionHandler(MissingServletRequestPartException.class)
		public ResponseEntity<ApiResponse> missingServletRequestPartExceptionHandler(
				MissingServletRequestPartException ex) {
			String message = "Please send multipart files also";
			ApiResponse apiResponse = new ApiResponse(message, false);
			return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
		}
	
	// if username and password is wrong
	@ExceptionHandler(ApiException.class)
	public ResponseEntity<ApiResponse> apiExceptionHandler(ApiException ex) {
		String message = ex.getMessage();
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.BAD_REQUEST);

		// trying these:=> in-process

	}
	// for all database connection errors:not working all
	
	  
//	@ExceptionHandler(DataAccessResourceFailureException.class)
//	public ResponseEntity<ApiResponse> dataAccessResourceFailureExceptionHandler(
//			DataAccessResourceFailureException ex) {
//		String message = "Database connection failure";
//		ApiResponse apiResponse = new ApiResponse(message, false);
//		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
//	}
	
	// for all database connection errors
	@ExceptionHandler(org.springframework.dao.DataAccessResourceFailureException.class)
	public ResponseEntity<ApiResponse> dataAccessResourceFailureExceptionHandler(
			DataAccessResourceFailureException ex) {
		String message = "Database connection failure";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler(org.hibernate.exception.JDBCConnectionException.class)
	public ResponseEntity<ApiResponse> JDBCConnectionExceptionHandler(
			JDBCConnectionException ex) {
		String message = "Database connection failure";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler(java.sql.SQLTransientConnectionException.class)
	public ResponseEntity<ApiResponse> sQLTransientConnectionExceptionHandler(
			SQLTransientConnectionException ex) {
		String message = "Database connection failure";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
	


	
	@ExceptionHandler(java.net.ConnectException.class)
	public ResponseEntity<ApiResponse> connectExceptionHandler(
			ConnectException ex) {
		String message = "Database connection failure";
		ApiResponse apiResponse = new ApiResponse(message, false);
		return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.NOT_ACCEPTABLE);
	}
	


}
