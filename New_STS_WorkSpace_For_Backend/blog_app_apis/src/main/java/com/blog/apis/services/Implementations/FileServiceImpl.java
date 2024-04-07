package com.blog.apis.services.Implementations;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.blog.apis.services.FileService;
@Service
public class FileServiceImpl implements FileService {

	@Override
	public String uploadImage(String path, MultipartFile file) throws IOException {
		//file name
		String file_name=file.getOriginalFilename();
		//random name generate file
		String randomID=UUID.randomUUID().toString();
		String fileName1=randomID.concat(file_name.substring(file_name.lastIndexOf(".")));
		
		//FullPath
		String filePath=path + File.separator + fileName1;
		
		//create folder if not created 
		File f=new File(path);
		if(!f.exists()) {
			f.mkdir();
		}
		
		//filecopy
		Files.copy(file.getInputStream(), Paths.get(filePath));
		
		return file_name;
	}

	@Override
	public InputStream getResource(String path, String fileName) throws FileNotFoundException {
		String fullPath=path+File.separator+fileName;
		InputStream is=new FileInputStream(fullPath);
		return is;
	}

}
