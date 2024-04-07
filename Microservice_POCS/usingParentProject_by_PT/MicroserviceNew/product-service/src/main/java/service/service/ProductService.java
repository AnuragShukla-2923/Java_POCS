package com.product.service.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.product.service.dto.ProductRequest;
import com.product.service.dto.ProductResponse;
import com.product.service.model.Product;
import com.product.service.repository.ProductRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {
	
	
	
	private final ProductRepository productRepository;
	
//	public ProductService(ProductRepository productRepository) {
//		this.productRepository=productRepository;
//	}
	
	public void createProduct(ProductRequest productRequest) {
		Product product = Product.builder()
				.name(productRequest.getName())
				.description(productRequest.getDescriptions())
				.price(productRequest.getPrice())
				.build();
		
		productRepository.save(product);
		log.info("Product {} is saved",product.getId());
		
	}

	public List<ProductResponse> getAllProducts() {
		List<Product> allProducts = productRepository.findAll();
		return allProducts.stream().map(this::mapToProductResponse).toList();
		
		
	}
	
	private ProductResponse mapToProductResponse(Product  product) {
		
		return ProductResponse.builder()
				.id(product.getId())
				.name(product.getName())
				.descriptions(product.getDescription())
				.price(product.getPrice())
				.build();
		
	}

}
