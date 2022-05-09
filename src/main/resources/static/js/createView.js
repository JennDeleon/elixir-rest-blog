import render from './render.js';
import router from './router.js';
import fetchData from "./fetchData.js";
import {getHeaders} from "./auth.js";

/**
 * Finds the correct route for a given view, builds a loading view, fetches data and builds the final rendered view.
 * @param URI
 */

export default function createView(URI) {

    let route = router(URI);
    //DEFINING ROUTER VAR


    // Store the title because the loading screen render overwrites it.
    let currentTitle = document.title;

    // if route is invalid, return a 404 page
    if (!route) {
        render(null, router('/error'));
        return;
    }

    // change view to loading screen SEE LOADING.JS
    render(null, router('/loading'));

    let request = {
        headers: getHeaders() // this is using the the getHeaders in auth.js
    }
    fetchData(route.state, request).then((props) => { //CALLING FUNCTION FETCH DATA FROM FETCHDATA.JS
        document.title = currentTitle; //CHANGE TITLE
        app.innerHTML = `` //CHANGE INNER HTML
        history.pushState({...props, lastUri: route.uri }, null, route.uri) //LOOK MORE INTO HISTORY.PUSHSTATE
        render(props, route); //CALLING RENDER FUNCTION
    });
}

// When the user hits back in the browser, get the last uri from history and render it (w/ props)
window.addEventListener('popstate', (e) => {
    if (e?.state?.lastUri) {
      console.log(`Back to ${e.state.lastUri}!`)
      const { lastUri, ...props } = e.state
      render(props, router(lastUri))
    }
});
