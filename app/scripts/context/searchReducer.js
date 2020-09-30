export const SET_ITEMS = 'SET_ITEMS'
export const SET_LOADING = 'SET_LOADING'

const handlers = {
  [SET_ITEMS]: (state, { payload }) => ({
    ...state,
    items: [...payload],
    loading: false,
  }),
  [SET_LOADING]: (state) => ({
    ...state,
    loading: true,
  }),
  DEFAULT: (state) => state,
}

export const searchReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
