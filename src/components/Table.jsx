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

    useEffect(() => {
        const dataFiltered = data.filter((d) => (
            d.username.toLowerCase().match(value.toLowerCase())
        ))
        setFilteredData(dataFiltered)
        router.push(`/?username=${value}`, undefined, { shallow: true })
    }, [value])


  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gray-100">
        <div className="text-center">
            <div className="flex justify-between mb-4">
                <h3 className="text-lg font-bold p-2">USERS</h3>
                <input 
                    placeholder="Search user"
                    className="text-slate-600 rounded-lg"
                    value={value}
                    onChange={handleInput}
                />
            </div>
            {!filteredData || filteredData.length === 0 ? (
                <p>Not found users</p> 
            ): (
                <table className="table-fixed bg-[#A5B4FC] w-auto mx-auto border-collapse border-spacing-2 rounded-lg">
                    <caption class="caption-top">
                        Users
                    </caption>
                <thead>
                    <tr className="text-xl font-medium text-gray-800">
                    {titles.map((title) => (
                        <th 
                        key={title}
                        onClick={title === "username" ? handleClick : null}
                        className={`${title === 'username' ? "cursor-pointer" : ""}`}
                        >
                            {title.toUpperCase()}
                            {title === "username" && (
                                <span>
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
                    <Users user={user}/>
                    ))}
                </tbody>
            </table>
            )}
        </div>
    </main>
  )
}


