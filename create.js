import Deck from "./models/Deck.js";

export default async function create(req, res) {
  const newDeck = new Deck({
    appName: req.body.appName,
    categoryName: req.body.categoryName,
    appLink: req.body.appLink,
    installProess: req.body.installProess,
    videoLinks: req.body.videoLinks,
    hotDeal: req.body.hotDeal,
    logo: req.body.logo,
    poster: req.body.poster,
    slideImages: req.body.slideImages,
    postedDate: req.body.postedDate,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
}
