const apiurl = "https://panda-market-api.vercel.app";

export async function CallItemSearch(page:number =1, pageSize:number =1, orderBy:string ="favorite") {
    const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    const response = await fetch(`${apiurl}/products?${query}`);
    const body = await response.json();
    return body;
}

export async function CallItemDetail(id: number) {
    const response = await fetch(`${apiurl}/products/${id}`);
    const body = await response.json();
    return body;
}

export async function CallItemComment(id: number, limit: number =5) {
    const response = await fetch(`${apiurl}/products/${id}/comments?limit=${limit}`);
    const body = await response.json();
    return body;
}

export async function CallArticles(keyword: string, orderBy:"recent" | "like") {
    const response = await fetch(`${apiurl}/articles?page=1&pageSize=20&orderBy=${orderBy}&keyword=${keyword}`);
    const body = await response.json();
    return body;
}