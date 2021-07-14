import React from 'react';

const Mask = props => {
    const { visible } = props;
    const cls = 'modal-backdrop modal-mask ';
    const showCls = visible ? 'fade in' : 'fade';
    const display = visible ? 'block' : 'none';
    const style: React.CSSProperties = {display};
    const combinedCls = cls + showCls;


    if (display) {
        style.height = Math.max(window.screen.height, document.body.offsetHeight);
    }

    return (
        <div className={combinedCls} style={style} />
    );
};

export default Mask;