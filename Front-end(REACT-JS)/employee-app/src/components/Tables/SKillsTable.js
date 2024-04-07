// import axios from "axios";
// import React from "react";
// import { getCurrentUserDetail } from "../../Auth";

// class SkillsTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//     };
//     this.callApi = this.callApi.bind(this);
//     this.callApi();
//   }

//   callApi() {
//     let user = getCurrentUserDetail();
//     // let userId = user.id;
//     let userId = 1;
//     // fetching data from api
//     axios
//       .get(`http://localhost:9090/api/employee/skillTab/getAll/${userId}`)
//       .then((response) => response.data)
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           list: data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   render() {
//     let tbdata = this.state.list.map((item) => {
//       return (
//         <tr key={item.id}>
//           <td>{item.skillsId}</td>
//           <td>{item.softSkills}</td>
//           <td>{item.technicalSkills}</td>
//           <td>
//             <button className="btn btn-danger">Remove</button>
//           </td>
//         </tr>
//       );
//     });
//     return (
//       <div className="container">
//         <table className="table table-striped">
//           {/* <table className="d-flex flex-column align-items-center"> */}
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Soft Skills</th>
//               <th>Technical Skills</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody>{tbdata}</tbody>
//         </table>
//       </div>
//     );
//   }
// }
// export default SkillsTable;

// // method creating a function component:trying:half working

// import { render } from "@testing-library/react";
// import axios from "axios";
// import React, { useState } from "react";
// import { getCurrentUserDetail } from "../../Auth";

// const SkillsTable = () => {
//   const [list, setList] = useState([]);

//   const callApi = () => {
//     let user = getCurrentUserDetail();
//     // let userId = user.id;
//     let userId = 1;
//     // fetching data from api
//     axios
//       .get(`http://localhost:9090/api/employee/skillTab/getAll/${userId}`)
//       .then((response) => response.data)
//       .then((data) => {
//         console.log(data);
//         setList(data);
//         console.log(list);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   let tbdata = list.map((item) => {
//     return (
//       <tr key={item.id}>
//         <td>{item.skillsId}</td>
//         <td>{item.softSkills}</td>
//         <td>{item.technicalSkills}</td>
//         <td>
//           <button className="btn btn-danger">Remove</button>
//         </td>
//       </tr>
//     );
//   });
//   return (
//     <>
//       <div className="container">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Soft Skills</th>
//               <th>Technical Skills</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody>{tbdata}</tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default SkillsTable;

// // Method 3 :trying::perfectly working code but update and delete method not working

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { getCurrentUserDetail } from "../../Auth";
// import {
//   deleteSkillsDetails,
//   updateSkillsDetails,
// } from "../../Services/SkillsTab-Service";

// export const SKillsTable = (props) => {
//   const navigate = useNavigate();
//   const [skills, setSkills] = useState([]);
//   const [deleteSkills, setDeleteSkills] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filteredSkills, setFilteredSkills] = useState([]);
//   const [buttonStatus, setButtonStatus] = useState();

//   const getSkills = async () => {
//     let user = getCurrentUserDetail();
//     // let userId = user.id;
//     let userId = 1;
//     try {
//       const response = await axios.get(
//         `http://localhost:9090/api/employee/skillTab/getAll/${userId}`
//       );
//       setSkills(response.data);
//       setFilteredSkills(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const columns = [
//     {
//       name: "Skill Id",
//       selector: (row) => row.skillsId,
//       sorttable: true,
//     },
//     {
//       name: "Soft Skills",
//       selector: (row) => row.softSkills,
//     },
//     {
//       name: "Technical Skills",
//       selector: (row) => row.technicalSkills,
//     },
//     // {
//     //   name: "Action",
//     //   cell: (row) => (
//     //     // <button className="btn btn-primary" onClick={alert(row.skillsId)}>
//     //     <button className="btn btn-primary">Edit</button>
//     //   ),
//     // },
//     {
//       name: "Update",
//       cell: (row) => (
//         // <button className="btn btn-primary" onClick={alert(row.skillsId)}>
//         <button className="btn btn-sm btn-primary" onClick={updateSkill}>
//           Update
//         </button>
//       ),
//     },
//     {
//       name: "Delete",
//       cell: (row) => (
//         <button className="btn btn-sm btn-danger" onClick={deleteSkill}>
//           Remove
//         </button>
//       ),
//     },
//   ];

//   const addMoreSkills = (event) => {
//     event.preventDefault();
//     navigate("/user/skillsTab");
//   };

//   useEffect(() => {
//     getSkills();
//   }, [buttonStatus]);

//   const updateSkill = (event) => {
//     event.preventDefault();
//     updateSkillsDetails(skills)
//       .then((data) => {
//         toast.success("Updated Successfully!");
//         // handleReset();
//         setButtonStatus("Update");
//       })
//       .catch((error) => {
//         console.log(error);
//         // setError({
//         //   errors: error,
//         //   isError: true,
//         // });
//       });
//   };

//   const deleteSkill = () => {
//     alert("Are You Sure Want to Delete this Record?");
//     let skillsId = localStorage.getItem("SkillId");
//     deleteSkillsDetails(skillsId)
//       .then((data) => {
//         toast.success("Record Deleted Successfully!");
//         setButtonStatus("Delete");

//         // handleReset();
//       })
//       .catch((error) => {
//         toast.error("Something Wrong!");
//       });
//   };

//   useEffect(() => {
//     const result = skills.filter((skill) => {
//       return skill.softSkills.toLowerCase().match(search.toLowerCase());
//     });
//     setFilteredSkills(result);
//   }, [search]);
//   return (
//     <DataTable
//       title="Skills List"
//       columns={columns}
//       data={filteredSkills}
//       pagination
//       fixedHeader
//       fixedHeaderScrollHeight="450px"
//       selectableRows
//       selectableRowsHighlight
//       highlightOnHover
//       actions={
//         <button className="btn btn-sm btn-info" onClick={addMoreSkills}>
//           Add More Skills
//         </button>
//       }
//       subHeader
//       subHeaderComponent={
//         <input
//           type="text"
//           placeholder="Search here"
//           className="w-25 form-control"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       }
//     />
//   );
// };

// Method 4: trying::
import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { getCurrentUserDetail } from "../../Auth";
import ReadOnlySkills from "./ReadOnlySkills";
import EditSkillRow from "../EditSkillRow";

export const SKillsTable = () => {
  const [skills, setSkills] = useState([]);
  const [editSkillId, setEditSkillId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    skillsId: null,
    softSkills: null,
    technicalSkills: null,
  });
  const getSkills = async () => {
    let user = getCurrentUserDetail();
    let userId = user.id;
    // let userId = 1;
    try {
      const response = await axios.get(
        `http://localhost:9090/api/employee/skillTab/getAll/${userId}`
      );
      setSkills(response.data);
      console.log(skills);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  const handleEditClick = (event, skill) => {
    event.preventDefault();
    setEditSkillId(skill.skillsId);

    const formValues = {
      skillsId: skill.skillsId,
      softSkills: skill.softSkills,
      technicalSkills: skill.technicalSkills,
    };
    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedSkill = {
      skillsId: editFormData.skillsId,
      softSkills: editFormData.softSkills,
      technicalSkills: editFormData.technicalSkills,
    };

    const newSkills = [...skills];
    const index = skills.findIndex((skill) => skill.skillsId === editSkillId);
    newSkills[index] = editedSkill;
    setSkills(newSkills);
    setEditSkillId(null);
  };

  const handleDeleteClick = (skillsId) => {
    const newSkills = [...skills];
    const index = skills.findIndex((skill) => skill.skillsId === skillsId);
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  return (
    <div className="app-container">
      SKillsTable
      <form onSubmit={handleEditFormSubmit}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Soft Skills</th>
              <th>Technical Skills</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <Fragment>
                {editSkillId === skill.skillsId ? (
                  <EditSkillRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                  />
                ) : (
                  <ReadOnlySkills
                    skill={skill}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};
