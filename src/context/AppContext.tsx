import React, { createContext, useContext } from 'react'
import { League } from '../types/api'

// Global state provider for the application
interface AppContextProps {
  leagues: League[]
  errors: string[]
  setErrors: React.Dispatch<React.SetStateAction<string[]>>
  fetchLeagues: () => Promise<void>
  // fetchLeagueBadges: () => Promise<void>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined)

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
