
const MyButton = ({ text, isIcon, iconClass, bgColor, isIconBg}) => {
  return (
    <button className={`${bgColor ? bgColor : 'bg-dark'}  border-0 text-light p-2   `}  >
      {text || "Click Me"}
      {isIcon ? (
        <i className={`${ iconClass ||  "fa-solid fa-arrow-right"} ${isIconBg? 'bg-danger':''}  `}></i>
      ) : (
        ""
      )}




    </button>
  );
};

export default MyButton;
