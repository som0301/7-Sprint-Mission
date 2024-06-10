export async function CallItemSearch(page="1", pageSize="1", orderBy="favorite") {
    const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    const body = await response.json();
    return body;
}

export async function CallItemDetail(id) {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${id}`);
    const body = await response.json();
    return body;
}

export async function CallItemComment(id, limit=5) {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${id}/comments?limit=${limit}`);
    const body = await response.json();
    return body;
}