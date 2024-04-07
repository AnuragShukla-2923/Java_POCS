package com.employeeManagement.service.config;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.info.Contact;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.service.AuthorizationScope;

@Configuration
public class SwaggerConfig {
	
	public static final String AUTHORIZATION_HEADER="Authorization";
	
	
	private ApiKey apiKeys() {
		return new ApiKey("JWT", AUTHORIZATION_HEADER, "header");
	}
	
	
	private List<SecurityContext>securityContexts(){
		return Arrays.asList(SecurityContext.builder().securityReferences(sf()).build());
	}
	
	private List<SecurityReference>sf (){
		
		AuthorizationScope scope=new AuthorizationScope("global","accessEveryThing"); 
		return Arrays.asList(new SecurityReference("JWT", new AuthorizationScope[] {scope}));
	}
	
	
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(getInfo())
				.securityContexts(securityContexts())
				.securitySchemes(Arrays.asList(apiKeys()))
				.select().apis(RequestHandlerSelectors.any()).paths(PathSelectors.any()).build();
		
		
	}

	private ApiInfo getInfo() {
		
		return new ApiInfo("Employee Management System", 
				"This project is developed by Anurag Shukla", 
				"1.0", "Terms of Service",
				new springfox.documentation.service.Contact("Anurag Shukla",
						                                    "https://www.gramenerit.com/", 
						                                    "Shuklaanu2902@gmail.com"),
				"License of APIS",
				"Api license URL",Collections.emptyList());
	}

}
