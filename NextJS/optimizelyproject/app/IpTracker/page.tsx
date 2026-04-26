'use client'
import IpCard from '@/Component/IpCard'
import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

const TrackerMap = dynamic(
  () => import('@/Component/TrackerMap'),
  { ssr: false }
)

type IPData = {
  ip: string
  location: {
    country: string
    region: string
    city: string
    lat: number
    lng: number
    postalCode: string
    timezone: string
  }
  isp: string
}

const  isValidIP = (ip: string): boolean => {
  const r = /^(\d{1,3}\.){3}\d{1,3}$/
  return r.test(ip) && ip.split('.').map(Number).every(p => p >= 0 && p <= 255)
}

const isValidDomain = (d: string): boolean => {
  return /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/.test(d)
}

const safe = (val?: string | null) => {
  return val?.trim() || 'N/A'
}

const IpTracker = () => {
  const [input, setInput] = useState('')
  const [ipData, setIpData] = useState<IPData | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData(query?: string) {
    if (query && !isValidIP(query) && !isValidDomain(query)) {
      alert('Please enter a valid IP address or domain name.')
      return
    }
    try {
      let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_TRACKER_API_KEY}`
      if (query) url += isValidIP(query) ? `&ipAddress=${query}` : `&domain=${query}`
      const res = await fetch(url)
      const data = await res.json()
      if (data.code) throw new Error(data.messages)
      setIpData(data)
      console.log("Fetching data:", data);

    } catch (e) {
      alert('Something went wrong')
    }


  }
  const loc = ipData?.location
  const displayLocation = loc
    ? `${safe(loc.city)}, ${safe(loc.region)}${loc.postalCode ? ' ' + loc.postalCode : ''}`
    : '—'

  return (
    <div className="flex flex-col w-full min-h-screen w-full">

      <div
        className="relative w-full text-center px-4 pt-8 pb-50 md:pb-24 
             md:bg-[url('/pattern-bg-desktop.png')] 
             bg-[url('/pattern-bg-mobile.png')] 
             bg-cover bg-center"
      >
        <div className="absolute inset-0 pointer-events-none"
        />

        <h1 className="z-10 text-white text-2xl font-semibold mb-5">
          IP Address Tracker
        </h1>

        <div className="relative z-10 flex max-w-[500px] mx-auto rounded-xl overflow-hidden shadow-xl">
          <input
            value={input}
            onChange={e => { setInput(e.target.value) }}
            onKeyDown={e => e.key === 'Enter' && fetchData(input.trim() || undefined)}
            placeholder="Search for any IP address or domain"
            className="flex-1 bg-white px-5 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
          <button
            onClick={() => fetchData(input.trim())}
            aria-label="Search IP address"
            className="bg-black hover:bg-gray-800 px-5 flex items-center justify-center hover:cursor-pointer"
          >
            <svg width="20px" height="20px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" fill="white" fillOpacity="0.01" />
              <path d="M19 12L31 24L19 36" stroke="#ffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="z-100 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 w-[90%] md:max-w-[860px]">
          <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-4">
            <IpCard label="IP ADDRESS" value={ipData ? safe(ipData.ip) : '—'} />
            <IpCard label="LOCATION" value={displayLocation} border />
            <IpCard label="TIMEZONE" value={loc ? `UTC ${loc.timezone}` : '—'} border />
            <IpCard label="ISP" value={ipData ? safe(ipData.isp) : '—'} border />
          </div>
        </div>
      </div>


      <div className="flex-1 z-10">
        {loc ? (
          <TrackerMap lat={loc.lat} lng={loc.lng} />
        ) : (
          <div className="w-full h-[500px] bg-gray-300 flex items-center justify-center">
            Loading map...
          </div>
        )}
      </div>

    </div>
  )
}

export default IpTracker