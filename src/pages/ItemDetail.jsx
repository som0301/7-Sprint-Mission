import { useEffect, useState } from "react";
import heartIcon from "../../src/images/logo/favoriteIcon.svg";
import { CallItemDetail } from "../api/CallAPI";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import More from "../../src/images/home/ic_kebab.svg";

const ItemDetailLayer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24px;
    gap: 24px;
`;

const ItemImg = styled.img`
    width: 486px;
    height: 486px;
    border-radius: 16px;
`;

const ItemNamePrice = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
    border-bottom: solid 1px #DFDFDF;
    position: relative;
    img {
        position: absolute;
        width: 24px;
        height: 24px;
        right: 0;
    }

`;

const ItemName = styled.p `
    font-size: 24px;
    line-height: 28.64px;
    font-weight: 600;
`;

const ItemPrice = styled.p `
    font-size: 40px;
    line-height: 47.73px;
    font-weight: 600;
    margin-bottom: 16px;
`;

const DescriptionLayer = styled.div `

    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
        color: #4b5563;
        font-size: 14px;
        font-weight: 500;
        line-height: 16.71px;
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 22.4px;
        color: #1f2937;
        margin-bottom: 23px;
    }
`;

const ItemTags = styled.p `
   color: #4b5563;
    font-size: 14px;
    font-weight: 500;
    line-height: 16.71px;
    margin-top: 24px;
    margin-bottom: 8px;
`;

const TageList = styled.div `
    display: flex;
    gap: 8px;
`;

const Tag = styled.button `
    border-radius: 26px;
    padding: 6px 16px;
    background-color: #f3f4f6;
    color: #1f2937;
    height: 36px;
`;

const FavoriteCount = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    border-radius: 35px;
    padding: 4px 12px;
    gap: 4px;
    border: solid 1px #E5E7EB;
`;

const Detail = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function ItemDetail() {
    const [item, setItem] = useState([]);
    const location = useLocation();
    const itemId = (location.pathname.split("/").pop());

    const ItemLoad = async () => {
        const response = await CallItemDetail(itemId);
        setItem(response);
        console.log(item);
    };

    useEffect(() => {
        ItemLoad();
    }, [itemId]);

    if (!item) return <div>Loading...</div>;

    return(
        <section>
            <ItemDetailLayer>
                <ItemImg src={item.images} alt="상품사진" />
                <Detail>
                    <div>
                        <ItemNamePrice>
                            <ItemName>{item.name}</ItemName>
                            <img src={More} alt="더보기버튼" />
                            <ItemPrice>{item.price ? item.price.toLocaleString() : ""}원</ItemPrice>
                        </ItemNamePrice>
                        <DescriptionLayer>
                            <h1>상품소개</h1>
                            <p>{item.description}</p>
                        </DescriptionLayer>
                        <ItemTags>상품태그</ItemTags>
                        <TageList>
                            {item.tags && item.tags.length > 0 ? (
                            item.tags.map((tag, index) => (
                            <Tag key={index}>#{tag}</Tag>
                            ))
                            ) : (
                            <p>태그없음</p>
                        )}
                        </TageList>
                    </div>
                    <FavoriteCount>
                        <img src={heartIcon} alt="하트"></img>
                        <p>{item.favoriteCount}</p>
                    </FavoriteCount>
                </Detail>
            </ItemDetailLayer>
            <div className="상품문의"></div>
            <div className="상품 질문"></div>
        </section>
    );
}

export default ItemDetail;