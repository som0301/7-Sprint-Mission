export async function getItems({
    orderBy = 'favorite' ,
    page = 1,
    pageSize = 4 
}) {
    const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
    const response = await fetch (`https://panda-market-api.vercel.app/products?${query}`,

    );
    
    const body = await response.json();
    return body;
}