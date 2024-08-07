import Table from "@/components/Table";

export default async function Home() {

  const fetchData = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();
    return data;
  }

  const data = await fetchData()

  return (
    <Table data={data}/>
  );
}
