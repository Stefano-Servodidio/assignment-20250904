import { ReactNode } from 'react'
import React, { useState } from 'react'
import { fetchAllLeagues } from '../api/thesportsdb-api'
import { AppContext } from './AppContext'
import { League } from '../types/api'

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [leagues, setLeagues] = useState<League[]>([])
  const [errors, setErrors] = useState<string[]>([])

  const fetchLeagues = async () => {
    setLeagues([])
    try {
      const data = await fetchAllLeagues()
      console.log('Fetched leagues:', data)
      setLeagues(data || [])
    } catch (error) {
      setErrors((prev) => [...prev, 'Failed to fetch leagues'])
    }
  }

  //   const fetchLeagueBadges = async (id: string) => {
  //     // Implementation for fetching league badges can be added here
  //   }

  return (
    <AppContext.Provider
      value={{
        leagues,
        fetchLeagues,
        errors,
        setErrors
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
