package com.employeeManagement.service.config;
//package com.employeeManagement.service.config;
//
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.*;
//import org.springframework.context.annotation.*;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;
//
//
//@Configuration
//@EnableWebSecurity
//
//public class SecurityConfig {
//	@Bean
//	public WebSecurityCustomizer webSecurityCustomizer() {
//		return (web) -> web.ignoring()
//				// Spring Security should completely ignore URLs starting with /resources/
//				.requestMatchers("/resources/**");
//	}
////
//	@SuppressWarnings("deprecation")
//	@Bean
//	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//		http.csrf().disable();
//		http.authorizeRequests().requestMatchers("//api/employee/personaltab/**").permitAll()
//				.and().authorizeRequests().requestMatchers("//api/employee/personaltab/**")
//				.hasRole("ADMIN").anyRequest().authenticated().and().httpBasic();
//		return http.build();
//	}
////	
//	@SuppressWarnings("deprecation")
//	@Bean
//	public UserDetailsService userDetailsService() {
//		UserDetails user = User.withDefaultPasswordEncoder().username("user").password("password").roles("USER")
//				.build();
//		UserDetails admin = User.withDefaultPasswordEncoder().username("admin").password("password")
//				.roles("ADMIN", "USER").build();
//		return new InMemoryUserDetailsManager(user, admin);
//	}
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//}
//
//
