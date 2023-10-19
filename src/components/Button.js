/**
 * Reusable button component that is used throughout the code
 * @param {*} params -> onClickHandler and children prop for unique text
 * @returns jsx for button
 * @author ShaAnder
 */
export default function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
