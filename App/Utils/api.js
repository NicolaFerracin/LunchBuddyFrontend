const events = [
  {name: 'Burger restaurant', peopleAttending: 3, image: 'http://www.bk.com/sites/default/files/New_BaconCheeseburgerDeluxe_thumb.png', rating: 4, price: 3, distance: 10, time: '11:30'}
]

const locations = [
  {name: 'Burger restaurant', peopleAttending: 3, image: 'http://www.bk.com/sites/default/files/New_BaconCheeseburgerDeluxe_thumb.png', rating: 4, price: 3, distance: 10, time: '11:30'}
]

var api = {
  getEvents() {
    // var url = `https://api.github.com/users/${username}`;
    // return fetch(url).then((res) => res.json());
    return Promise.resolve(events)
  },
  getLocations() {
    return Promise.resolve(locations)
  }
  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  getNotes(username) {
    username = username.toLowerCase().trim();
    var url = `https://github-notes2.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json);
  },
  createEvent(event) {
    username = username.toLowerCase().trim();
    var url = `https://github-notes2.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(note)
    }).then((res) => res.json())
  }
};

module.exports = api;
