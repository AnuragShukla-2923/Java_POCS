import React from "react";
import { Button, Input } from "reactstrap";

const EditSkillRow = (editFormData, handleEditFormChange) => {
  return (
    <tr>
      <td contentEditable="true">
        {/* <input
          type="select"
          id="softSkills"
          //   readOnly
          //  onChange={handleEditFormChange} */}
        {editFormData.skillsId}
        {/* /> */}
      </td>

      <td>
        <Input
          type="select"
          id="softSkills"
          onChange={handleEditFormChange}
          value={editFormData.softSkills}
        >
          <option>--Select Soft Skills--</option>
          <option value="Good Communication">Good Communication</option>
          <option value="Problem Solving">Problem Solving</option>
          <option value="Time Management">Time Management</option>
          <option value="Critical Thinking">Critical Thinking</option>
          <option value="Decision-making">Decision-making</option>
          <option value="Organizational">Organizational</option>
          <option value="Stress management">Stress management</option>
          <option value="Adaptability">Adaptability</option>
          <option value="Conflict management">Conflict management</option>
          <option value="Leadership">Leadership</option>
          <option value="Creativity">Creativity</option>
          <option value="Resourcefulness">Resourcefulness</option>
        </Input>
      </td>

      <td>
        <Input
          type="select"
          id="technicalSkills"
          onChange={handleEditFormChange}
          value={editFormData.technicalSkills}
        >
          <option>--Select Technical Skills--</option>
          <option value="Java">Java</option>
          <option value="C">C language</option>
          <option value="C++">C++</option>
          <option value="Python">Python</option>
          <option value="Devops">Devops</option>
          <option value="React">React-js</option>
          <option value="Fullstack">Fullstack</option>
          <option value="IBM_ACE">IBM ACE</option>
          <option value="IBM_BPM">IBM BPM</option>
          <option value="Cloud Engineer">Cloud Engineer</option>
          <option value="java-microservices">Java-Microservices</option>
          <option value="Android">Android</option>
          <option value="Machine-learning">Machine Learning</option>
        </Input>
      </td>
      <td>
        <Button type="submit">Save</Button>
      </td>
    </tr>
  );
};
export default EditSkillRow;
