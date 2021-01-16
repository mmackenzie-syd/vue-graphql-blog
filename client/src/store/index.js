import Vue from 'vue'
import Vuex from 'vuex'

import { defaultClient as apolloClient } from '../main';

import {GET_CURRENT_USER, GET_POSTS, SIGNIN_USER} from "@/store/queries";
import router from "@/router";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
        loading: false,
        user: null,
        error: null,
        authError: null
    },
    mutations: {
        setPosts: (state, payload) => {
            state.posts = payload;
        },
        setLoading: (state, payload) => {
            state.loading = payload;
        },
        setUser: (state, payload) => {
            state.user = payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        setError: (state, payload) => {
            state.error = payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        setAuthError: (state, payload) => {
            state.authError = payload;
        }
    },
    actions: {
        getCurrentUser: ({ commit }) => {
            commit('setLoading', true);
            apolloClient.query({
                query: GET_CURRENT_USER
            })
            .then(({ data }) => {
                commit('setLoading', false);
                commit('setUser', data.getCurrentUser)
            })
            .catch((err) => {
                commit('setLoading', false);
                console.log(err)
            });
        },
        getPosts: ({ commit }) => {
            commit('setLoading', true)
            apolloClient.query({
                query: GET_POSTS
            }).then(({ data }) => {
                commit('setPosts', data.getPosts);
                commit('setLoading', false);
            }).catch(err => {
                console.error(err);
                commit('setLoading', false);
            })
        },
        signinUser: ({ commit}, payload) => {
            commit('clearError');
            commit('setLoading', true);
            localStorage.setItem("token", "");
            apolloClient.query({
                query: SIGNIN_USER,
                variables: payload
            })
                .then(({data}) => {
                    commit('setLoading', false);
                    localStorage.setItem('token', data.signinUser.token)
                    router.go();
                })
                .catch(err => {
                    commit('setError', err);
                    commit('setLoading', false);
                    console.log('Signin', err);
                })
        },
        signoutUser: async ({ commit }) => {
            commit('clearUser', null);

            localStorage.setItem('token', '');

            await apolloClient.resetStore();

            router.push('/');
        }
    },
    modules: {},
    getters: {
        posts: state => state.posts,
        user: state => state.user,
        loading: state => state.loading,
        error: state => state.error,
        authError: state => state.authError,
    }
})
