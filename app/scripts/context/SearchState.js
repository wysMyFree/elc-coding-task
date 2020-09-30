import React, { useReducer } from 'react'
import { SearchContext } from './searchContext'
import { searchReducer } from './searchReducer'
import { searchAPI } from '../api/api'
import { SET_ITEMS, SET_LOADING } from './searchReducer'

export const SearchState = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, {
    items: [],
    loading: false,
    showSuggestions: false,
  })
  const setLoading = () => dispatch({ type: SET_LOADING })
  const setItems = (data) => {
    dispatch({ type: SET_ITEMS, payload: data })
  }
  const fetchItems = async (value) => {
    setLoading()
    const data = await searchAPI.fetchData(value)
    setItems(data)
  }

  return (
    <SearchContext.Provider
      value={{
        fetchItems,
        setItems,
        items: state.items,
        loading: state.loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
