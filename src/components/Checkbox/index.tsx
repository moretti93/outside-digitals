import React from "react";
import "./style.less";

export interface CheckboxProps {
    disabled?: boolean;
    onChange?: (value?: boolean, event?: React.ChangeEvent) => void;
    checked?: boolean;
}

export default class Button extends React.Component<CheckboxProps, React.ButtonHTMLAttributes<HTMLButtonElement>> {
    render() {
        const {onChange, children, ...props} = this.props;
        let rootClass = ["od-checkbox"];
        return (
            <input {...props} type={"checkbox"} className={rootClass.join(" ")} onChange={e => onChange?.(e.target.checked, e)}/>
        );
    }
}