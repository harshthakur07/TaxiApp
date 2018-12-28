import React from "react"

import createStore from "./store/createStore";
import AppContainer from "./AppContainer";

export default class Root extends React.Component {
    renderApp(){
        console.log("window====>",window)
        const initialState = window._INITIAL_STATE_;
        const store = createStore(initialState);
        return(
            <AppContainer store={store} />
        );

    }
    render(){
        return this.renderApp();
    }
}