//isLoggedIn=>

export const isLoggedIn=()=>{
  let data=localStorage.getItem("data");
 if(data!=null) return true;
 else return false;
 };



//doLogin=>data=>set to localStorage
export const doLogin=(data,next)=>{
localStorage.setItem("data",JSON.stringify(data));
next();

}

//doSavePersonalId to localStorage

export const doSavePersonalId=(data,next)=>{
  localStorage.setItem("PersonalDetailId",JSON.stringify(data.pid));
  next();
}

//getting Personal Id
export const getCurrentPid=()=>{
  if(isLoggedIn()){
    return JSON.parse(localStorage.getItem("PersonalDetailId")).pid;
  }else{
    return null;
  }
}



//doLogout=>remove from localstorage
export const doLogout=(next)=>{
localStorage.removeItem("data");
localStorage.removeItem("AccommodationId");
localStorage.removeItem("SalaryId");
localStorage.removeItem("PersonalDetailId");
localStorage.removeItem("EducationalId");
localStorage.removeItem("FamilyId");
localStorage.removeItem("SkillId");
localStorage.removeItem("WorkExperienceId");

next();

};


//getCurrentUser

export const getCurrentUserDetail=()=>{
if(isLoggedIn()){
    return JSON.parse(localStorage.getItem("data")).user;
}else{
return false;

}
};

//getcurrentToken
export const getCurrentToken=()=>{
  if(isLoggedIn()){
      return JSON.parse(localStorage.getItem("data")).token;
  }else{
  return null;
  
  }
  };


  //saving SkillsId to LocalStorage
  export const doSaveSkillId=(data,next)=>{
    localStorage.setItem("SkillId",JSON.stringify(data.skillsId));
    next();
  }


  //Saving EducationalId to LocalStorage
  export const doSaveEducationalId=(data,next)=>{
    localStorage.setItem("EducationalId",JSON.stringify(data.educationId));
    next();
  }

  //Saving FamilyId to LocalStorage
  export const doSaveFamilyId=(data,next)=>{
    localStorage.setItem("FamilyId",JSON.stringify(data.familyId));
    next();
  }

  //Saving AccommodationId to Localstorage
  export const doSaveAccommodationId=(data,next)=>{
    localStorage.setItem("AccommodationId",JSON.stringify(data.accommodationId));
    next();
  }

  //saving WorkExperienceid to LocalStorage
  export const doSaveWorkExperienceId=(data,next)=>{
    localStorage.setItem("WorkExperienceId",JSON.stringify(data.workExperienceId));
    next();
  }

  //Saving SalaryId to LocalStorage
  export const doSaveSalaryId=(data,next)=>{
    localStorage.setItem("SalaryId",JSON.stringify(data.salaryId));
    next();
  }