import React from 'react';
import Dialog from '../lib/Dialog';

const Example = props => {
    const close = () => {
        console.log('close');
    };

    const show = () => {
        console.log('show');
    };

    return (
        <Dialog 
            title="第一个弹框" 
            onClose={close} 
            onShow={show}
            visible={true}
            style={{width: 500}}
        >
            <p>第一个dialog</p>
        </Dialog>
    );
};

export default Example;