import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
    "user/fetchContacts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/getcontacts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            if (!response.ok) {
                return rejectWithValue(data.error || "Failed to fetch contacts");
            }
            return data.contacts;
        } catch (error) {
            return rejectWithValue(error.error || "Network error");
        }
    }
);

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

            return data;
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
            return data.data;
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
        contacts: [],
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
                console.log(action.payload)
                if (action.payload.updatedFields.firstName) state.data.firstName = action.payload.updatedFields.firstName;
                if (action.payload.updatedFields.lastName) state.data.lastName = action.payload.updatedFields.lastName;
                if (action.payload.updatedFields.profilePicture) state.data.profilePicture = action.payload.updatedFields.profilePicture;
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
                state.contacts.push(action.payload.newContact);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to add contact';
            })
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch contacts";
            });
    },
});

export const { resetState, resetPageState } = userSlice.actions;
export default userSlice.reducer;
