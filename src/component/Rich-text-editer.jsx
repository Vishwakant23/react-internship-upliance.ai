import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from 'react'

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'size': [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {list:"ordered"},
      {list:"bullet"},
      {indent:"-1"},
      {indent:"+1"},
    ],
    ["link", "image", "video"]
  ],
};

const RichtextEditor = () => {
  const [value, setValue] = useState("");

  const handleChange = (content) => {
    setValue(content);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='editor'>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={handleChange}
            className="editor-input"
            modules={modules}
          />
        </div>
        {/* <div className='preview'>{value}</div> */}
      </div>
    </div>
  )
}

export default RichtextEditor;
