import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

interface BootstrapOptions {
    rootId: string;
}

const boostrapDefaultOptions: BootstrapOptions = {
    rootId: 'root',
};

export const bootstrapper = (options: BootstrapOptions) => {
    const resolvedOptions = Object.assign({}, boostrapDefaultOptions, options);
    ReactDOM.render(<App />, document.getElementById(resolvedOptions.rootId));
}