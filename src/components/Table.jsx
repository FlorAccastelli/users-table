"use client";

import { useState, useEffect } from "react";

export default function Table({ data }) {
    const titles = Object.keys(data[0])

    const [value, setValue] = useState("")
    const [filteredData, setFilteredData] = useState(data);

    const handleInput = (event) => {
        setValue(event.target.value);
    }

    useEffect(() => {
        const dataFiltered = data.filter((d) => (
            d.username.toLowerCase().match(value.toLowerCase())
        ))
        setFilteredData(dataFiltered)
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
            
            <table className="table-fixed bg-[#A5B4FC] w-auto mx-auto border-collapse border-spacing-2 rounded-lg">
                <thead>
                    <tr className="text-xl font-medium text-gray-800">
                    {titles.map((title) => (
                        <th key={title}>{title.toUpperCase()}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((user) => (
                    <tr key={user.id} className="rounded-lg border border-gray-200">
                        <th className="p-2 text-xs border  border-gray-200 rounded-lg">{user.id}</th>
                        <th className="p-2 text-xs border  border-gray-200 rounded-lg">{user.name}</th>
                        <th className="p-2 text-xs border  border-gray-200 rounded-lg">{user.username}</th>
                        <th className="p-2 text-xs border  border-gray-200 rounded-lg">{user.email}</th>
                        <th className="p-2 text-xs border  border-gray-200 rounded-lg">{user.address.street}</th>
                        <th className="p-2 text-xs border  border-gray-200 rounded-lg">{user.phone}</th>
                        <th className="p-2 text-xs border  border-gray-200 rounded-lg">{user.website}</th>
                        <th className="p-2 text-xs border  border-gray-200 rounded-lg">{user.company.name}</th>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
  )
}


