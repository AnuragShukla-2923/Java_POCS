// const { useState } = require("react");

// const skillList = () => {
//   const [skills, setSkills] = useState({});
//   return;

//   <div>
//     <h2 className="text-center">List of Skills</h2>
//     <br />
//     <div className="row">
//       <table>
//         <thead>
//           <tr>
//             <th>Skill Ids</th>
//             <th>Soft Skills</th>
//             <th>Technical Skills</th>
//           </tr>
//         </thead>
//         <tbody>
//           {skills.map((skill) => (
//             <tr key={skill.skill_id}>
//               <td>{skill.list_of_soft_skills}</td>
//               <td>{skill.list_of_technical_skills}</td>
//               {/* <td>{skill.skills}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>;
// };

// method 2:

import React, { useState, useEffect } from "react";
// import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 600 },
];

const SkillsList = () => {
  const [tableData, setTableData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((data) => data.json())
  //       .then((data) => setTableData(data));
  //   }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/employee/skillTab/getAll`)
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <div style={{ height: 700, width: "100%" }}>
      {/* <DataGrid rows={tableData} columns={columns} pageSize={12} /> */}
    </div>
  );
};

export default SkillsList;
