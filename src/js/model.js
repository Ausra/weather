(function() {
    var AppModel = window.CLASSES.AppModel = function() {};

    AppModel.prototype.getData = function() {
    
        var weatherData = fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/2d966359a8a03713c2be0544785ab7fc/54.6872,25.2797')
                    .then(function(data) {
                        return data.json();
                    } )
                    .then(function(data) {
                        return data;
                    });
            return weatherData;
    }
}());