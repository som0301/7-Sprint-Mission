import { ChangeEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { ReactComponent as DeleteIcon } from '../../../image/deleteicon.svg'

interface Props {
  name: string
  value: File | null
  onImageChange: (name: string, value: File | null) => void
}

function FileInput({ name, value, onImageChange }: Props) {
  const [previewImg, setPreviewImg] = useState('')
  const inputImgRef = useRef<HTMLInputElement>(null)

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newImgValue = e.target.files?.[0] || null // undefined이면 null로 대체
    onImageChange(name, newImgValue)
  }

  const handleClearClick = () => {
    const inputNode = inputImgRef.current
    if (!inputNode) return

    inputNode.value = ''
    onImageChange(name, null)
  }

  useEffect(() => {
    if (!value) return
    const nextPreview = URL.createObjectURL(value)
    setPreviewImg(nextPreview)

    return () => {
      setPreviewImg('')
      URL.revokeObjectURL(nextPreview)
    }
  }, [value])

  return (
    <div className="wrapper-img-upload">
      <label htmlFor="file">
        +
        <br />
        이미지 등록
      </label>
      <input
        className="input-img"
        type="file"
        id="file"
        onChange={handleImgChange}
        ref={inputImgRef}
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
