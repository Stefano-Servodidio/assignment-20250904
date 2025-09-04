import { ReactNode } from 'react'
import React, { useState } from 'react'
import { fetchAllLeagues, fetchAllLeagueBadges } from '../api/thesportsdb-api'
import { AppContext } from './AppContext'
import { League } from '../types/api'

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [leagues, setLeagues] = useState<League[]>([])
  const [leagueBadges, setLeagueBadges] = useState<{
    [leagueId: string]: string
  }>({})

  const fetchLeagues = async () => {
    setLeagues([])
    const data = await fetchAllLeagues()
    setLeagues(data)
  }
  const fetchLeagueBadges = async (id: string) => {
    setLeagueBadges((prev) => ({ ...prev, [id]: '' }))
    const seasons = await fetchAllLeagueBadges(id)
    const lastSeason = seasons?.[seasons.length - 1]
    if (!lastSeason?.strBadge) return
    setLeagueBadges((prev) => ({ ...prev, [id]: lastSeason.strBadge }))
  }

  return (
    <AppContext.Provider
      value={{
        leagues,
        fetchLeagues,
        leagueBadges,
        fetchLeagueBadges
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
