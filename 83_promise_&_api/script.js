/*
Promise a jeho stavy
• pending - probíhající
• fulfilled - splněno
• rejected - odmítnuto
*/

const request = fetch('https://api.kanye.rest/')
                .then((response) => response.json())
                .then((data) => console.log(data.quote))