export async function CallItemSearch(page:number =1, pageSize:number =1, orderBy:string ="favorite") {
    const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    const body = await response.json();
    return body;
}

export async function CallItemDetail(id: number) {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${id}`);
    const body = await response.json();
    return body;
}

export async function CallItemComment(id: number, limit=5) {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${id}/comments?limit=${limit}`);
    const body = await response.json();
    return body;
}
