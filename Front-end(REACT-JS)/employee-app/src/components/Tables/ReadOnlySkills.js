import React from "react";
import { Button } from "reactstrap";

const ReadOnlySkills = ({ skill, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{skill.skillsId}</td>
      <td>{skill.softSkills}</td>
      <td>{skill.technicalSkills}</td>
      <td>
        <Button
          color="primary"
          type="button"
          className="btn-sm"
          onClick={(event) => handleEditClick(event, skill)}
        >
          Edit
        </Button>
        <Button
          type="button"
          className="ms-2 btn-sm"
          color="danger"
          onClick={() => handleDeleteClick(skill.skillsId)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
export default ReadOnlySkills;
