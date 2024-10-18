// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     isOpen: false,
//     formType: 'employee', // 'employee' or 'leave'
// };

// const modalSlice = createSlice({
//     name: 'modal',
//     initialState,
//     reducers: {
//         openModal: (state, action) => {
//             state.isOpen = true;
//             state.formType = action.payload;
//         },
//         closeModal: (state) => {
//             state.isOpen = false;
//         },
//     },
// });

// export const { openModal, closeModal } = modalSlice.actions;

// export default modalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    componentName: null,
    componentProps: {},
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.componentName = action.payload.componentName;
            state.componentProps = action.payload.componentProps || {};
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.componentName = null;
            state.componentProps = {};
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;