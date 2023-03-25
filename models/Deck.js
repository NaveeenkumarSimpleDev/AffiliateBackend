import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Deck = new Schema({
  appName: String,
  appLink: String,
  categoryName: String,
  installProess: String,
  videoLinks: Array || String,
  hotDeal: Boolean,
  logo: String,
  poster: String,
  slideImages: Array || String,
  postedDate: String,
});

const DeckModel = mongoose.model("Deck", Deck);
export default DeckModel;
