export default function Users({ user, activeCols }) {
    const styles = "font-light text-xs p-2 border-b border-gray-200 text-center";
    return (
        <tr key={user.id} className="bg-white hover:bg-gray-100">
            {activeCols.map((col) =>
            (<td key={user.id} className={styles + " h-12"}>
                {user[col]}
            </td>))
            }
        </tr>
    )
}
