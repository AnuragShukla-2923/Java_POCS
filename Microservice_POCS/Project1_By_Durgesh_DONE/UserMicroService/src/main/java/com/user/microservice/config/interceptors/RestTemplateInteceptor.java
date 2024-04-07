package com.user.microservice.config.interceptors;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.security.oauth2.client.OAuth2AuthorizeRequest;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientManager;

public class RestTemplateInteceptor implements ClientHttpRequestInterceptor {

	private OAuth2AuthorizedClientManager manager;

	private Logger logger = LoggerFactory.getLogger(RestTemplateInteceptor.class);

	public RestTemplateInteceptor(OAuth2AuthorizedClientManager manager) {
		super();
		this.manager = manager;
	}

	@Override
	public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution)
			throws IOException {
		String token = manager.authorize(
				OAuth2AuthorizeRequest.withClientRegistrationId("my-internal-client").principal("internal").build())
				.getAccessToken().getTokenValue();

		logger.info("Resttemplate Interceptor: Token :{}", token);
		request.getHeaders().add("Authorization", "Bearer" + token);

		return execution.execute(request, body);
	}

}
