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
        type: '',
    },
    reducers: {
        menuChange(state, action) {
            state.type = action.payload;
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

export default configureStore({
    reducer: {
        headerType: headerType.reducer,
        menuType: menuType.reducer,
        listTabType: listTabType.reducer,
    }
});