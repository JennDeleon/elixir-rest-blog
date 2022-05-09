// WILL CALL SPRINGBOOT API
// API IS DEFINED BY CONTROLLER IN JAVA
/**
 * Given an object containing all the required data for a given page, fetch all the needed data and return it as properties to pass to a view.
 * @param state
 * @param request
 * @returns {Promise<{}>}
 */
export default function fetchData(state, request) {
    const promises = []; //EMPTY ARRAY LIST FOR PROMISES
    //TODO: this needs to be moved to a prop file or environment variable
    const baseUri = "http://localhost:8081";

    console.log("got to fetch data");
    console.log(request);
    for (let pieceOfState of Object.keys(state)) { // RETURN THE KEYS OF THE JSON OBJECT
        console.log(baseUri + state[pieceOfState]);
        promises.push(
            fetch(baseUri + state[pieceOfState], request) // CALLING API
                .then(function (res) {
                    return res.json(); //RETURNS A JSON PROMISE AND ADDS IT TO THE ARRAY LIST OF PROMISES
                }));
    }
    return Promise.all(promises).then(propsData => { //LOOKING AT ALL THE PROMISES
        const props = {};
        Object.keys(state).forEach((key, index) => { // ITERATING THROUGH ALL THE KEYS
            props[key] = propsData[index]; //THEN ADD THE PROMISE JSON TO SINGLE PROPS OBJECT
        });
        return props;
    });
}
