package com.employee.management.security;

import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter  extends OncePerRequestFilter{
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtTokenHelper jwtTokenHelper;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
	//1.get token
		String requestToken =request.getHeader("Authorization");
		
    //Bearer	23455644545vfgfgf
		System.out.println(requestToken);
		
		String userName=null;
		String token=null;
		
		
		if(requestToken!=null&& requestToken.startsWith("Bearer")) {
			
			 token = requestToken.substring(7);
			try {
			userName = this.jwtTokenHelper.getUserNameFromToken(token);
			}
			catch(IllegalArgumentException e) {
				System.out.println("Unable to get jwt token");
			}
			catch(ExpiredJwtException e) {
				System.out.println("Token has expired");
			}
			catch(MalformedJwtException e) {
				System.out.println("Invalid token");
			}
		}else
		{
			System.out.println("jwt token doesn't begin with Bearer");
		}
		
		//Once we got the token ,now will validate
		if(userName!=null && SecurityContextHolder.getContext().getAuthentication()==null) {
			
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(userName);	
			
			if(this.jwtTokenHelper.validateToken(token, userDetails)) {
				//sab kuchh sahi chal raha
				//authentication karna hai
				
UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));	

SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
			}
			else {
				System.out.println("Invalid jwt token");
			}
			
			
		}else
		{
			System.out.println("Username is null or context is not null");
		}
		filterChain.doFilter(request, response);
		
		
	}

}
