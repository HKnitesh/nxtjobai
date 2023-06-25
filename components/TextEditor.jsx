import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor() {

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Editor
                // apiKey={process.env.API_KEY}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass
                                Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote
                                position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.
                            </p>"
                init={{
                    height: 500,
                    width: 590,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'bold italic underline forecolor numlist bullist alignright alignleft alignjustify aligncenter a11ycheck removeformat hyperlink outdent ',

                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </>
    );
}

