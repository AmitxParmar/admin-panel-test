import React, { useEffect, useRef, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'

type Props = {}

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})
const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: ["var(--font-inter)"] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]

function QuillEditor() {
    return (
        
            <QuillNoSSRWrapper formats={formats} style={{minHeight:"fit"}} className='max-w-full max-h-full h-full' />
        
    )
}

export default QuillEditor