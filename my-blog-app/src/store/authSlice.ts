import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: any | null;
}

const initialState: AuthState = { user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // This function updates the "user" in our store
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;