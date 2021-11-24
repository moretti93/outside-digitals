import React from "react";
import "./style.less";

export interface ButtonProps {
    type?: "default" | "text" | "outline";
    size?: "middle" | "small" | "large";
    outline?: boolean;
    disabled?: boolean;
    block?: boolean;
    onClick?: () => void;
}

export default class Button extends React.Component<ButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement>> {
    static defaultProps = {
        type: "default",
        size: "middle"
    }
    render() {
        const {type, size, block, ...props} = this.props;
        let rootClass = ["od-btn", `od-btn-${type}`, `od-btn-${size}`];
        if(block) rootClass.push("od-btn-block");
        return (
            <button {...props} className={rootClass.join(" ")}/>
        );
    }
}