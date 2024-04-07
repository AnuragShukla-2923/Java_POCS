//package com.blog.apis.config;
//
//import java.util.Arrays;
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
////import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetailsService;
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
//import com.blog.apis.security.CustomUserDetailService;
//import com.blog.apis.security.JwtAuthenticationEntryPoint;
//import com.blog.apis.security.JwtAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//// helps to do role based api access
//@EnableWebMvc
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//
////public class SecurityConfig extends WebSecurityConfigurerAdapter{
//public class SecurityConfig {
////	authentication using database:->working perfectly 
////	@Autowired
////	private CustomUserDetailService customUserDetailsService;
////
////	@Override
////	protected void configure(HttpSecurity http) throws Exception {
////		http
////		.csrf().disable()
////		.authorizeHttpRequests()
////		.anyRequest().authenticated().and().httpBasic();
////	}
////
////	@Override
////	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
////		auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
////	}
////	
////	@Bean
////	public PasswordEncoder passwordEncoder() {
////		return  new BCryptPasswordEncoder();
////		
////	}
//	
////Case2:for jwt token based authentication using database	
////	@Autowired
////	private CustomUserDetailService customUserDetailsService;
////	
////	@Autowired
////	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
////	
////	@Autowired
////	private JwtAuthenticationFilter  jwtAuthenticationFilter;
////	
//
////
////	@Override
////	protected void configure(HttpSecurity http) throws Exception {
////		http
////		.csrf()
////		.disable()
////		.authorizeHttpRequests()
////		.antMatchers("/api/v1/auth/**").permitAll()
////		.antMatchers("/v3/api-docs").permitAll()  // for swagger doc
//////		.antMatchers("/api/v1/auth/login").permitAll()
////		.antMatchers(HttpMethod.GET).permitAll() // anyone can access all getmethods
////		.anyRequest().authenticated()
////		.and()
////		.exceptionHandling().authenticationEntryPoint(this.jwtAuthenticationEntryPoint)
////		.and()
////		.sessionManagement()
////		.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
////		
////		http.addFilterBefore(this.jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
////	}
////
////	@Override
////	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
////		auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
////	}
////	
////	@Bean
////	public PasswordEncoder passwordEncoder() {
////		return  new BCryptPasswordEncoder();
////		
////	}
////
////	@Bean
////	@Override
////	public AuthenticationManager authenticationManagerBean() throws Exception {
////	
////		return super.authenticationManagerBean();
////	}
//	
//	//case 2 closing
//	
//
//	//case 3 starting
//	// have taken multiple url in an array of string
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
////	@Override
////	protected void configure(HttpSecurity http) throws Exception {
////		http
////		.csrf()
////		.disable()
////		.authorizeHttpRequests()
////		.antMatchers(PUBLIC_URLS).permitAll()
////		.antMatchers(HttpMethod.GET).permitAll() // anyone can access all getmethods
////		.anyRequest().authenticated()
////		.and()
////		.exceptionHandling().authenticationEntryPoint(this.jwtAuthenticationEntryPoint)
////		.and()
////		.sessionManagement()
////		.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
////		
////		http.addFilterBefore(this.jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
////	}
//
////	@Override
////	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
////		auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
////	}
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return  new BCryptPasswordEncoder();
//		
//	}
////
////	@Bean
////	@Override
////	public AuthenticationManager authenticationManagerBean() throws Exception {
////	
////		return super.authenticationManagerBean();
////	}
//	
////	@Bean
////	public FilterRegistrationBean coresFilter() {
////		
////		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////		
////		CorsConfiguration CorsConfiguration = new CorsConfiguration();
////		CorsConfiguration.setAllowCredentials(true);
////		CorsConfiguration.addAllowedOriginPattern("*");
////	
////		CorsConfiguration.addAllowedHeader("Authorization");
////		CorsConfiguration.addAllowedHeader("Contect-Type");
////		CorsConfiguration.addAllowedHeader("Accept");
////		CorsConfiguration.addAllowedMethod("POST");
////		CorsConfiguration.addAllowedMethod("GET");
////		CorsConfiguration.addAllowedMethod("DELETE");
////		CorsConfiguration.addAllowedMethod("PUT");
////		CorsConfiguration.addAllowedMethod("OPTIONS");
////		CorsConfiguration.setMaxAge(3600L);
////		
////		source.registerCorsConfiguration("/**", CorsConfiguration);
//////		FilterRegistrationBean bean= new FilterRegistrationBean(new CorsFilter(source));  actual code
//////		FilterRegistrationBean bean= new FilterRegistrationBean(new CorsFilter((CorsConfigurationSource) source)); throwing err
////		FilterRegistrationBean bean= new FilterRegistrationBean(new CorsFilter(source));
////		return bean;
////	}
//	
////	@Bean
////	CorsConfigurationSource corsConfigurationSource() {
////	  CorsConfiguration configuration = new CorsConfiguration();
////	  configuration.setAllowedOrigins(Arrays.asList("http://localhost:8080"));
////	  configuration.setAllowedMethods(Arrays.asList("GET","POST","PATCH", "PUT", "DELETE", "OPTIONS", "HEAD"));
////	  configuration.setAllowCredentials(true);
////	  configuration.setAllowedHeaders(Arrays.asList("Authorization", "Requestor-Type"));
////	  configuration.setExposedHeaders(Arrays.asList("X-Get-Header"));
////	  configuration.setMaxAge(3600L);
////	  UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////	  source.registerCorsConfiguration("/**", configuration);
////	  return source;
////	}
//	//currently   working on this
////	@Bean
////	public FilterRegistrationBean coresFilter() {
////		
////		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////		
////		CorsConfiguration CorsConfiguration = new CorsConfiguration();
////		CorsConfiguration.setAllowCredentials(true);
////		CorsConfiguration.addAllowedOriginPattern("*");
//////		CorsConfiguration.addAllowedOriginPattern("http://localhost:3000/**");
//////		CorsConfiguration.addAllowedOrigin("http://localhost:3000/*");
//////		CorsConfiguration.addAllowedOrigin("http://localhost:3000/signup");
////	
////		CorsConfiguration.addAllowedHeader("Authorization");
////		CorsConfiguration.addAllowedHeader("Contect-Type");
////		CorsConfiguration.addAllowedHeader("Accept");
////		CorsConfiguration.addAllowedMethod("POST");
////		CorsConfiguration.addAllowedMethod("GET");
////		CorsConfiguration.addAllowedMethod("DELETE");
////		CorsConfiguration.addAllowedMethod("PUT");
////		CorsConfiguration.addAllowedMethod("OPTIONS");
////		CorsConfiguration.setMaxAge(3600L);
////		
////		source.registerCorsConfiguration("/**", CorsConfiguration);
////    	FilterRegistrationBean bean= new FilterRegistrationBean(new CorsFilter(source));
////		return bean;
////	}
//	// tried code but  not working upto our purpose
////	@Bean
////	public FilterRegistrationBean corsFilter() {
////		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////		CorsConfiguration config = new CorsConfiguration();
////		config.setAllowCredentials(true);
//////		config.addAllowedOrigin("http://domain1.com");
////		config.addAllowedOrigin("http://localhost:3000/signup.com");
////		config.addAllowedHeader("*");
////		config.addAllowedMethod("*");
////		source.registerCorsConfiguration("/**", config);
////		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
////		bean.setOrder(0);
////		return bean;
////	}
//
//	
//	//case 3 closing
//	
//	
//	
//	
//
//}
