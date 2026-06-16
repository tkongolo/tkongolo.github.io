import { configureStore } from '@reduxjs/toolkit'

import authReducer, { hydrateAuth, type AuthState } from './authSlice'

const AUTH_STORAGE_KEY = 'cryntra-auth'

function loadAuthState(): AuthState | undefined {
  if (typeof window === 'undefined') {
    return undefined
  }

  const storedValue = window.localStorage.getItem(AUTH_STORAGE_KEY)

  if (!storedValue) {
    return undefined
  }

  try {
    return JSON.parse(storedValue) as AuthState
  } catch {
    return undefined
  }
}

const persistedAuthState = loadAuthState()

export const store = persistedAuthState
  ? configureStore({
      reducer: {
        auth: authReducer,
      },
      preloadedState: {
        auth: persistedAuthState,
      },
    })
  : configureStore({
      reducer: {
        auth: authReducer,
      },
    })

if (typeof window !== 'undefined') {
  if (persistedAuthState) {
    store.dispatch(hydrateAuth(persistedAuthState))
  }

  store.subscribe(() => {
    const state = store.getState()
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(state.auth))
  })
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
