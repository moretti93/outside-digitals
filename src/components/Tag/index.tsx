import React from "react";
import "./style.less";

export interface TagProps {
    disabled?: boolean;
    selected?: boolean;
    onChange?: (value: boolean) => void;
}

export default class Button extends React.Component<TagProps, React.AllHTMLAttributes<HTMLDivElement>> {
    static defaultProps = {
        selected: false
    }
    render() {
        const {onChange, selected, disabled, ...props} = this.props;
        let rootClass = ["od-tag"];
        if(selected) rootClass.push("od-tag-selected");
        if(disabled) rootClass.push("od-tag-disabled");
        return (
            <div {...props} className={rootClass.join(" ")} onClick={() => !disabled && onChange?.(!selected)}/>
        );
    }
}