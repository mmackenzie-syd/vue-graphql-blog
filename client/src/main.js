import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

import FormAlert from "@/components/shared/FormAlert";

Vue.component('form-alert', FormAlert);
Vue.use(VueApollo);

export const defaultClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        if (!localStorage.token) {
            localStorage.setItem('token', '');
        }

        operation.setContext({
            headers: {
                authorization: localStorage.getItem('token')
            }
        });
    },
    onError: ({ graphQLErrors, networkError }) => {
        if (networkError) {
            console.log('[networkError]', networkError);
        }

        if (graphQLErrors) {
            for (let err of graphQLErrors) {
                console.log('err', err);
                if ((err.message === "Invalid Password") || (err.message === "User not found")){
                    store.commit('setAuthError', err);
                    store.dispatch('signoutUser');
                }
            }
        }
    }
});

const apolloProvider = new VueApollo({ defaultClient })

Vue.config.productionTip = false

new Vue({
    provide: apolloProvider.provide(),
    router,
    store,
    vuetify,
    render: h => h(App),
    created: function() {
        // dose not work if an arrow function is used
        this.$store.dispatch('getCurrentUser');
    }
}).$mount('#app')
