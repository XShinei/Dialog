import React, { useCallback, useEffect, useState } from 'react';
import Mask from './Mask';
import '../assets/bootstrap.less';

interface DialogProps {
    title: string;
    visible?: boolean;
    style?: React.CSSProperties;
    onShow?: () => void;
    onClose?: () => void;
}

const Dialog: React.FC<DialogProps> = props => {
    const { title, visible, style, onShow, onClose, children, } = props;
    const [internalVisible, setInternalVisible] = useState(visible);

    const show = useCallback(() => {
        setInternalVisible(true);
        onShow && onShow();
    }, [onShow]);

    const hide = useCallback(() => {
        setInternalVisible(false);
        onClose && onClose();
    }, [onClose]);

    useEffect(() => {
        visible ? show() : hide();
    }, [visible, show, hide]);

    return (
        <div className="rc-dialog-wrap">
            <Mask visible={internalVisible}/>
            <div className="rc-dialog" style={style}>
                <div className="rc-dialog-content">
                    <div className="rc-dialog-header">
                        <a tabIndex={0} onClick={hide} className="rc-dialog-close">
                            <span className="rc-dialog-close-x">x</span>
                        </a>
                        <h4 className="rc-dialog-title">{ title }</h4>
                    </div>
                    <div className="rc-dialog-body">{ children }</div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;