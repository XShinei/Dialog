import React, { useCallback, useEffect, useState } from 'react';
import Mask from './Mask';

interface DialogProps {
    title: string;
    visible?: boolean;
    onShow?: () => void;
    onClose?: () => void;
}

const Dialog: React.FC<DialogProps> = props => {
    const { title, visible, onShow, onClose, children, } = props;
    const [internalVisible, setInternalVisible] = useState(visible);
    const display = visible ? 'block' : 'none';
    const style = {display: display};

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
        <div className="modal rc-dialog" style={style}>
            <Mask visible={internalVisible}/>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button onClick={hide} type="button" className="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title">{ title }</h4>
                    </div>
                    <div className="modal-body">{ children }</div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;