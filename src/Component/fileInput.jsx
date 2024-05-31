import { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import test from "../../src/images/home/fileinputbutton.svg";

const Img = styled.img`
    width: 282px;
    height: 282px;
    border-radius: 12px
`;

const Input = styled.input `
    width: 282px;
    height: 282px;
    border-radius: 12px;
    background-image: url("../images/home/fileinputbutton.svg");
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
        <div>
            <Input type="file" disabled={fileOnOff} onChange={handleChange} ref={inputRef} />
            <Img src={preview} alt="미리보기 이미지" />
            {value && <button onClick={handleDeleteClick}>X</button>}
        </div>
    );
}

export default FileInput;