/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 */
import React from 'react'
import { SearchContext } from '../context/searchContext'
import { SuggestionsPanel } from './suggestions'

export const Menu = () => {
  const [showSearch, setShowSearch] = React.useState(false)
  const [inputText, setInputText] = React.useState('')
  const { fetchItems, items, setItems } = React.useContext(SearchContext)
  const [suggestionsData, setSuggestionsData] = React.useState(items)

  React.useEffect(() => {
    setSuggestionsData(items)
  }, [items])
  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  const showSearchContainer = () => {
    setShowSearch(!showSearch)
    setSuggestionsData([])
    setInputText('')
  }
  const checkInput = (text) => {
    if (text.length === 0) {
      setSuggestionsData([])
      setItems([])
    }
  }
  const filterSuggestionsData = (keyword) => {
    console.log(keyword)
    if (items.length) {
      setSuggestionsData([
        ...items.filter((obj) => {
          if (keyword.slice(1) === '') return true
          if (obj.name.toLowerCase().includes(keyword.toLowerCase())) return true
        }),
      ])
    }
  }
  const onSearch = (event) => {
    setInputText(event.target.value.toUpperCase())
    if (event.target.value.length === 3 && inputText !== 4) {
      fetchItems(event.target.value)
      console.log(items)
    } else filterSuggestionsData(inputText)
    checkInput(event.target.value)
  }

  return (
    <header className='menu'>
      <div className='menu-container'>
        <div className='menu-holder'>
          <h1>ELC</h1>
          <nav>
            <a href='#' className='nav-item'>
              HOLIDAY
            </a>
            <a href='#' className='nav-item'>
              WHAT'S NEW
            </a>
            <a href='#' className='nav-item'>
              PRODUCTS
            </a>
            <a href='#' className='nav-item'>
              BESTSELLERS
            </a>
            <a href='#' className='nav-item'>
              GOODBYES
            </a>
            <a href='#' className='nav-item'>
              STORES
            </a>
            <a href='#' className='nav-item'>
              INSPIRATION
            </a>

            <a href='#' onClick={showSearchContainer}>
              <i className='material-icons search'>search</i>
            </a>
          </nav>
        </div>
      </div>
      <div className={(showSearch ? 'showing ' : '') + 'search-container'}>
        <input type='text' onChange={onSearch} value={inputText} />
        <a href='#' onClick={showSearchContainer}>
          <i className='material-icons close'>close</i>
        </a>
      </div>
      {suggestionsData.length ? <SuggestionsPanel items={suggestionsData} /> : null}
    </header>
  )
}
