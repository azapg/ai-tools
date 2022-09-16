import Tools from "../tools/tools";

export async function promptWith(tool: Tools, queryData: any): Promise<{ explanation: string, error?: string }> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools/${tool}?${objToQuery(queryData)}`);
  return await response.json();
}

const objToQuery = (obj: any) => {
  return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}