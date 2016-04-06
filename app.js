var request = require('request');

var gamesList = [
  // {
  //   title: 'Crono Trigger',
  //   link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/Chrono%20Trigger%20%28USA%29.zip',
  //   console: {
  //     id: 2,
  //     name: 'SNES'
  //   }
  // },
  {
    title: 'Donkey Kong Country',
    link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/Donkey%20Kong%20Country%20%28USA%29.zip',
    console: {
      id: 2,
      name: 'SNES'
    }
  },
  {
    title: 'EarthBound',
    link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/EarthBound%20%28USA%29.zip',
    console: {
      id: 2,
      name: 'SNES'
    }
  },
  // {
  //   title: 'Kirby Super Star',
  //   link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/Kirby%20Super%20Star%20%28USA%29.zip',
  //   console: {
  //     id: 2,
  //     name: 'SNES'
  //   }
  // },
  {
    title: 'Legend of Zelda - A Link to the Past',
    link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/Legend%20of%20Zelda,%20The%20-%20A%20Link%20to%20the%20Past%20%28USA%29.zip',
    console: {
      id: 2,
      name: 'SNES'
    }
  },
  {
    title: 'Megaman X',
    link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/Megaman%20X%20%28USA%29.zip',
    console: {
      id: 2,
      name: 'SNES'
    }
  },
  // {
  //   title: 'Super Mario Kart',
  //   link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/Super%20Mario%20Kart%20%28USA%29%20%281%29.zip',
  //   console: {
  //     id: 2,
  //     name: 'SNES'
  //   }
  // },
  {
    title: 'Super Mario RPG - Legend of the Seven Stars',
    link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/Super%20Mario%20RPG%20-%20Legend%20of%20the%20Seven%20Stars%20%28USA%29%20%281%29.zip',
    console: {
      id: 2,
      name: 'SNES'
    }
  },
  // {
  //   title: 'Super Mario World',
  //   link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/Super%20Mario%20World%20%28USA%29.zip',
  //   console: {
  //     id: 2,
  //     name: 'SNES'
  //   }
  // },
  {
    title: 'Super Mario World 2 - Yoshi\'s Island',
    link: 'http://gateway.ipfs.io/ipfs/Qmdr9mDKwUiUgEp8aFPktFB8wDZtnY9RvJWcf4ncinjpWh/Super%20Mario%20World%202%20-%20Yoshi%27s%20Island%20%28USA%29.zip',
    console: {
      id: 2,
      name: 'SNES'
    }
  },
  // {
  //   title: 'Kirby\'s Dream Land',
  //   link: 'http://gateway.ipfs.io/ipfs/QmU5NpmRnnESeYX4S4V29VHSRUvetQ9qM9a8khqYgXgJyi/Kirby%27s%20Dream%20Land%20%28USA,%20Europe%29.zip',
  //   console: {
  //     id: 3,
  //     name: 'GB'
  //   }
  // },
  // {
  //   title: 'Legend of Zelda Link\'s Awakening',
  //   link: 'http://gateway.ipfs.io/ipfs/QmU5NpmRnnESeYX4S4V29VHSRUvetQ9qM9a8khqYgXgJyi/Legend%20of%20Zelda,%20The%20-%20Link%27s%20Awakening%20%28USA,%20Europe%29.zip',
  //   console: {
  //     id: 3,
  //     name: 'GB'
  //   }
  // },
  // {
  //   title: 'Metroid II',
  //   link: 'http://gateway.ipfs.io/ipfs/QmU5NpmRnnESeYX4S4V29VHSRUvetQ9qM9a8khqYgXgJyi/Metroid%20II%20-%20Return%20of%20Samus%20%28World%29.zip',
  //   console: {
  //     id: 3,
  //     name: 'GB'
  //   }
  // },
  {
    title: 'Pokemon - Blue Version',
    link: 'http://gateway.ipfs.io/ipfs/QmU5NpmRnnESeYX4S4V29VHSRUvetQ9qM9a8khqYgXgJyi/Pokemon%20-%20Blue%20Version%20%28USA,%20Europe%29.zip',
    console: {
      id: 3,
      name: 'GB'
    }
  },
  {
    title: 'Pokemon - Red Version',
    link: 'http://gateway.ipfs.io/ipfs/QmU5NpmRnnESeYX4S4V29VHSRUvetQ9qM9a8khqYgXgJyi/Pokemon%20-%20Red%20Version%20%28USA,%20Europe%29.zip',
    console: {
      id: 3,
      name: 'GB'
    }
  },
  {
    title: 'Super Mario Land (World)',
    link: 'http://gateway.ipfs.io/ipfs/QmU5NpmRnnESeYX4S4V29VHSRUvetQ9qM9a8khqYgXgJyi/Super%20Mario%20Land%20%28World%29.zip',
    console: {
      id: 3,
      name: 'GB'
    }
  },
  // {
  //   title: 'Super Mario Land 2 - 6 Golden Coins',
  //   link: 'http://gateway.ipfs.io/ipfs/QmU5NpmRnnESeYX4S4V29VHSRUvetQ9qM9a8khqYgXgJyi/Super%20Mario%20Land%202%20-%206%20Golden%20Coins%20%28USA,%20Europe%29.zip',
  //   console: {
  //     id: 3,
  //     name: 'GB'
  //   }
  // },
  // {
  //   title: 'Tetris (World)',
  //   link: 'http://gateway.ipfs.io/ipfs/QmU5NpmRnnESeYX4S4V29VHSRUvetQ9qM9a8khqYgXgJyi/Tetris%20%28World%29.zip',
  //   console: {
  //     id: 3,
  //     name: 'GB'
  //   }
  // },
  {
    title: 'Wario Land - Super Mario Land 3 (World)',
    link: 'http://gateway.ipfs.io/ipfs/QmU5NpmRnnESeYX4S4V29VHSRUvetQ9qM9a8khqYgXgJyi/Wario%20Land%20-%20Super%20Mario%20Land%203%20%28World%29.zip',
    console: {
      id: 3,
      name: 'GB'
    }
  },
  {
    title: 'Golden Sun',
    link: 'http://gateway.ipfs.io/ipfs/QmdN73KMiDTxXEq5MwXP6SvvCTquhR8gCXrvKRdyzcnRo9/0171%20-%20Golden%20Sun%20%28U%29%28Mode7%29.zip',
    console: {
      id: 4,
      name: 'GBA'
    }
  },
  {
    title: 'Metroid - Fusion',
    link: 'http://gateway.ipfs.io/ipfs/QmdN73KMiDTxXEq5MwXP6SvvCTquhR8gCXrvKRdyzcnRo9/0690%20-%20Metroid%20-%20Fusion%20%28U%29%28GBANow%29.zip',
    console: {
      id: 4,
      name: 'GBA'
    }
  },
  // {
  //   title: 'Pokemon - Ruby',
  //   link: 'http://gateway.ipfs.io/ipfs/QmdN73KMiDTxXEq5MwXP6SvvCTquhR8gCXrvKRdyzcnRo9/0907%20-%20Pokemon%20Ruby%20%28U%29%28Mugs%29.zip',
  //   console: {
  //     id: 4,
  //     name: 'GBA'
  //   }
  // },
  {
    title: 'Super Mario Advance 4 - Super Mario Bros 3',
    link: 'http://gateway.ipfs.io/ipfs/QmdN73KMiDTxXEq5MwXP6SvvCTquhR8gCXrvKRdyzcnRo9/1212%20-%20Super%20Mario%20Advance%204%20-%20Super%20Mario%20Bros%203%20%28U%29%28Independent%29.zip',
    console: {
      id: 4,
      name: 'GBA'
    }
  },
  {
    title: 'Pokemon - Fire Red',
    link: 'http://gateway.ipfs.io/ipfs/QmdN73KMiDTxXEq5MwXP6SvvCTquhR8gCXrvKRdyzcnRo9/1636%20-%20Pokemon%20Fire%20Red%20%28U%29%28Squirrels%29.zip',
    console: {
      id: 4,
      name: 'GBA'
    }
  },
  {
    title: 'Pokemon - Leaf Green',
    link: 'http://gateway.ipfs.io/ipfs/QmdN73KMiDTxXEq5MwXP6SvvCTquhR8gCXrvKRdyzcnRo9/1637%20-%20Pokemon%20Leaf%20Green%20%28U%29%28Independent%29.zip',
    console: {
      id: 4,
      name: 'GBA'
    }
  },
  {
    title: 'Legend of Zelda, The Minish Cap',
    link: 'http://gateway.ipfs.io/ipfs/QmdN73KMiDTxXEq5MwXP6SvvCTquhR8gCXrvKRdyzcnRo9/1865%20-%20The%20Legend%20of%20Zelda%20-%20The%20Minish%20Cap%20%28U%29%28DCS%29.zip',
    console: {
      id: 4,
      name: 'GBA'
    }
  },
  {
    title: 'Pokemon - Emerald',
    link: 'http://gateway.ipfs.io/ipfs/QmdN73KMiDTxXEq5MwXP6SvvCTquhR8gCXrvKRdyzcnRo9/1986%20-%20Pokemon%20Emerald%20%28U%29%28TrashMan%29.zip',
    console: {
      id: 4,
      name: 'GBA'
    }
  },
  {
    title: 'Final Fantasy VI Advance',
    link: 'http://gateway.ipfs.io/ipfs/QmdN73KMiDTxXEq5MwXP6SvvCTquhR8gCXrvKRdyzcnRo9/2689%20-%20Final%20Fantasy%20VI%20Advance%20%28U%29%28Xenophobia%29.zip',
    console: {
      id: 4,
      name: 'GBA'
    }
  },
  // {
  //   title: 'Castlevania',
  //   link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Castlevania%20%28USA%29.zip',
  //   console: {
  //     id: 1,
  //     name: 'NES'
  //   }
  // },
  {
    title: 'Contra',
    link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Contra%20%28USA%29.zip',
    console: {
      id: 1,
      name: 'NES'
    }
  },
  {
    title: 'Legend of Zelda',
    link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Legend%20of%20Zelda,%20The%20%28USA%29.zip',
    console: {
      id: 1,
      name: 'NES'
    }
  },
  {
    title: 'Mega Man',
    link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Mega%20Man%20%28USA%29.zip',
    console: {
      id: 1,
      name: 'NES'
    }
  },
  {
    title: 'Mega Man 2',
    link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Mega%20Man%202%20%28USA%29.zip',
    console: {
      id: 1,
      name: 'NES'
    }
  },
  // {
  //   title: 'Mike Tyson\'s Punch-Out',
  //   link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Mike%20Tyson%27s%20Punch-Out!!%20%28USA%29.zip',
  //   console: {
  //     id: 1,
  //     name: 'NES'
  //   }
  // },
  {
    title: 'Super Mario Bros',
    link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Super%20Mario%20Bros.%20%28Japan,%20USA%29%20%281%29.zip',
    console: {
      id: 1,
      name: 'NES'
    }
  },
  {
    title: 'Super Mario Bros 2',
    link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Super%20Mario%20Bros.%202%20%28USA%29.zip',
    console: {
      id: 1,
      name: 'NES'
    }
  },
  {
    title: 'Super Mario Bros 3',
    link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Super%20Mario%20Bros.%203%20%28USA%29.zip',
    console: {
      id: 1,
      name: 'NES'
    }
  },
  {
    title: 'Zelda II - The Adventure of Link',
    link: 'http://gateway.ipfs.io/ipfs/QmdpAWfLFN6bcspfHRY5Vdxt7x3WMQdCo7eoZwnX5N9z33/Zelda%20II%20-%20The%20Adventure%20of%20Link%20%28USA%29.zip',
    console: {
      id: 1,
      name: 'NES'
    }
  }
  // ,
  // {
  //   title: 'Star Fox',
  //   link: 'https://gateway.ipfs.io/ipfs/QmUnEhFVWB8xctTXNdpsLJNULQtJNp5oV2sb7St1cuCM1G/Star%20Fox%20%28USA%29.zip',
  //   console: {
  //     id: 2,
  //     name: 'SNES'
  //   }
  // }
];


gamesList.forEach(function(game) {
  var counter = 0;
  setInterval(function(){
    counter++;
    console.log('attempt:', counter, 'for', game.title);
    request(game.link, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('success!', game.title)
      } else if(error) {
        console.log('error!', error, game.title);
      }
    })
  }, 300000);
});
