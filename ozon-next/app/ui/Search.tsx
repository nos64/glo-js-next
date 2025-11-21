'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {  useEffect, useState } from "react";

export default function Search() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [search, setSearch] = useState('');
  
    const updateFilter = () => {
      const params = new URLSearchParams(searchParams);
  
      if (search) {
        params.set('search', search);
      } else
        params.delete('search', search);
  
        router.replace(`${pathname}?${params.toString()}`);
    }

    useEffect(() => {
      const params = new URLSearchParams(searchParams);
      const searchParam = params.get('search');
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearch(searchParam || '');
}, [searchParams]);

  return (
    <div className="search">
      <div className="search-wrapper">
        <input
          className="search-wrapper_input"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          />
      </div>
      <div className="search-btn">
        <button onClick={updateFilter}></button>
      </div>
    </div>
  )
}