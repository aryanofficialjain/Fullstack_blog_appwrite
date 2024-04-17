import React from 'react';
import { Controller } from 'react-hook-form'; // Import Controller from react-hook-form
import { Editor } from '@tinymce/tinymce-react';

const RTE = ({
    name, control, label, defaultValue = ""
}) => {
    return (
        <div className='w-full'>
            {
                label && <label className='inline-block mb-1 pl-1 '>{label}</label>
            }

            <Controller name={name || "content"} control={control} render={({ field: { onChange, value } }) => ( // Changed `fileId` to `field`
                <Editor
                    initialValue={defaultValue}
                    init={{
                        branding: false,
                        height: 500,
                        menubar: true,
                        plugins: [
                            'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                            'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
                            'media', 'table', 'emoticons', 'help'
                        ],
                        toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                            'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                            'forecolor backcolor emoticons | help',

                        content_style: "body { font-family: Helvetica, Arial, sans-serif; font-size:14px}"
                    }}
                    onEditorChange={onChange}
                />
            )} />
        </div>
    )
}

export default RTE;
