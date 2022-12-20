import React from "react";
import TextEditor from "../../../../component/text-editor";
import Button from "../../../../component/button";

const AddSection = ({ control, sections, setSections }) => {
  const changeSectionItem = (e) => {
    const {name, value, files} = e.target;
    const [_, index, type] = name.split('.');

    setSections(p => p.map((item, i) => +index === i ? {
      ...item,
      [type]: type === 'text' ? value : files[0]
    } : item))
  }

  const handleRemove = (index) => {
    setSections(p => p.filter((_, i) => i !== index));
  };

  const handleAddSection = () => {
    setSections(p => [...p, { text: '', file: null }]);
  };

  return (
    <div>
      <form>
        {sections?.map((el, index) => {
          return (
            <div key={el}>
              <input type="file" name={`sections.${index}.file`} onChange={changeSectionItem} />
              <TextEditor control={control} name={`sections.${index}.text`} onChange={changeSectionItem} />
              <Button onClick={() => handleRemove(index)}>Remove</Button>
            </div>
          );
        })}
      </form>
      <Button type="button" onClick={handleAddSection}>
        Add Section
      </Button>
    </div>
  );
};
export default AddSection;
