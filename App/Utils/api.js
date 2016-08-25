'use strict';

const events = [
  {name: 'Burger restaurant', peopleAttending: 3, image: 'http://www.bk.com/sites/default/files/New_BaconCheeseburgerDeluxe_thumb.png', rating: 4, price: 3, distance: 10, time: '11:30'}
]

const locations = [
  {name: 'Burger restaurant', peopleAttending: 3, image: 'http://www.bk.com/sites/default/files/New_BaconCheeseburgerDeluxe_thumb.png', rating: 4, price: 3, distance: 10, time: '11:30'}
]

var api = {
    createEvent(timestamp, locationId) {
        return true;
    },

    getEventsList(){
        var returnValue = [];
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

        serverMock.forEach(function(value, key){
          api.getPlaceDetails(value.placeId).then(function(res){
            returnValue.push(res.result);
            returnValue[returnValue.length -1].eventId = value.eventId;
          }) 
        })
        return returnValue;
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

        return fetch(url, { method: 'get' }).then((res) => res.json());
    }
}

module.exports = api;
