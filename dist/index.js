function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Input = function Input(_ref) {
  var label = _ref.label,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    name = _ref.name,
    onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    className = _ref.className;
  return React.createElement("div", {
    className: "Input " + className
  }, React.createElement("label", {
    htmlFor: name
  }, label), React.createElement("input", {
    id: name,
    type: type,
    value: value,
    name: name,
    onChange: onChange,
    placeholder: placeholder
  }));
};

var TextArea = function TextArea(_ref) {
  var label = _ref.label,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    onChange = _ref.onChange,
    className = _ref.className,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    name = _ref.name;
  return React.createElement("div", {
    className: "TextArea " + className
  }, React.createElement("label", {
    htmlFor: label
  }, label), React.createElement("textarea", {
    id: label,
    value: value,
    onChange: onChange,
    name: name,
    placeholder: placeholder
  }));
};

exports.Input = Input;
exports.TextArea = TextArea;
//# sourceMappingURL=index.js.map
