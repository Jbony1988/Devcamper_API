import React from "react";
import PropTypes from "prop-types";

const ManageReviewTable = ({ name, rating }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{rating}</td>
      <td>
        <a href="add-review.html" class="btn btn-secondary">
          <i class="fas fa-pencil-alt"></i>
        </a>
        <button class="btn btn-danger">
          <i class="fas fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

ManageReviewTable.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default ManageReviewTable;
