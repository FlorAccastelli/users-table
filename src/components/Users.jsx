export default function Users({ user }) {
    const styles = "font-light text-xs p-2 border-b border-gray-200";

    const activeCols = {
        id: true,
        name: true,
        username: true,
        email: true,
        address: true,
        phone: true,
        website: true,
        company: true
    }
  return (
    <tr key={user.id} className="bg-white hover:bg-gray-100">
       
        {activeCols.id && 
            (<td key={user.id} className={styles + " h-12"}>
                {user.id}
            </td>)
        }
        {activeCols.name && 
            (<td key={user.id} className={styles + " h-12"}>
                {user.name}
            </td>)
        }
        {activeCols.username && 
            (<td key={user.id} className={styles + " h-12"}>
                {user.username}
            </td>)
        }
        {activeCols.email && 
            (<td key={user.id} className={styles + " h-12"}>
                {user.email}
            </td>)
        }
        {activeCols.address && 
            (<td key={user.id} className={styles + " h-12"}>
                {user.address.city}
            </td>)
        }
        {activeCols.phone && 
            (<td key={user.id} className={styles + " h-12"}>
                {user.phone}
            </td>)
        }
        {activeCols.website && 
            (<td key={user.id} className={styles + " h-12"}>
                {user.website}
            </td>)
        }
        {activeCols.company && 
            (<td key={user.id} className={styles + " h-12"}>
                {user.company.name}
            </td>)
        }
    </tr>
  )
}
