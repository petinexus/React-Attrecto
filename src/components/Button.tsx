import React from "react";

interface MyProps {
    click: () => void,
    className?: string
}

function Button(props: React.PropsWithChildren<MyProps>) {
    if (props.className == null) {
        return <button onClick={props.click} className="btn btn-primary">{props.children}</button>
    } else {
        return <button onClick={props.click} className={props.className}>{props.children}</button>
    }
}

export default Button;