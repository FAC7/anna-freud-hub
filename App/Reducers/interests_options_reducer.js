const defaultState = [
  [
    { title: 'Music',
      picUrl: 'http://www.fillmurray.com/150/150'
    },
    { title: 'Art',
      picUrl: 'http://www.fillmurray.com/200/150'
    },
  ],
  [
    { title: 'Cooking',
      picUrl: 'http://www.fillmurray.com/150/154'
    },
    { title: 'Yoga',
      picUrl: 'http://www.fillmurray.com/150/157'
    },
  ],
  [
    { title: 'Meditation',
      picUrl: 'http://www.fillmurray.com/180/150'
    },
    { title: 'Ultimate Frisbee',
      picUrl: 'http://www.fillmurray.com/150/190'
    },
  ],
  [
    { title: 'Running',
      picUrl: 'http://www.fillmurray.com/180/155'
    },
    { title: 'Book Club',
      picUrl: 'http://www.fillmurray.com/162/162'
    },
  ],
  [
    { title: 'Dance',
      picUrl: 'http://www.fillmurray.com/201/150'
    },
    { title: 'Coding',
      picUrl: 'http://www.fillmurray.com/300/350'
    },
  ]
]

module.exports = (state = defaultState, action) => {
  switch (action.type) {
  default:
    return state
  }
}
