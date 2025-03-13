import React from 'react';
import './ToastComponent.css';

interface ToastComponentProps {
    message: string;
    type: 'danger' | 'success' | 'attention';
}

const ToastComponent: React.FC<ToastComponentProps> = ({ message, type }) => {
    return (
        <>
            <div className="toast-container mx-1">
                <div className={`flash ${type}`}>{message}</div>
            </div>
        </>
    );
};

export default ToastComponent;