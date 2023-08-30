import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef FilterOptionProps
 *
 * @property {string} label Nhãn input
 * @property {string} value Giá trị ô input
 * @property {string} checked
 */

/**
 *
 * Hiển thị checkbox lọc danh sách
 *
 * @param {FilterOptionProps} props
 */

const FilterOption = ({
  label,
  value,
  checked,
  className,
  onChange,
  type,
}) => {
  return (
    <div className="filter-option">
      <label>
        <input
          type={type}
          value={value}
          className={className}
          name="filter-option"
          checked={checked}
          onChange={(e) => onChange(e.target.value)}
        />
        {label}
      </label>
    </div>
  );
};

FilterOption.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default FilterOption;
