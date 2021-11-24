import React from "react";
import "./style.less";

export interface InputProps {
    title?: string;
    error?: string;
    disabled?: boolean;
    block?: boolean;
    placeholder?: string;
    value?: any;
    onChange?: (value?: string, event?: React.ChangeEvent) => void;
}

export default class Button extends React.Component<InputProps, React.InputHTMLAttributes<HTMLInputElement>> {
    render() {
        const {onChange, title, error, block, ...props} = this.props;
        let rootClass = ["od-input"];
        if(block) rootClass.push("od-input-block");
        if(error) rootClass.push("od-input-error");
        return (
            <div className="od-input-group">
                <p className="title">{title}</p>
                <input {...props} className={rootClass.join(" ")} onChange={e => onChange?.(e.target.value, e)}/>
                <p className="error-text">{error}</p>
            </div>
        );
    }
}