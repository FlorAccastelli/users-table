"use client";

import { useState, useEffect } from "react";
import Users from "./Users";
import { useRouter } from "next/navigation";
import { MdOutlineToggleOff } from "react-icons/md";
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

export default function Table({ data }) {
    const titles = Object.keys(data[0]);
    const router = useRouter();

    const [value, setValue] = useState("")
    const [filteredData, setFilteredData] = useState(data);
    const [sortOrder, setSortOrder] = useState('');
    const [activeCols, setActiveCols] = useState(
        {
            id: true,
            name: false,
            username: true,
            email: true,
            address: true,
            phone: true,
            website: true,
            company: true
        }
    )

    const handleInput = (event) => {
        setValue(event.target.value);
    }
    
    const handleClick = () => {
        setSortOrder(prevOrder => {
            const newOrder = prevOrder === 'asc' ? 'desc' : 'asc';
            const sortedData = [...filteredData].sort((a, b) => {
                if (newOrder === 'asc') {
                    return a.username.localeCompare(b.username);
                } else if (newOrder === 'desc') {
                    return b.username.localeCompare(a.username);
                } else {
                    return 0;
                }
            });
            setFilteredData(sortedData);
            return newOrder;
        });
    }

    const handleState = (event) => {
        const propName = event.target.value
        /* console.log("prop name", propName)
        console.log("active cols prop name previo al seteo", activeCols[propName]) */
        activeCols[propName] = activeCols[propName] ? false : true;
        setActiveCols(activeCols)
        
        console.log("active cols post seteo prop name", activeCols)
    }

    useEffect(() => {
        const dataFiltered = data.filter((d) => (
            d.username.toLowerCase().match(value.toLowerCase())
        ))
        setFilteredData(dataFiltered)
        router.push(`/?username=${value}`, undefined, { shallow: true })
    }, [value, activeCols])


  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gray-100 p-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 overflow-x-auto">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-800">USERS</h3>
                <input 
                    placeholder="Search user"
                    className="border border-gray-300 rounded-lg p-2 w-1/2"
                    value={value}
                    onChange={handleInput}
                />
                {titles.map((title) => (
                    <label>
                        <input 
                        type="checkbox" 
                        id={title} 
                        value={title}
                        onChange={handleState} />
                        {title}
                    </label>
                ))}
            </div>
            {!filteredData || filteredData.length === 0 ? (
                <p className="text-gray-500">No users found</p> 
            ): (
                <table className="min-w-full table-fixed bg-[#F9FAFB] border border-gray-300 rounded-lg">
                    <caption class="caption-top text-lg font-medium text-gray-700 mb-2">
                        List of Users
                    </caption>
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                    {titles.map((title) => (
                        <th 
                        key={title}
                        onClick={title === "username" ? handleClick : null}
                        className={`${title === 'username' ? "cursor-pointer" : "cursor-default"} items-center space-x-2`}
                        >
                            {activeCols[title] &&
                            title.toUpperCase()
                            } 
                            
                            {title === "username" && (
                                <span className="text-gray-600">
                                    {sortOrder === 'asc' ? <TbTriangleFilled /> 
                                    : sortOrder === 'desc' ? <TbTriangleInvertedFilled /> 
                                    : <MdOutlineToggleOff />}
                                </span>
                            )}
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((user) => (
                    <Users user={user} activeCols={activeCols} />
                    ))}
                </tbody>
            </table>
            )}
        </div>
    </main>
  )
}


