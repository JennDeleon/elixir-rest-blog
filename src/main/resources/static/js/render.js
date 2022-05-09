import Navbar from "./views/partials/Navbar.js";

/**
 * Pushes the current URI to the URL bar and sets the HTML of the app div.
 * @param props - the data required for view rendering
 * @param route - the object containing information for the given endpoint
 */


export default function render(props, route) {
    const app = document.querySelector('#app');
    const title = `REST Blog - ${route.title}`;
    document.title = title; // CHANGING THE NAME OF THE DOM TITLE

    app.innerHTML = `${Navbar(null)} ${route.returnView(props)}`;
    //THE ABOVE IS A TEMPLATE LITERAL, STUDY MORE ON THAT

    if (route.viewEvent){
        route.viewEvent();
    //    IF THE ROUT HAS A VIEW EVENT, RUN VIEW EVENT FUNCTION, SEE ROUTER.JS
    }
}
