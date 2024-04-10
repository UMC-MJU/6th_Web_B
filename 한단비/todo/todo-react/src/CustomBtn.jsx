import React from "react";

const CustomBtn = (props) => {
    const {onClick, children, buttonColor} = props;
    return (
        <button
            style={{backgroundColor: buttonColor}}
            onClick={onClick} // 중괄호 2개하면 객체로 인식함 ..
            className="Button"
            >
            {children}
        </button>
    )
}

export default CustomBtn;