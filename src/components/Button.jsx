import PropTypes from "prop-types";

/**
 * @typedef ButtonProps
 *
 * @property {"primary" | "danger"} variant
 * @property {React.ReactNode} textBox
 * @property {func} onClick
 */

/**
 *
 * @param {React.PropsWithChildren<ButtonProps>} props
 */

const Button = ({ variant, textBox, onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {textBox}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "danger"]).isRequired,
  textBox: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
