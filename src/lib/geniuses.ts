const askPlato = async (input: string): Promise<string> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "geniuses/plato?input=" + input)
  const data = await res.json();

  return data.response;
}

export {
  askPlato
}