export async function CallAPI(page="1", pageSize="1", orderBy="favorite") {
    const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    const body = await response.json();
    return body;
}

export default CallAPI;