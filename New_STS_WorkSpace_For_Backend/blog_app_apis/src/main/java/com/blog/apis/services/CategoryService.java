package com.blog.apis.services;

import java.util.List;

import com.blog.apis.payloads.CategoryDto;
import com.blog.apis.repositories.CategoryRepo;

public interface CategoryService {
	
	public CategoryDto createCategory(CategoryDto categoryDto);
	public CategoryDto updateCategory(CategoryDto categoryDto,Integer categoryId);
	public void deleteCategory(Integer categoryId);
	      List<CategoryDto>getCategories();
           CategoryDto getCategory(Integer categoryId);
}
