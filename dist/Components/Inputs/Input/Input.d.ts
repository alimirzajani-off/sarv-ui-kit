import React from 'react';
import './Input.css';
interface InputProps {
    label?: string;
    type?: string;
    value?: string | number;
    name?: string;
    onChange?: any;
    className?: string;
    placeholder?: string;
}
export declare const Input: ({ label, type, value, name, onChange, placeholder, className }: InputProps) => React.JSX.Element;
export {};
