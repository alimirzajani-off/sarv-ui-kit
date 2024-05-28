import React from 'react';
import './TextArea.css';
interface TextAreaProps {
    label?: string;
    value?: string | number;
    name?: string;
    onChange?: any;
    className?: string;
    placeholder?: string;
}
export declare const TextArea: ({ label, value, onChange, className, placeholder, name }: TextAreaProps) => React.JSX.Element;
export {};
