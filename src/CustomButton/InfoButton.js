const { AiFillInfoCircle} = require("react-icons/ai")

const InfoButton = ({
    children,
    inverted,
    ...otherProps
}) => {
    return (
        <button
        className='infoknapp'
        {...otherProps}
        >
            <AiFillInfoCircle size='1.5em'/>
        </button>
               
     );
}
 
export default InfoButton;