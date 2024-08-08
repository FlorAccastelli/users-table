import Table from "@/components/Table";

const fetchData = async () => {
  "use server"
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json();
  const mappedData = data.reduce((acc, x) => {
    return [...acc, {
      id: x.id,
      name: x.name,
      username: x.username,
      email: x.email,
      address: x.address.city,
      phone: x.phone,
      website: x.website,
      company: x.company.name
    }]
  }, [])

  return mappedData
}

export default async function Home({ searchParams }) {
  const data = await fetchData()
  const dataFiltered = data.filter((d) => (
    d.username.toLowerCase().match(searchParams.search?.toLowerCase() || "")
  ))
  const titles = Object.keys(data[0]);

  return (
    <Table data={dataFiltered} titles={titles} />
  );
}
