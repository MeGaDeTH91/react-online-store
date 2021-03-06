import React from "react";
import { Dropdown } from "react-bootstrap";

const CategoryDropdownItem = ({ category }) => {
  return (
      <Dropdown.Item eventKey={category._id}>{category.title}</Dropdown.Item>
  );
};

export default CategoryDropdownItem;
