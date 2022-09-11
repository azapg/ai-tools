import Tools from "../tools/tools";

export async function promptWith(tool: Tools, queryData: any): Promise<string> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools/${tool}?${objToQuery(queryData)}`);
  const data = await response.json();
  return data.explanation as string;
}

const objToQuery = (obj: any) => {
  return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}