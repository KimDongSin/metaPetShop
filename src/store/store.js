import { configureStore, createSlice } from '@reduxjs/toolkit'

const headerType = createSlice({
    name: 'headerType',
    initialState: {
        type: 't1',
        title: ""
    },
    reducers: {
        headerChange(state, action) {
            state.type = action.payload.type;
            state.title = action.payload.title;
        }
    }
});


export let { headerChange } = headerType.actions;


const menuType = createSlice({
    name: 'menuType',
    initialState: {
        value: ''
    },
    reducers: {
        menuChange(state, action) {
            state.value = action.payload;
        }
    }
});

export let { menuChange } = menuType.actions;

const listTabType = createSlice({
    name: 'listTabType',
    initialState: {
        type: 'follow',
    },
    reducers: {
        listTabChange(state, action) {
            state.type = action.payload;
        }
    }
});

export let { listTabChange } = listTabType.actions;

const loginState = createSlice({
    name: 'loginState',
    initialState: { value: null },
    reducers: {
        loginStateChange(state, action) {
            state.value = action.payload.value;
        }
    }
});

export let { loginStateChange } = loginState.actions;

const loginUser = createSlice({
    name: 'loginUser',
    initialState: { user: null },
    reducers: {
        loginUserSet(state, action) {
            state.user = action.payload;
        }
    }
});

export let { loginUserSet } = loginUser.actions;


export default configureStore({
    reducer: {
        headerType: headerType.reducer,
        menuType: menuType.reducer,
        listTabType: listTabType.reducer,
        loginState: loginState.reducer,
        loginUser: loginUser.reducer,
    }
});