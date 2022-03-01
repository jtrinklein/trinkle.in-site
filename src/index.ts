import 'bootstrap/dist/css/bootstrap.min.css';
import {bootstrapper} from './bootstrapper';
export const SITE_VERSION="1.0.0";

function onReady(fn: any) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  


onReady(() => {
    const rootId = 'root'
    const el = document.getElementById(rootId);
    if (!el) {
        const rootEl = document.createElement('div');
        rootEl.id = rootId;
        document.body.appendChild(rootEl);
    }
    bootstrapper({rootId});
})