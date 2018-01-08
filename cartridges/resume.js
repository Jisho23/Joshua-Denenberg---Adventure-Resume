// === Game Data ===
const gameData = {
  commandCounter: 0,
  gameOver: false,
  introText:
    "Welcome to Joshua Denenberg's interactive resume! If you are here, it means " +
    "you are considering hiring a new programmer, engineer, or software developer." +
    " Through this game, I am sure that you will find that " +
    "I am enthusiastic, knowledgable, creative, and most of all a capable programmer. " +
    "As well, you will hopefully get to know a little bit more about me, my hobbies, interests, and what I am currently working on (besides this game!). \n \n",
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
        "...You find yourself locked in my office! And you cannot " +
        "leave until you find three items of importance and use them! \n \n" +
        "This is effectively the least intimidating escape room ever. You see a simple desk, bookshelf, closet, and the door out." +
        "\nIf at any time you are confused, type 'help' or type 'look' to get a better look at your surroundings.\n\n",
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
          displayName: "try to exit the room",
          destination: "End"
        }
      }
    },

    Desk: {
      firstVisit: true,
      displayName: "Josh's Desk",
      description:
        "You sit at Josh's desk. It has a Windows 'laptop' running several pieces of audio software and " +
        " a 'MacBook' running several terminals of predominately javascript and react.js applications. " +
        "There is a closed desk 'drawer'. Otherwise there are assorted papers and notebooks. " +
        "These are mostly filled with random design sketches, notes, and wireframes for ongoing or future projects. \n \n",
      interactables: {
        desk: {
          look: "It's a sturdy wooden desk!",
          take: "I don't think your pockets are big enough..."
        },
        drawer: {
          take: "Just because you can doesn't mean you should...",
          look:
            "You open the desk drawer to find a kindle! Loaded on it is a couple of coding textbooks " +
            "(Python the Hard Way, FullStack React, and Data Science from Scratch). Alongside it is a " +
            "Nintendo Switch with 'Splatoon 2' running. \n \n"
        },
        macbook: {
          take: "Hey! Don't take my MacBook!",
          look:
            "You see several open terminals running multiple projects. They include applications using" +
            " react, rails, and express. You also see Josh is hard at work learning computer science" +
            " algorithms, focusing on the Udemy tutorials by Stephen Grider and the Harvard CS50 course! " +
            "There's also a couple other tutorials and works in progress. Some are social media esq. experiments, " +
            "others try to use statistics to help play or analyze game data better such as one program that" +
            " allows users to compare Steam libraries for recommendations, one is even building a frontend" +
            "for the Database of Woman Composers project. \n \n"
        },
        laptop: {
          take: "Hey! Don't take my laptop!",
          look:
            "There's a window of Sibelius notation software running in addition to Ableton Live, Cubase, and " +
            "Audacity. On the desktop is a dizzying amount of games of too many genres to name but many are " +
            "small studio, independent games. There's also a couple of game making engines such as Unity and Game Maker Studio." +
            " Being a bit more invasive you see dozens of articles about topics related to music, software design, and game design--all written by Josh."
        },
        switch: {
          take: "Don't take my Switch! I was using that!",
          look:
            "Josh has an odd choice of games: most of them are multiplayer including Crawl, OverCooked, and Puyo Puyo Tetris." +
            " It shows that Josh still prefers to game the old fashioned way: single screen and with friends."
        }
      },
      items: {
        kindle: {
          displayName: "Kindle",
          description:
            "Josh's kindle, which has several coding textbooks--Fullstack React: The Complete Book on ReactJS and Friends by by Accomazzo Anthony and Murray Nathaniel, " +
            "Learn Python 3 The Hard Way by Zed A. Shaw, Learning JavaScript Data Structures and Algorithms by Loiane Groner " +
            "and Data Science from Scratch by Joel Grus. \n \n",
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
          displayName: "try to exit the room",
          destination: "End"
        }
      }
    },
    Bookshelf: {
      firstVisit: true,
      displayName: "Bookshelf",
      description:
        "There is a sturdy bookshelf that is absolutely overflowing with stuff." +
        " On the top of the bookshelf are some impressive lookings 'folders." +
        " On the shelves are hundreds of 'scores' " +
        "of music, classic and modern 'literature', writing and research 'guides', " +
        "some seemingly ancient Dungeons " +
        "and Dragons 'books', and a lot of Kung-Fu dvds. There is also a slew of non-fiction books, " +
        "most are historical or biographies. \n \n",
      interactables: {
        folders: {
          take:
            "There's no point in taking the folders! Why not look at them instead?",
          look:
            "When you open the folders, you see they are cases for 'diplomas'! One is for " +
            "the University of Connecticut (BA), the University of Hartford (Masters of Music)," +
            " and the Univeristy of Toronto (Doctorate of Musical Arts). \n \n"
        },
        scores: {
          take: "There's too many to take!",
          look: "It is literally too many scores of music to look at!"
        },
        literature: {
          take: "While tempting, now is not the time for a good read.",
          look:
            "You see books ranging from poetry (some of which looks like newer, first print books) " +
            "to a compliation of the Sherlock Holmes stories, and some sci-fi classics such as Enders Game." +
            " You even see a couple of graphic novels " +
            "such as Sandman paperbacks."
        },
        books: {
          take:
            "Hey, some of those DnD books are thirty years out of print--making them older than me! No touching!",
          look:
            "You look at the Dungeons and Dragons books and some are really, really old. There is a set " +
            "of the 2nd edition guides and a lot of 3rd edition as well! There are some old character sheets " +
            "and bookmarks for various monsters and such."
        },
        guides: {
          take:
            "You're welcome to take them... but they probably won't be of much use unless you are writing a dissertation or doing " +
            "some serious research.",
          look:
            "You see the MLA, Chicago, and Turabian research and writing style guides. Clearly Josh " +
            "knows a lot about research and writing!"
        },
        dvds: {
          look:
            "The collection has a number of classics such as 5 Deadly Venoms, The 36 Chambers, and Enter the Dragon. " +
            "There are even some compliation packs, such as a collection of early movies by Jackie Chan and Bruce Lee.",
          take:
            "Without a DvD player these, while cool, aren't particularly usefull. It's better to leave the for now."
        }
      },
      items: {
        diplomas: {
          displayName: "Diplomas",
          description:
            "Josh's diplomas show his Bachelor of Arts from Uconn, Masters of Music from the University of Hartford, and " +
            "his Doctorate in Musical from the University of Toronto. You see several distinctions written on them for high marks.",
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
          displayName: "try to exit the room",
          destination: "End"
        }
      }
    },

    Closet: {
      firstVisit: true,
      description:
        "You stand in front of an open closet. There is a full 'shelf' on the top, some 'boxes' " +
        "on the bottom, and naturally a fair bit clothing. It's cluttered but well organized. \n \n",
      interactables: {
        boxes: {
          take: "Whew, these boxes are way too heavy to take.",
          look:
            "You look through the boxes on the floor... there's some comics and old notebooks. " +
            "The notebooks are absolutely filled with shorthand scribblings. It looks like a lot of rails, " +
            "javascript, react, and redux boilerplate. There are then some folders that have notebooks filled " +
            "with statistics classwork and music theory going back to his undegraduate degree."
        },
        shelf: {
          take: "Now you are just being silly!",
          look:
            "Wow! There's a boxed 'Atari' console from the 1970s! There's also a couple other " +
            "older consoles such as an NES and SNES--suffice to say it looks like Josh is fairly " +
            "serious about older electronics and classic games (if this adventure game weren't evidence enough!)" +
            " There is also a crate filled with games--some of which are quite rare!"
        }
      },
      items: {
        atari: {
          displayName: "Atari",
          description:
            "This is a bonafide collectors item and in great condition! There's also several " +
            "weird home-brew games stuffed into the box such as Skeleton+ and Medieval Mayhem. " +
            "None of them seem to be by Josh, but it's clear that he's an enthusiast for" +
            " independently produced homebrew games.",
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
          displayName: "try to exit the room",
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
      "Congrats! You found all the hidden items around my office. I hope you had some fun" +
      " and learned a bit about me and my experience, education, and what I am currently doing." +
      " Feel free to contact me whenever at m email (j.denenberg42@gmail.com) or check out my github (username: Jisho23). " +
      " Hope to hear from you soon!\n \n";
    gameData.map["End"].exits = {};
    gameData.gameOver = true;
  } else {
    gameData.map["End"].description =
      `You need to search harder! There are three unique ` +
      `items to find, and you need to 'use' all of them for ` +
      `more information! Remember, you can type 'inventory' to ` +
      `see what you have collected. \n \n`;
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
  return (
    "Searching more on the kindle, you find a couple more books related to " +
    "philosophy and technology. Josh clearly spends a lot of his time reading and " +
    " tries to be as well versed as he can."
  );
}

function readDiploma() {
  gameData.player.usedDiploma = true;
  return (
    "Reading closer, you see Josh's graduation years of 2010(BA), " +
    "2013(Masters), and 2017(Doctorate). Josh is fairly young for having a PhD equivalent education!"
  );
}

function useAtari() {
  gameData.player.usedAtari = true;
  return (
    "You find an old tv in the office and plug it in. Wow, " +
    "it still works and is lots of fun! It's amazing how " +
    "something so old is still so reliable."
  );
}
