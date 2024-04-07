package com.blog.apis.controllers;

import java.util.List;

//import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blog.apis.payloads.ApiResponse;
import com.blog.apis.payloads.CategoryDto;
import com.blog.apis.services.CategoryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	
	@PostMapping("/")
	public ResponseEntity<CategoryDto>createCategory(@Valid @RequestBody CategoryDto categoryDto){
		 CategoryDto createCategory = this.categoryService.createCategory(categoryDto); 
		return new ResponseEntity<CategoryDto>(createCategory,HttpStatus.CREATED);
	}
	
	@PutMapping("/{categoryId}")
	public ResponseEntity<CategoryDto>updateCategory(@Valid @RequestBody CategoryDto categoryDto,@PathVariable("categoryId") Integer categoryId){
		 CategoryDto updatedCategory = this.categoryService.updateCategory(categoryDto,categoryId); 
		return new ResponseEntity<CategoryDto>(updatedCategory,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/{categoryId}")
	public ResponseEntity<ApiResponse>deleteCategory(@PathVariable("categoryId") Integer categoryId){
		 this.categoryService.deleteCategory(categoryId); 
		return new ResponseEntity<ApiResponse>(new ApiResponse("Category Delete successfully",true),HttpStatus.OK);
	}
	
	@GetMapping("/{categoryId}")
	public ResponseEntity<CategoryDto>getCategory(@PathVariable("categoryId") Integer categoryId){
		 CategoryDto categoryDto = this.categoryService.getCategory(categoryId); 
		return new ResponseEntity<CategoryDto>(categoryDto,HttpStatus.OK);
	}
	
	//get all catogory
	@GetMapping("/")
	public ResponseEntity<List<CategoryDto>>getCategories(){
	List<CategoryDto>categoryDtos = this.categoryService.getCategories(); 
//		return new ResponseEntity<List<CategoryDto>>(categoryDtos,HttpStatus.OK);
	return  ResponseEntity.ok(categoryDtos);
	}

}
