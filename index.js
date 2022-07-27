let myResult;

async function init() {

    try {
        myResult = await getSomething('https://gisn.tel-aviv.gov.il/arcgis/rest/services/IView2/MapServer/970/query?where=1%3D1&outFields=*&f=json');
        // console.log(myResult);
        // console.log(myResult);
    } catch (error) {
        console.log("Oh no " + error);
    }


    for (let index = 0; index < myResult.features.length; index++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add("card");
        newDiv.innerHTML = ` 
        <div > 
            <h1 id="h1id">${myResult.features[index].attributes.shem_chenyon}</h1>
             <strong>כתובת:</strong><br><p>${myResult.features[index].attributes.ktovet}</p>
             <br><strong>עלות:</strong> <p>${myResult.features[index].attributes.taarif_yom}</p>
             <br><strong>מקומות פנויים:</strong> <p>${myResult.features[index].attributes.status_chenyon}</p>
             
             
             
        <div>`;
        //   Appending the new card to the container.
        container.appendChild(newDiv);

    }
    // console.log(myResult.features[0].attributes.shem_chenyon);
}


function getSomething(url) {
    return new Promise((resolve, reject) => {
        // here we write code to do something 
        //  if the something worked out well, we call the "resolve", and give it some data
        //  if the something didn't work out well, we call the "reject", and give it some data
        fetch(url)
            .then((data) => {
                if (url.length < 5) {
                    reject("very short")
                }
                resolve(data.json());
            })
            .catch((err) => { reject('fail') });
    });
}

const container = document.querySelector('#container');
// Listen to Scroll Event.
window.addEventListener('scroll', () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight > scrollHeight - 50) {


    }
});