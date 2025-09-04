import { createContext, useContext } from 'react'
import { League } from '../types/api'

// Global state provider for the application
interface AppContextProps {
  leagues: League[]
  leagueBadges: { [leagueId: string]: string }
  fetchLeagueBadges: (id: string) => Promise<void>
  fetchLeagues: () => Promise<void>
}

export const AppContext = createContext<AppContextProps | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
