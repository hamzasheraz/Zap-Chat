import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addContact = createAsyncThunk(
    "user/addContact",
    async (personToAdd, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/addcontact', {
                method: 'POST',
                body: JSON.stringify({ personToAdd }),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await response.json();

            if (!response.ok) {
                return rejectWithValue(data.error || 'Failed to add contact');
            }

            return data; // Return success message or data
        } catch (error) {
            return rejectWithValue(error.error);
        }
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data.error || "Login failed");
            }
            return data; // Assuming `data` contains user info and tokens
        } catch (error) {
            return rejectWithValue(error.error);
        }
    }
);

// Async action for updating user details
export const updateUserDetails = createAsyncThunk(
    "user/updateUserDetails",
    async (updatedFields, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/settings", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ updatedFields }),
            });
            const parsedResponse = await response.json();
            if (!response.ok) {
                return rejectWithValue(parsedResponse.error);
            }
            return parsedResponse;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Async action for logging out
export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/logout");
            if (!response.ok) {
                return rejectWithValue(error.error);
            }
            return { success: true };
        } catch (error) {
            return rejectWithValue(error.error);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null, // User details
        loading: false,
        error: "",
        success: "",
        isLoggedIn: false, // Tracks login state
    },
    reducers: {
        resetState: (state) => {
            state.data = null;
            state.loading = false;
            state.error = "";
            state.success = "";
            state.isLoggedIn = false;
        },
        resetPageState: (state) => {
            // Reset only the page-specific states like loading, error, and success
            state.loading = false;
            state.error = "";
            state.success = "";
          },
    },
    extraReducers: (builder) => {
        builder
            // Handle updateUserDetails
            .addCase(updateUserDetails.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(updateUserDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.success = action.payload.message;
            })
            .addCase(updateUserDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to update user details";
            })

            // Handle logoutUser
            .addCase(logoutUser.pending, (state) => {
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoggedIn = false;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.error = action.payload || "Logout failed";
            })
            // Login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            //addcontact
            .addCase(addContact.pending, (state) => {
                state.loading = true;
              })
              .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.success = action.payload.message;
              })
              .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to add contact';
              });
    },
});

export const { resetState,resetPageState } = userSlice.actions;
export default userSlice.reducer;
