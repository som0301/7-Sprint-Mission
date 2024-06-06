import { useEffect, useRef, useState } from "react";
import styled from "styled-components"

const Img = styled.img`
    width: 282px;
    height: 282px;
    border-radius: 12px
    
`;

const InputContainer = styled.div `
    width: 282px;
    height: 282px;
    border-radius: 12px;
    position: relative;
    border: 1px solid #eee;
    background-color: #f7f8fa;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:before {
        content: '+';
        font-size: 24px;
        color: #999;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:after {
        content: '이미지 등록';
        font-size: 14px;
        color: #999;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translateX(-50%); 
    }

`;

const Input = styled.input `
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;  
`;

const FileInputLayer = styled.div `
    display: flex;
    gap: 24px;

`

const PreviewContainer = styled.div `
    position: relative;
`;

const PreviewDeleteButton = styled.button `
    position: absolute;
    top: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    border-radius: 50px;
    color: #fff;
    background-color: #3692ff;
`;

function FileInput({name, value, onChange}) {
    const [preview, setPreview] = useState();
    const inputRef = useRef();
    const [fileOnOff, setFileOnOff] = useState();
    const handleChange = (e) => {
        const nextValue = e.target.files[0];
        onChange(name, nextValue);
    };

    const handleDeleteClick = () => {
        const inputNode = inputRef.current;
        if(!inputNode) {
            return;
        }
        inputNode.value = "";
        onChange(name, null);
    };

    useEffect(() => {
        if(!value) {
            setFileOnOff(false);
            return;
        }
        else {
            setFileOnOff(true);
        }
        const nextPreview = URL.createObjectURL(value);
        setPreview(nextPreview);

        return () => {
            setPreview();
            URL.revokeObjectURL(nextPreview);
        };
    }, [value]);

    return (
        <FileInputLayer>
            <InputContainer>
                <Input type="file" disabled={fileOnOff} onChange={handleChange} ref={inputRef} />
            </InputContainer>
            <PreviewContainer>
                <Img src={preview} alt=" "/>
                {value && <PreviewDeleteButton onClick={handleDeleteClick}>X</PreviewDeleteButton>}
            </PreviewContainer>
        </FileInputLayer>
    );
}

export default FileInput;