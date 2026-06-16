import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type AuthUser = {
  email: string
}

export type AuthState = {
  isAuthenticated: boolean
  user: AuthUser | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (_state, action: PayloadAction<AuthUser>) => ({
      isAuthenticated: true,
      user: action.payload,
    }),
    signOut: () => initialState,
    hydrateAuth: (_state, action: PayloadAction<AuthState>) => action.payload,
  },
})

export const { signIn, signOut, hydrateAuth } = authSlice.actions
export default authSlice.reducer
