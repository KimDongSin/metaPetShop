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
        type: 'home',
    },
    reducers: {
        menuChange(state, action) {
            state.type = action.payload.type;
        }
    }
});


export let { menuChange } = menuType.actions;


export default configureStore({
    reducer: {
        headerType: headerType.reducer,
        menuType: menuType.reducer,
    }
});