//package com.employee.management.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.web.servlet.FilterRegistrationBean;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
////import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.CorsFilter;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//
//import com.employeeManagement.service.security.CustomUserDetailService;
//import com.employeeManagement.service.security.JwtAuthenticationEntryPoint;
//import com.employeeManagement.service.security.JwtAuthenticationFilter;
//
//
//
//
//
//@Configuration
//@EnableWebSecurity
//// helps to do role based api access
//@EnableWebMvc
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//public class JwtSecurityConfig_With_DB extends WebSecurityConfigurerAdapter {
//	
//	
//	@Autowired
//	private CustomUserDetailService customUserDetailsService;
//	
//	@Autowired
//	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
//	
//	@Autowired
//	private JwtAuthenticationFilter  jwtAuthenticationFilter;
//	
//	public static final String[] PUBLIC_URLS= {
//			"/api/v1/auth/**",
//			"/v3/api-docs",
//			"/v2/api-docs",
//			"/swagger-resources/**",
//			"/swagger-ui/**",
//			"/webjars/**"
//	};
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http
//		.csrf()
//		.disable()
//		.authorizeHttpRequests()
//		.antMatchers(PUBLIC_URLS).permitAll()
//		.antMatchers(HttpMethod.GET).permitAll()
////		.antMatchers(HttpMethod.GET).permitAll() // anyone can access all getmethods
//		.anyRequest().authenticated()
//		.and()
//		.exceptionHandling().authenticationEntryPoint(this.jwtAuthenticationEntryPoint)
//		.and()
//		.sessionManagement()
//		.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//		
//		http.addFilterBefore(this.jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
//	}
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
//	}
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return  new BCryptPasswordEncoder();
//		
//	}
//
//	@Bean
//	@Override
//	public AuthenticationManager authenticationManagerBean() throws Exception {
//	
//		return super.authenticationManagerBean();
//	}
//	
//	@Bean
//	public FilterRegistrationBean coresFilter() {
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		CorsConfiguration corsConfiguration = new CorsConfiguration();
//		corsConfiguration.setAllowCredentials(true);
//		corsConfiguration.addAllowedOriginPattern("*");
//		corsConfiguration.addAllowedHeader("Authorization");
//		corsConfiguration.addAllowedHeader("Content-Type");
//		corsConfiguration.addAllowedHeader("Accept");
//		corsConfiguration.addAllowedMethod("POST");
//		corsConfiguration.addAllowedMethod("PUT");
//		corsConfiguration.addAllowedMethod("DELETE");
//		corsConfiguration.addAllowedMethod("GET");
//		corsConfiguration.addAllowedMethod("OPTIONS");
//		corsConfiguration.setMaxAge(3600L);
//		
//		source.registerCorsConfiguration("/**", corsConfiguration);
//		FilterRegistrationBean bean= new FilterRegistrationBean(new CorsFilter(source));
//		return bean;	
//	}
//
//
//}
