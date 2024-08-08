export default function Users({ user }) {
    const styles = "font-light text-xs p-2 border-b border-gray-200";
    const userData = [
        user.id,
        user.name,
        user.username,
        user.email,
        user.address.street,
        user.phone,
        user.website,
        user.company.name
    ]
  return (
    <tr key={user.id} className="bg-white hover:bg-gray-100">
        {userData.map((data, index)=> (
            <th key={index} className={styles + " h-12"}>
                {data}
            </th>
        ))}
    </tr>
  )
}
