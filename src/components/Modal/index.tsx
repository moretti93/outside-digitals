import React from "react";
import "./style.less";

export interface ModalProps {
    onChange?: (value: boolean) => void;
    onClose?: () => void;
    onOpen?: () => void;
    show?: boolean;
    className?: string;
}

class Modal extends React.Component<ModalProps, React.AllHTMLAttributes<HTMLDivElement>> {
    static defaultProps = {
        show: false
    }
    handlerClose() {
        this.props.onChange?.(!this.props.show);
        this.props.onClose?.();
    }
    render() {
        const {onClose, onChange, className, children, show, ...props} = this.props;
        let rootClass = ["od-modal"];
        if(className) rootClass.push(className)
        return show && (
            <div className="od-modal-block">
                <div className="od-modal-close" onClick={() => this.handlerClose()}/>
                <div {...props} className={rootClass.join(" ")}>
                    <div className="close-btn" onClick={() => this.handlerClose()}/>
                    <div className="od-modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Object.assign(Modal, {});