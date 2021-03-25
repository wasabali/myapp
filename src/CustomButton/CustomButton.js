import './CustomButton.css';
const CustomButton = ({
    children,
    inverted,
    ...otherProps
}) => {
    return (
        <button
        className={`${inverted ? 'yellow': ''} custom-button`}
        {...otherProps}
        >
        {children}
        </button>
               
     );
}
 
export default CustomButton;