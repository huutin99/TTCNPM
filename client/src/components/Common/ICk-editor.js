import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const IEditor = ({ value = "", onChange }) => {
    const triggerChange = (changedValue) => {
        if (onChange) {
            onChange(changedValue);
        }
    };
    return (

        <CKEditor editor={ClassicEditor}
            data={value}
            onChange={(event, editor) => {
                triggerChange(editor.getData());
            }} />
    );
};

export default IEditor;