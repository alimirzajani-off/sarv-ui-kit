import React from 'react';

const Input = ({
  label,
  type: _type = 'text',
  value: _value = '',
  name,
  onChange,
  placeholder: _placeholder = '',
  className
}) => {
  return React.createElement("div", {
    className: `Input ${className}`
  }, React.createElement("label", {
    htmlFor: name
  }, label), React.createElement("input", {
    id: name,
    type: _type,
    value: _value,
    name: name,
    onChange: onChange,
    placeholder: _placeholder
  }));
};

const TextArea = ({
  label,
  value: _value = '',
  onChange,
  className,
  placeholder: _placeholder = '',
  name
}) => {
  return React.createElement("div", {
    className: `TextArea ${className}`
  }, React.createElement("label", {
    htmlFor: label
  }, label), React.createElement("textarea", {
    id: label,
    value: _value,
    onChange: onChange,
    name: name,
    placeholder: _placeholder
  }));
};

export { Input, TextArea };
//# sourceMappingURL=index.modern.js.map
