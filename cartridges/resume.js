// === Game Data ===
const gameData = {
  commandCounter: 0,
  gameOver: false,
  introText:
    "Welcome to Joshua Denenberg's interactive resume! If you are here, it means you are considering hiring a new web developer." +
    " Through this game, I am sure that you will find that I am enthusiastic, knowledgable, creative, and a capable programmer. Hopefully after this short game, you will also get to know me a little better. \n \n",
  outroText: "Thanks For playing!",
  closetOpen: false,
  player: {
    currentLocation: "Entrance",
    inventory: {},
    usedDiploma: false,
    usedKindle: false,
    usedAtari: false
  },
  map: {
    Entrance: {
      firstVisit: true,
      displayName: "Entrance",
      description:
        "...Which is why I have locked you in my office! Mwahaha! And you cannot leave untill you find three items of importance and use them!" +
        "\n  If at any time you are confused, type 'help'.",
      items: {},
      exits: {
        desk: {
          displayName: "desk",
          destination: "Desk"
        },
        bookshelf: {
          displayName: "bookshelf",
          destination: "Bookshelf"
        },
        closet: {
          displayName: "closet",
          destination: "Closet"
        },
        exit: {
          displayName: "exit the room",
          destination: "End"
        }
      }
    },

    Desk: {
      firstVisit: true,
      displayName: "Josh's Desk",
      description:
        "You sit at Josh's desk. It has a Windows 'laptop' running several pieces of audio software and a 'MacBook' running several terminals of predominately javascript and react.js applications. There is a closed desk 'drawer'.\n \n",
      interactables: {
        desk: {
          look: "It's a sturdy wooden desk!",
          take: "I don't think your pockets are big enough..."
        },
        drawer: {
          take: "Just because you can doesn't mean you should...",
          look:
            "You open the desk drawer to find a kindle! On it has a couple of coding textbooks (Python the Hard Way, FullStack React, and Data Science from Scratch). Alongside it is a Nintendo Switch with 'Splatoon 2' running. \n \n"
        },
        macbook: {
          take: "Hey! Don't take my MacBook!",
          look:
            "You see several open terminals running multiple projects! They include applications using react, rails, and express. You also see Josh is hard at work learning computer science algorithms, focusing on the Udemy tutorials by Stephen Grider and the Har}d CS50 course! There's also a couple other tutorials and works in progress. Some are social media esq. experiments, others try to use statistics to help play or analyze game data better, one is even building a frontend" +
            "for the Database of Woman Composers project. \n \n"
        },
        laptop: {
          take: "Hey! Don't take my laptop!",
          look:
            "There's a window of Sibelius notation software running in addition to Ableton Live, Cubase, and Audacity. On the desktop is a dizzying amount of games of too many genres to name but many are small studio, independent games."
        },
        switch: {
          take: "Don't take my Switch! I was using that!",
          look:
            "Josh has an odd choice of games: most of them are multiplayer including Crawl, OverCooked, and Puyo Tetris."
        }
      },
      items: {
        kindle: {
          displayName: "Kindle",
          description:
            "Josh's kindle, which has several coding textbooks. \n \n",
          use: function() {
            return useKindle();
          },
          quantity: 1,
          hidden: true
        }
      },
      exits: {
        bookshelf: {
          displayName: "bookshelf",
          destination: "Bookshelf"
        },
        closet: {
          displayName: "closet",
          destination: "Closet"
        },
        exit: {
          displayName: "exit the room",
          destination: "End"
        }
      }
    },
    Bookshelf: {
      firstVisit: true,
      displayName: "Bookshelf",
      description:
        "There is a sturdy bookshelf that is absolutely overflowing. On it is hundreds of 'scores' of music, 'literature', writing and research 'guides'', some seemingly ancient Dungeons and Dragons 'books', and a lot of Kung-Fu dvds. There are also some impressive looking 'folders' sitting on the top of the shelf.\n \n",
      interactables: {
        folders: {
          take:
            "There's no point in taking the folders! Why not look at them instead?",
          look:
            "When you open the folders, you see they are cases for 'diplomas'! One is for the University of Connecticut (BA), the University of Hartford (Masters of Music), and the Univeristy of Toronto (Doctorate of Musical Arts). \n \n"
        },
        scores: {
          take: "There's too many to take!",
          look: "It is literally too many scores of music to look at!"
        },
        literature: {
          take: "While tempting, now is not the time for a good read.",
          look:
            "You see books ranging from modern poetry to a compliation of the Sherlock Holmes stories. You even see a couple of graphic novels!"
        },
        books: {
          take:
            "Hey, some of those books are thirty years out of print! No touching!",
          look:
            "You look at the Dungeons and Dragons books and see they are really old! There is a set of the 2nd edition guides and a lot of 3rd edition as well!"
        },
        guides: {
          take:
            "You're welcome to take them... but they probably won't be of much use unless you are writing a dissertation.",
          look:
            "You see the MLA, Chicago, and Turabian research and writing style guides. Clearly Josh knows a lot about research and writing!"
        },
        dvds: {
          look:
            "The collection has a number of classics such as 5 Deadly Venoms, The 36 Chambers, and Enter the Dragon. There are even some compliation packs, such as a collection of early movies by Jackie Chan.",
          take:
            "Without a DvD player these, while cool, aren't particularly usefull. It's better to leave the for now."
        }
      },
      items: {
        diplomas: {
          displayName: "Diplomas",
          description:
            "Josh's diplomas show his BA from Uconn, Masters from the University of Hartford, and his Doctorate from the University of Toronto.",
          use: function() {
            return readDiploma();
          },
          quantity: 1,
          hidden: true
        }
      },
      exits: {
        desk: {
          displayName: "desk",
          destination: "Desk"
        },
        closet: {
          displayName: "closet",
          destination: "Closet"
        },
        exit: {
          displayName: "exit the room",
          destination: "End"
        }
      }
    },

    Closet: {
      firstVisit: true,
      description:
        "You stand in front of an open closet. There is a full 'shelf' on the top, some 'boxes' on the bottom, and naturally a fair bit clothing. \n \n",
      interactables: {
        boxes: {
          take: "Whew, these boxes are way too heavy to take.",
          look:
            "You look through the boxes on the floor... there's some comics and old notebooks. The notebooks are absolutely filled with shorthand scribblings. It looks like a lot of rails, javascript, react, and redux boilerplate."
        },
        shelf: {
          take: "Now you are just being silly!",
          look:
            "Wow! There's a boxed 'Atari' console from the 1970s! There's also a couple other older consoles such as an NES and SNES--suffice to say it looks like Josh is an afficianod of older electronics."
        }
      },
      items: {
        atari: {
          displayName: "Atari",
          description:
            "This is a bonafide collectors item and in great condition! There's also several weird home-brew games. None of them seem to be by Josh, but it's clear that he's a at least an enthusiast if not hobbiest.",
          use: function() {
            return useAtari();
          },
          quantity: 1,
          hidden: true
        }
      },
      exits: {
        desk: {
          displayName: "desk",
          destination: "Desk"
        },
        bookshelf: {
          displayName: "bookshelf",
          destination: "Bookshelf"
        },
        exit: {
          displayName: "exit the room",
          destination: "End"
        }
      }
    },

    End: {
      firstVisit: true,
      description: "placeholder",
      setup: function() {
        end();
      }
    }
  }
};

// === Game Actions ===
const gameActions = {
  open: function(game, command, consoleInterface) {
    return consoleInterface(game, command);
  }
};

// === Necessary Exports ===
module.exports.gameData = gameData;
module.exports.gameActions = gameActions;

// === Helper Functions ===

function end() {
  const player = gameData.player;
  if (player.usedDiploma && player.usedKindle && player.usedAtari) {
    gameData.map["End"].description =
      "Congrats! You found all the hidden items around my office. \n \n";
    gameData.map["End"].exits = {};
    gameData.gameOver = true;
  } else {
    gameData.map[
      "End"
    ].description = `You need to search harder! There are three unique items to find, and you need to 'use' all of them for more information! \n \n`;
    gameData.map["End"].exits = {
      desk: {
        displayName: "desk",
        destination: "Desk"
      },
      bookshelf: {
        displayName: "bookshelf",
        destination: "Bookshelf"
      },
      closet: {
        displayName: "closet",
        destination: "Closet"
      },
      door: {
        displayName: "door out",
        destination: "Door"
      }
    };
  }
}

function handleDoor() {
  if (gameData.closetOpen === false) {
    gameData.closetOpen = true;
    return "You open the door to the closet!";
  } else {
    return "Why would you open a closet door that is already open?";
  }
}

function useKindle() {
  gameData.player.usedKindle = true;
  return "Searching more on the kindle, you find a couple books related to philosophy and technology. Josh clearly spends a lot of his time reading.";
}

function readDiploma() {
  gameData.player.usedDiploma = true;
  return "Reading closer, you see Josh's graduation years of 2010(BA), 2013(Masters), and 2017(Doctorate). Josh is fairly young for having a PhD equivalent education!";
}

function useAtari() {
  gameData.player.usedAtari = true;
  return "You find an old tv in the office and plug it in. Wow, it still works and is lots of fun!";
}
