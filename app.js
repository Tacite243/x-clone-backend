const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content, Accept, Content-Type;Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next();
});
app.use('/api/tweet', (req, res, next) => {
  const tweet = {
    "tweets": [
      {
        "id": "745c",
        "user": {
          "name": "Twitter",
          "userName": "twitter",
          "time": "Oct 4",
          "src": "/Tweet-Avatar/Profile-Photo-2.png"
        },
        "content": {
          "text": "hello literally everyone",
          "srcImage": "/images/image 3.png"
        },
        "actions": {
          "comments": "118.7k",
          "retweet": "785.4k",
          "like": "3.3k",
          "state": true
        }
      },
      {
        "id": "b8ee",
        "user": {
          "name": "Twitter",
          "userName": "twitter",
          "time": "Oct 4",
          "src": "/Tweet-Avatar/Profile-Photo-2.png"
        },
        "content": {
          "text": "hello literally everyone"
        },
        "actions": {
          "comments": "118.7k",
          "retweet": "785.4k",
          "like": "3.3k",
          "state": true
        }
      },
      {
        "id": "fa33",
        "user": {
          "name": "Twitter",
          "userName": "twitter",
          "time": "Oct 29",
          "src": "/Tweet-Avatar/Profile-Photo-2.png"
        },
        "content": {
          "text": "BIG NEWS lol jk still Twitter"
        },
        "actions": {
          "comments": "6.8k",
          "retweet": "36.8k",
          "like": "267.1k",
          "state": true
        }
      },
      {
        "id": "1d06",
        "user": {
          "name": "The New York Times",
          "userName": "nytimes",
          "time": "2h",
          "src": "/Tweet-Avatar/Profile-Photo6.png"
        },
        "content": {
          "text": "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
          "srcImage": "/images/image 3.png"
        },
        "actions": {
          "comments": "19",
          "retweet": "48",
          "like": "482",
          "state": true
        }
      },
      {
        "id": "981b",
        "user": {
          "name": "CNN",
          "userName": "cnn",
          "time": "7m",
          "src": "/Tweet-Avatar/Profile-Photo-1.png"
        },
        "content": {
          "text": "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a \"major breakthrough\" that would serve to both strengthen the US steel industry and combat the global climate crisis."
        },
        "actions": {
          "comments": "54",
          "retweet": "144",
          "like": "184",
          "state": true
        }
      },
      {
        "id": "f66b",
        "user": {
          "name": "Bradley Ortiz",
          "userName": "bradley_",
          "time": "maintenant",
          "src": "/Avatars/Profile-Photo.png"
        },
        "content": {
          "text": "fff"
        },
        "actions": {
          "comments": 0,
          "retweet": 0,
          "like": 0,
          "state": false
        }
      }
    ]
  }
  res.status(200).json(tweet)
});

app.use('/api/curentUser', (req, res, next) => {
  const curentUser = {
    "current-user": {
      "name": "Bradley Ortiz",
      "userName": "bradley_",
      "time": "maintenant",
      "src": "/Avatars/Profile-Photo.png"
    }
  }
  res.status(200).json(curentUser)
  next();
});

app.use('/api/nav', (req, res, next) => {
  const nav = {
    "nav": [
      {
        "logoAfter": "/Icons/Twitter.svg",
        "id": "95de"
      },
      {
        "logoAfter": "/Icons/Home.svg",
        "text": "Home",
        "path": "/",
        "id": "75ba"
      },
      {
        "logoAfter": "/Icons/Explore.svg",
        "text": "Explore",
        "path": "/",
        "id": "377e"
      },
      {
        "logoAfter": "/Icons/Notifications.svg",
        "text": "Notifications",
        "path": "/",
        "id": "0001"
      },
      {
        "logoAfter": "/Icons/Messages.svg",
        "text": "Messages",
        "path": "/",
        "id": "0959"
      },
      {
        "logoAfter": "/Icons/Bookmarks.svg",
        "text": "Bookmarks",
        "path": "/",
        "id": "7ef5"
      },
      {
        "logoAfter": "/Icons/Lists-Fill.svg",
        "text": "Lists",
        "path": "/",
        "id": "87b2"
      },
      {
        "logoAfter": "/Icons/Profile.svg",
        "text": "Profile",
        "path": "/bradley_",
        "id": "32d0"
      },
      {
        "logoAfter": "/Icons/More.svg",
        "text": "More",
        "path": "/",
        "id": "e038"
      }
    ]
  }
  res.status(200).json(nav);
  next()
});
app.use('/api/trends', (req, res, next) => {
  const trends = {
    "trends": [
      {
        "id": "0"
      },
      {
        "id": "1"
      },
      {
        "id": "2"
      },
      {
        "id": "3"
      }
    ]
  }
  res.status(200).json(trends)
  next()
});
module.exports = app;