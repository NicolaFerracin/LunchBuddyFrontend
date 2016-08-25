'use strict';

var api = {
    createEvent(timestamp, locationId) {
        return true;
    },

    getEventsList(){
        var serverMock =  [
            {
                eventId: 1,
                placeId: "ChIJMferFeJRqEcR4ILthWXklLA"
            },
            {
                eventId: 2,
                placeId: "ChIJHz3rtRpOqEcRzjWPk47-sb8"
            },
            {
                eventId: 4,
                placeId: "ChIJA3tAkR5OqEcRHQ3BP-tASds"
            },
        ];

        return Promise.all(serverMock.map((event) => {
            return api
              .getPlaceDetails(event.placeId)
              .then(location => {event.location = location; return event;})
        }))
    },

    getSingleEvent(eventId){
        return {};
    },

    getParticipants(eventId){
        return [
            {
                email: 'johndoe@gmail.com',
                name: 'John Doe'
            },
            {
                email: 'maxmusterman@gmail.com',
                name: 'Max Mustermann'
            }
        ]
    },

    addParticipant(email){
        return true;
    },

    getLocations() {
        var location = '52.5325360, 13.4240680';
        var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=52.5325360,%2013.4240680&radius=2000&type=restaurant&key=AIzaSyBpsOHDBY0pAT91wUyfVr2hKk0rAylT9fI';

       return fetch(url, { method: 'get' }).then((res) => res.json());
    },

    getPlaceDetails(placeId) {
        var url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=AIzaSyBpsOHDBY0pAT91wUyfVr2hKk0rAylT9fI';

        return fetch(url, { method: 'get' }).then((res) => res.json()).then(r => r.result).then(r => {
            r.photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${r.photos[0].photo_reference}&sensor=false&key=AIzaSyBpsOHDBY0pAT91wUyfVr2hKk0rAylT9fI`
            return r
          }
        );
    },
}

module.exports = api;
