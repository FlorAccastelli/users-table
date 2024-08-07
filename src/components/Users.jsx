export default function Users({ user }) {
    const styles = "p-2 text-xs border  border-gray-200 rounded-lg";
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
    <tr key={user.id} className="rounded-lg border border-gray-200">
        {userData.map((data, index)=> (
            <th key={index} className={styles}>
                {data}
            </th>
        ))}
    </tr>
  )
}
