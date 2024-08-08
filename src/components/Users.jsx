export default function Users({ user, activeCols }) {
    const styles = "font-light text-xs p-2 border-b border-gray-200";
    console.log("active cols desde users", activeCols)
    return (
    <tr key={user.id} className="bg-white hover:bg-gray-100">
       
        {activeCols.id &&
            (<td key={user.id} className={styles + " h-12"}>
                {user.id}
            </td>)
        }
        {activeCols.name && 
            (<td key={user.name} className={styles + " h-12"}>
                {user.name}
            </td>)
        }
        {activeCols.username && 
            (<td key={user.username} className={styles + " h-12"}>
                {user.username}
            </td>)
        }
        {activeCols.email && 
            (<td key={user.email} className={styles + " h-12"}>
                {user.email}
            </td>)
        }
        {activeCols.address && 
            (<td key={user.address.city} className={styles + " h-12"}>
                {user.address.city}
            </td>)
        }
        {activeCols.phone && 
            (<td key={user.id} className={styles + " h-12"}>
                {user.phone}
            </td>)
        }
        {activeCols.website && 
            (<td key={user.website} className={styles + " h-12"}>
                {user.website}
            </td>)
        }
        {activeCols.company && 
            (<td key={user.company.name} className={styles + " h-12"}>
                {user.company.name}
            </td>)
        }
    </tr>
    
  )
}
