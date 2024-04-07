package com.blog.apis.services.Implementations;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blog.apis.entities.Category;
//import com.blog.apis.entites.Category;
import com.blog.apis.exceptions.ResourceNotFoundException;
import com.blog.apis.payloads.CategoryDto;
import com.blog.apis.repositories.CategoryRepo;
import com.blog.apis.services.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepo categoryRepo;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public CategoryDto createCategory(CategoryDto categoryDto) {
		Category category = this.modelMapper.map(categoryDto, Category.class);
		Category added_cat = this.categoryRepo.save(category);
		return this.modelMapper.map(added_cat, CategoryDto.class);
	}

	@Override
	public CategoryDto updateCategory(CategoryDto categoryDto, Integer categoryId) {
	Category category = this.categoryRepo.findById(categoryId).orElseThrow(()-> new ResourceNotFoundException("Category", "ID", categoryId));
	category.setCategoryTitle(categoryDto.getCategoryTitle());
	category.setCategoryDescriptions(categoryDto.getCategoryDescriptions());
	Category Updated_cat = this.categoryRepo.save(category);
	return this.modelMapper.map(Updated_cat, CategoryDto.class);
	}

	@Override
	public void deleteCategory(Integer categoryId) {
	Category catgory=this.categoryRepo.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category", "Category id", categoryId));
		this.categoryRepo.delete(catgory);
	}

	@Override
	public List<CategoryDto> getCategories() {
		List<Category> allCategoy = this.categoryRepo.findAll();
		List<CategoryDto> catogryDTOS = allCategoy.stream().map((category)->
		this.modelMapper.map(category, CategoryDto.class)).collect(Collectors.toList());
		return catogryDTOS;
	}

	@Override
	public CategoryDto getCategory(Integer categoryId) {
		Category cat = this.categoryRepo.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category","Category id", categoryId));
		return this.modelMapper.map(cat, CategoryDto.class);
	}

}
