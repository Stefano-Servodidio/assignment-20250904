// https://www.thesportsdb.com/api/v1/json/3/all_leagues.php
// https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=<id>

import { LeagueBadge } from '../types/api'
import axios from './index'
const API_URL = import.meta.env.VITE_API_URL

export const fetchAllLeagues = async () => {
  try {
    const response = await axios.get(`${API_URL}all_leagues.php`, {
      cache: {
        id: 'list-leagues',
        // ttl: 1000 * 60, // 1 minute, enable for testing
        cacheTakeover: false
      }
    })
    return response.data?.leagues || []
  } catch (error) {
    console.error('Error fetching all leagues:', error)
    return []
  }
}

export const fetchAllLeagueBadges = async (
  id: string
): Promise<LeagueBadge[]> => {
  try {
    const response = await axios.get(
      `${API_URL}search_all_seasons.php?badge=1&id=${id}`,
      {
        cache: {
          id: 'list-leagues',
          // ttl: 1000 * 60, // 1 minute, enable for testing
          cacheTakeover: false
        }
      }
    )
    return response.data?.seasons || []
  } catch (error) {
    console.error('Error fetching league badge:', error)
    return []
  }
}
