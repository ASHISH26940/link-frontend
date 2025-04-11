import { useEffect, useState } from "react"
import { createLink, getLinks } from "../lib/api"
import axios from "axios";
export default function Dashboard({ token }: { token: string }) {
  const [originalUrl, setOriginalUrl] = useState("")
  const [customAlias, setCustomAlias] = useState("")
  const [expiresAt, setExpiresAt] = useState("")
  const [links, setLinks] = useState<any[]>([])

  const fetchLinks = async () => {
    const res = await getLinks(token)
    if (res.links) setLinks(res.links)
  }

  const handleCreate = async () => {
    console.log("Creating link:", originalUrl, customAlias, expiresAt);
    
    const res=await axios.post("http://localhost:3000/create-link",{
        originalUrl,
        customAlias,
        expiresAt
    },{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    console.log("Link created:", res.data);
    
    setOriginalUrl("")
    setCustomAlias("")
    setExpiresAt("")
    fetchLinks()
  }

  useEffect(() => {
    fetchLinks()
  }, [])

  return (
    <div className="p-6 text-white bg-gray-950 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="bg-gray-800 p-2 rounded flex-1"
          value={originalUrl}
          onChange={e => setOriginalUrl(e.target.value)}
          placeholder="Original URL"
        />
        <input
          className="bg-gray-800 p-2 rounded w-52"
          value={customAlias}
          onChange={e => setCustomAlias(e.target.value)}
          placeholder="Custom alias"
        />
        <input
          type="datetime-local"
          className="bg-gray-800 p-2 rounded w-60"
          value={expiresAt}
          onChange={e => setExpiresAt(e.target.value)}
          placeholder="Expiration Date"
        />
        <button
          onClick={handleCreate}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Create
        </button>
      </div>
      <div className="space-y-2">
        {links.map(link => (
          <div key={link._id} className="bg-gray-800 p-3 rounded">
            <p>{link.originalUrl}</p>
            <a
              href={`http://localhost:3000/${link.shortId}`}
              target="_blank"
              className="text-blue-400 underline"
            >
              {`http://localhost:3000/${link.shortId}`}
            </a>
            <p className="text-sm text-gray-400">Clicks: {link.clicks}</p>
            {link.expiresAt && (
              <p className="text-sm text-red-400">
                Expires At: {new Date(link.expiresAt).toLocaleString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
