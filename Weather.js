window.addEventListener('load', () => {
        let long;
        let lat;
        let tempatureDegree = document.querySelector('.tempature-degree')
        let locationTimezone = document.querySelector('.location-timezone')
        let tempatureDescription = document.querySelector('.tempature-description')

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=>{
                long = position.coords.longitude;
                lat = position.coords.latitude;

                const proxy = `https://cors-anywhere.herokuapp.com/`;
                const api = `${proxy}https://api.darksky.net/forecast/171195a00b163a30961bd78adc0fed01/${lat},${long}`;

                fetch(api)
                    .then(responce => {
                        return responce.json();
                    })
                    .then(data => {
                        console.log(data);
                        const {temperature,summary} = data.currently;

                        console.log(data.timezone);
                        tempatureDegree.textContent = temperature;

                        console.log(summary);
                        locationTimezone.textContent = data.timezone;
                        tempatureDescription.textContent = summary;

                    });
            });
        }
});
