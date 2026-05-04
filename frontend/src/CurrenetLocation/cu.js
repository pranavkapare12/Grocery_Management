const getLocation = async() =>{
    if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
    }

    let latitude, longitude;
    navigator.geolocation.getCurrentPosition(async (position)=>{
        let data = position.coords;
        latitude = data.latitude;
        longitude = data.longitude;
        await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`).then(res => res.json()).then(data => {
            console.log(data.address);
            return data.address;
        })
    })

}

export {getLocation};