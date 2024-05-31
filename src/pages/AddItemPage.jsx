import { useState } from "react";
import FileInput from "../../src/component/fileInput";
import styled from "styled-components"

function AddItemPage() {

    const [addItemValue, setAddItemValue] = useState( {
        imgFile: null,
        title: "",
        description: "",
        price: 0,
        tag: [],
    });

    const handleChange = (name, value) => {
        setAddItemValue((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const enterEvent = (e) => {
        if(e.key === "Enter" && e.target.value.trim() !== "") {
            handleTagChange(e.target.value.trim())
            e.target.value = "";
        }
    }

    const handleTagChange = (newTag) => {
        setAddItemValue((prevValues) => ({
            ...prevValues,
            tag: [...prevValues.tag, newTag]
        }));
        console.log(addItemValue);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(name, value);
    }

    const tagDelete = (deleteTag) => {
        setAddItemValue((prevValues) => ({
            ...prevValues,
            tag: prevValues.tag.filter(tag => tag !== deleteTag),
        }));
    };

    return (
        <div className="addItemLayer">
            <div className="itemSubmitButton">
                <p>상품등록하기</p>
                <button>등록</button>
            </div>
            <div className="itemImg">
                <p>상품이미지</p>
                <FileInput name="imgFile" value={addItemValue.imgFile} onChange={handleChange} />
            </div>
            <div className="itemTitle">
                <p>상품명</p>
                <input name="title" placeholder="상품명을 입력해주세요" value={addItemValue.title} onChange={handleInputChange}></input>
            </div>
            <div className="itemDescription">
                <p>상품소개</p>
                <input name="description" placeholder="상품 소개를 입력해주세요" value={addItemValue.description} onChange={handleInputChange}></input>
            </div>
            <div className="itemPrice">
                <p>판매가격</p>
                <input name="price" placeholder="판매 가격을 입력해주세요" value={addItemValue.price} onChange={handleInputChange}></input>
            </div>
            <div className="itemTag">
                <p>태그</p>
                <input name="tag" placeholder="태그를 입력해주세요" onKeyDown={(e) => enterEvent(e)}></input>
                <div className="tagList">
                    {addItemValue.tag.map((tag, index) => (
                        <div className="tag">
                            <h1>{tag}</h1>
                            <button onClick={() => tagDelete(tag)}>X</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AddItemPage;