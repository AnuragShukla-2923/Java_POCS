package com.employeeManagement.service.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenHelper {

	private static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
	private String secret = "jwtTokenKey";

//	
//	//retrieve user name from jwt token
//	public String getUserNameFromToken(String token) {
//		return getClaimFromToken(token,Claims::getSubject);
//		
//	}
//	
//	
//	//retrieve expiration date 	from jwt token
//	public Date getExpirationDateFromToken(String token) {
//		return getClaimFromToken(token,Claims::getExpiration);
//	}
//	
//	
//	public <T>T getClaimFromToken(String token,Function<Claims,T>claimsResolver){
//		final Claims claims=getAllClaimsFromToken(token);
//		return claimsResolver.apply(claims);
//	}
//
//	
//	//for retrieving any information from token we will need the secret key
//	
//	private Claims getAllClaimsFromToken(String token) {
//		return Jwts.parser().setSigningKey(secret).parsePlaintextJws(token).getBody();
//	}
//	
//	//check if token is expired or not
//	private Boolean isTokenExpired(String token) {
//		final Date expiration=getExpirationDateFromToken(token);
//		return expiration.before(new Date());
//	}
//	
//	//generate token for user
//	public String generateToken(UserDetails userDetails) {
//		Map<String,Objects>claims=new HashMap<>();
//		return doGenerateToken(claims,userDetails.getUsername());
//	}
//	
//
//	private String doGenerateToken(Map<String, Objects> claims, String subject) {
//	return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date())
//		.setExpiration(new Date(System.currentTimeMillis()+JWT_TOKEN_VALIDITY *100))
//		.signWith(SignatureAlgorithm.HS512,secret).compact();	
//		return null;
//	}
//	
//	//validate Token
//	public Boolean validateToken(String token,UserDetails userDetails) {
//		final String userName=getUserNameFromToken(token);
//		return (userName.equals(userDetails.getUsername())&&!isTokenExpired(token));
//	}

//	mwthod2
//
//	//retrieve user name from jwt token
//	public String getUserNameFromToken(String token) {
//		return getClaimFromToken(token,Claims::getSubject);
//		
//	}
//	
//	
//	//retrieve expiration date 	from jwt token
//	public Date getExpirationDateFromToken(String token) {
//		return getClaimFromToken(token,Claims::getExpiration);
//	}
//	
//	
//	public <T>T getClaimFromToken(String token,Function<Claims,T>claimsResolver){
//		final Claims claims=getAllClaimsFromToken(token);
//		return claimsResolver.apply(claims);
//	}
//
//	
//	//for retrieving any information from token we will need the secret key
//	
//	private Claims getAllClaimsFromToken(String token) {
//		return Jwts.parser().setSigningKey(secret).parsePlaintextJws(token).getBody();
//	}
//	
//	//check if token is expired or not
//	private Boolean isTokenExpired(String token) {
//		final Date expiration=getExpirationDateFromToken(token);
//		return expiration.before(new Date());
//	}
//	
//	//generate token for user
//	public String generateToken(UserDetails userDetails) {
//		Map<String,Objects>claims=new HashMap<>();
//		return doGenerateToken(claims,userDetails.getUsername());
//	}
//	
//
//	private String doGenerateToken(Map<String, Objects> claims, String subject) {
//	return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date())
//		.setExpiration(new Date(System.currentTimeMillis()+JWT_TOKEN_VALIDITY *100))
//		.signWith(SignatureAlgorithm.HS512,secret).compact();	
//		return null;
//	}
//	
//	//validate Token
//	public Boolean validateToken(String token,UserDetails userDetails) {
//		final String userName=getUserNameFromToken(token);
//		return (userName.equals(userDetails.getUsername())&&!isTokenExpired(token));
//	}

//	method3

	public String getUserNameFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}

	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}

	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}

	private Claims getAllClaimsFromToken(String token) {

		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
	}
	
	private Boolean isTokenExpired(String token) {
		final Date expiration=getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}
     public String generateToken(UserDetails userDetails) {
    	 Map<String, Object>claims=new HashMap<>();
    	 return doGenerateToken(claims,userDetails.getUsername());
     }

	private String doGenerateToken(Map<String, Object> claims, String username) {
		
		return Jwts
				.builder()
				.setClaims(claims)
				.setSubject(username)
				.setIssuedAt(new Date())
			.setExpiration(new Date(System.currentTimeMillis()+JWT_TOKEN_VALIDITY * 100))	
			.signWith(SignatureAlgorithm.HS512, secret)
			.compact();	
				
	}
	
	public Boolean validateToken(String token,UserDetails userDetails) {
		final String username=getUserNameFromToken(token);
		return (username.equals(userDetails.getUsername())&&!isTokenExpired(token));
		
	}
}
