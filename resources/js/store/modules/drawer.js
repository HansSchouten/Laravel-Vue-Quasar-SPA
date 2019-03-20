import * as types from '../mutation-types'

// state
export const state = {
    leftDrawer: true
}

// mutations
export const mutations = {
    [types.SET_DRAWER] (state, newDrawerState) {
        state.leftDrawer = newDrawerState;
    }
}

// actions
export const actions = {
    toggleDrawer ({ commit }) {
        commit(types.SET_DRAWER, !state.leftDrawer)
    },
    setDrawer ({ commit }, newDrawerState) {
        commit(types.SET_DRAWER, newDrawerState)
    }
}
