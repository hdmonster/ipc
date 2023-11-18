import React, { useState, useRef } from 'react'
import './DragDropFile.css'

// drag drop file component
const DragDropFile = ({ handleFile, doc }) => {
  const [selectedFile, setSelectedFile] = useState()
  // drag state
  const [dragActive, setDragActive] = useState(false)
  // ref
  const inputRef = useRef(null)

  // handle drag events
  const handleDrag = e => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  // triggers when file is dropped
  const handleDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    let files = e.dataTransfer.files

    if (files.length > 1) {
      alert('Only 1 file at a time!')
      return
    }

    if (files[0].type != 'application/pdf') {
      alert('PDF only!')
      return
    }

    handleFile(e.dataTransfer.files)
  }

  // triggers when file is selected with click
  const handleChange = e => {
    e.preventDefault()

    let files = e.target.files

    if (files.length > 1) {
      alert('Only 1 file at a time!')
      return
    }

    if (files[0].type != 'application/pdf') {
      alert('PDF only!')
      return
    }

    handleFile(e.target.files)
  }

  // triggers the input when the button is clicked
  const onButtonClick = e => {
    e.preventDefault()
    inputRef.current.click()
  }

  return (
    <form
      id='form-file-upload'
      onDragEnter={handleDrag}
      onSubmit={e => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type='file'
        id='input-file-upload'
        multiple={true}
        onChange={handleChange}
      />
      <label
        id='label-file-upload'
        htmlFor='input-file-upload'
        className={dragActive ? 'drag-active' : ''}
      >
        {doc != null ? (
          <div>
            <p>{doc.name}</p>
            <button className='upload-button' onClick={onButtonClick}>
              Change file
            </button>
          </div>
        ) : (
          <div>
            <p>Drag and drop assignment/tubes PDF or</p>
            <button className='upload-button' onClick={onButtonClick}>
              Choose file
            </button>
          </div>
        )}
      </label>
      {dragActive && (
        <div
          id='drag-file-element'
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  )
}

export default DragDropFile
