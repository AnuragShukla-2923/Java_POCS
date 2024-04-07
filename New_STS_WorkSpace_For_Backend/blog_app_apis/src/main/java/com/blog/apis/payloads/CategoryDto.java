package com.blog.apis.payloads;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter

public class CategoryDto {

	private Integer id;
    @NotBlank
    @Size(min = 4,message = "tile must not less than 4 chars!!")
	private String categoryTitle;
    @Size(min = 10,message = "tile must not less than 10 chars!!")
	private String categoryDescriptions;

}
