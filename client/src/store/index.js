import Vue from 'vue'
import Vuex from 'vuex'

import { defaultClient as apolloClient } from '../main';

import {GET_CURRENT_USER, GET_POSTS, SIGNIN_USER} from "@/store/queries";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
        loading: false
    },
    mutations: {
        setPosts: (state, payload) => {
            state.posts = payload;
        },
        setLoading: (state, payload) => {
            state.loading = payload;
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
                console.log(data.getCurrentUser)
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
            apolloClient.mutate({
                mutation: SIGNIN_USER,
                variables: payload
            })
                .then(({data}) => {
                    console.log(data.signinUser);
                    localStorage.setItem('token', data.signinUser.token);
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    modules: {},
    getters: {
        posts: state => state.posts,
        loading: state => state.loading,
    }
})
