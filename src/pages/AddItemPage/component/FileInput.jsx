import { useEffect, useRef, useState } from 'react'
import { ReactComponent as DeleteIcon } from '../../../image/deleteicon.svg'

function FileInput({ name, value, onChange }) {
  const [previewImg, setPreviewImg] = useState()
  const inputRef = useRef()

  const handleChange = (e) => {
    const nextValue = e.target.files[0]
    onChange(name, nextValue)
  }

  const handleClearClick = () => {
    const inputNode = inputRef.current
    if (!inputNode) return

    inputNode.value = ''
    onChange(name, null)
  }

  useEffect(() => {
    if (!value) return
    const nextPreview = URL.createObjectURL(value)
    setPreviewImg(nextPreview)

    return () => {
      setPreviewImg()
      URL.revokeObjectURL(nextPreview)
    }
  }, [value])

  return (
    <div className="wrapper-img-upload">
      <label for="file">
        +
        <br />
        이미지 등록
      </label>
      <input
        className="input-img"
        type="file"
        id="file"
        onChange={handleChange}
        ref={inputRef}
      />
      {previewImg && (
        <div className="img-preview">
          <img src={previewImg} />
          <button
            className="btn-img-delete"
            type="button"
            onClick={handleClearClick}
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  )
}

export default FileInput
