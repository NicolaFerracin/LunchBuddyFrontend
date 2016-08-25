'use strict';

var api = {
    createEvent(timestamp, locationId) {
        return true;
    },

    getEventsList(){
        return [
            {
                eventId: 1,
                locationId: 22
            },
            {
                eventId: 2,
                locationId: 33
            },
            {
                eventId: 4,
                locationId: 55
            },
        ];
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

    }
}

module.exports = api;
