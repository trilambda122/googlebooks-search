const mongoose = require("mongoose");
const db = require("../models");
const dotenv = require("dotenv").config();



// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    process.env.ATLAS_URI,
    { useNewUrlParser: true,
        useUnifiedTopology: true }
    );

const bookSeed =[
{   _id:'UbfnTcmkaKkC',
    authors: ["Stephen King"],
    description: "Stephen King’s apocalyptic vision of a world blasted by plague and tangled in an elemental struggle between good and evil remains as riveting—eerily plausible—as when it was first published. The New York Times called it \"the book that has everything. Adventure. Romance. Prophecy. Allegory. Satire. Fantasy. Realism. Apocalypse. Great!\" Soon to be a limited series on CBS All Access A patient escapes from a biological testing facility, unknowingly carrying a deadly weapon: a mutated strain of super-flu that will wipe out 99 percent of the world’s population within a few weeks. Those who remain are scared, bewildered, and in need of a leader. Two emerge—Mother Abagail, the benevolent 108-year-old woman who urges them to build a peaceful community in Boulder, Colorado; and Randall Flagg, the nefarious “Dark Man,” who delights in chaos and violence. As the dark man and the peaceful woman gather power, the survivors will have to choose between them—and ultimately decide the fate of all humanity. (This edition includes all of the new and restored material first published in The Stand: The Complete And Uncut Edition.)",
    image: "http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=UbfnTcmkaKkC&printsec=frontcover&dq=stephen+king&hl=&cd=1&source=gbs_api",
    title: "The Stand",
    publisher: "Anchor",
    publishedDate: "2008-06-24"
},
{
    _id:'eJq7DgAAQBAJ',
    authors: ["Pete Souza"],
    description: "Relive the extraordinary Presidency of Barack Obama through White House photographer Pete Souza's behind-the-scenes images and stories in this #1 New York Times bestseller -- with a foreword from the President himself. During Barack Obama's two terms, Pete Souza was with the President during more crucial moments than anyone else -- and he photographed them all. Souza captured nearly two million photographs of President Obama, in moments highly classified and disarmingly candid. Obama: An Intimate Portrait reproduces more than 300 of Souza's most iconic photographs with fine-art print quality in an oversize collectible format. Together they document the most consequential hours of the Presidency -- including the historic image of President Obama and his advisors in the Situation Room during the bin Laden mission -- alongside unguarded moments with the President's family, his encounters with children, interactions with world leaders and cultural figures, and more. Souza's photographs, with the behind-the-scenes captions and stories that accompany them, communicate the pace and power of our nation's highest office. They also reveal the spirit of the extraordinary man who became our President. We see President Obama lead our nation through monumental challenges, comfort us in calamity and loss, share in hard-won victories, and set a singular example to \"be kind and be useful,\" as he would instruct his daughters. This book puts you in the White House with President Obama, and is a treasured record of a landmark era in American history.",
    image: "http://books.google.com/books/content?id=eJq7DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=UbfnTcmkaKkC&printsec=frontcover&dq=stephen+king&hl=&cd=1&source=gbs_api",
    title: "Obama: An Intimate Portrait",
    publisher: "Little, Brown",
    publishedDate: "2017-11-07"
  }
]

db.Book
    .deleteMany({})
    // .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });