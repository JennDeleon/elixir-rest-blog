import createView from './createView.js';
// IMPORTING THE CREATEVIEW FUNCTION FROM THE CREATE VIEW FILE

export default function init() {
    loadViewOnPageRequest();
    addListenerToNavLinks();
}
//EXPORT IN FRONT OF FUNCTION ALLOWS THE FUNCTION TO BE IMPORTED
//THE ABOVE FUNCTION IS CALLING THE BELOW LOADVIEWONPAGEREQUEST & ADDLISTENERTONAVLINKS FUNCTIONS SO WE ONLY NEED ONE FUNCTION CALL
// WHICH IS INITIALIZED WHEN THE PAGE IS CALLED
/**
 * When the DOM loads, build the view given the current endpoint.
 */
function loadViewOnPageRequest() {
    window.addEventListener('DOMContentLoaded', function() {
        //TODO: Switched to location.pathname so the route would be accurate to current view
        createView(location.pathname);
    });
}

/**
 * Add a listener that will change the view if a nav link is clicked.
 */
function addListenerToNavLinks() {
    document.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.dataset['link'] !== undefined) {
            const URI = e.target.href.substring(location.origin.length);
            createView(URI);
        }
    });
}

