import React from "react";
import JoditEditor from "jodit-react";
import { useController } from "react-hook-form";

const TextEditor = ({control, name, className, onChange}) => {
  const { field } = useController({ control, name });
  const onCh = onChange ? value => onChange({target: { value, name }}) : field.onChange;

  return <JoditEditor className={className} {...field} onChange={onCh} tabIndex={1} />;
};

export default TextEditor;
