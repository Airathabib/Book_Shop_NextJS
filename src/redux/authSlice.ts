import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, LogInArgs, AuthError } from "@/interfaces/interfase";


export const logIn = createAsyncThunk<any, LogInArgs, { rejectValue: AuthError }>(
    "auth/logIn",
    async (args: LogInArgs, { rejectWithValue }) => {
        const { email, password } = args;
        try {
            const response = await fetch(`/api/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (!response.ok) {
                return rejectWithValue({ message: data.message, type: data.type });
            }

            return data;
        } catch (error: any) {
            return rejectWithValue({ message: error.message, type: 'unknown' });
        }
    }
);

const initialState: AuthState = {
    loggedIn: false,
    emailError: '',
    passwordError: '',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedIn: (state ) => {
            state.loggedIn = true;
        },
        resetErrors: (state) => {
            state.emailError = '';
            state.passwordError = '';
        }
        
    },
    extraReducers: (builder) => { 
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.loggedIn = true;
        })
        .addCase(logIn.rejected, (state, action) => {
            state.loggedIn = false;
            if (action.payload) {
                if(action.payload.type === 'email'){
                state.emailError = action.payload.message;}
                else if(action.payload.type === 'password'){
                state.passwordError = action.payload.message;}
            } else {
                console.log("Unknown error");
            }
        });
    },
});

export const { setLoggedIn, resetErrors } = authSlice.actions;
export default authSlice.reducer;
