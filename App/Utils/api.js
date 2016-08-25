'use strict';

var baseUrl = 'https://lunchbuddyrasinhackathon-zawuza.rhcloud.com/events';

var api = {
    createEvent(placeId, timestamp) {
      console.log(placeId, timestamp)
        if (timestamp) {
            timestamp = new Date()
        }
        var url = baseUrl + '/' + placeId + '/' + timestamp.getTime();
        return fetch(url, { method: 'post' }).then((res) => res.json());
    },

    getServerEventsList() {
      return fetch(baseUrl, { method: 'get' }).then((res) => res.json());
    },

    getEventsList() {
      return api.getServerEventsList().then(function(res) {
          return Promise.all(res.events.map((event) => {
              return api
                .getPlaceDetails(event.Place)
                .then(location => {
                  return api.getParticipants(event.ID).then(function(res) {
                    event.peoples = res.People
                    event.location = location;
                    return event;
                  })
                })
          }))
      });

    },

    getSingleEvent(eventId){
        return fetch(baseUrl + eventId, { method: 'get' }).then((res) => res.json());
    },

    getParticipants(eventId){
        var url = baseUrl + '/' + eventId + '/people';

        return fetch(url, { method: 'get' }).then((res) => res.json());
    },

    addParticipant(eventId, email){
        var url = baseUrl + '/' + eventId + '/people/' + email;

        return fetch(url, { method: 'post' }).then((res) => res.json());
    },

    createParticipant(email, name){
        var url = 'https://lunchbuddyrasinhackathon-zawuza.rhcloud.com/people' + '/' + email + '/' + name;

        return fetch(url, { method: 'post' }).then((res) => res.json());
    },

    getLocations() {
        var location = '52.5325360, 13.4240680';
        var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=52.5325360,%2013.4240680&radius=2000&type=restaurant&key=AIzaSyBpsOHDBY0pAT91wUyfVr2hKk0rAylT9fI';

       return fetch(url, { method: 'get' }).then((res) => res.json()).then(r => r.results.filter((r) => !!r.photos)).then(r => r.map(r => {
           r.photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${r.photos[0].photo_reference}&sensor=false&key=AIzaSyBpsOHDBY0pAT91wUyfVr2hKk0rAylT9fI`
           return r
         }))
    },

    getPlaceDetails(placeId) {
        var url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=AIzaSyBpsOHDBY0pAT91wUyfVr2hKk0rAylT9fI';
        return fetch(url, { method: 'get' }).then((res) => res.json()).then(r => r.result).then(r => {
            r.photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${r.photos[0].photo_reference}&sensor=false&key=AIzaSyBpsOHDBY0pAT91wUyfVr2hKk0rAylT9fI`
          return r;
          }
        );
    },
}

module.exports = api;
