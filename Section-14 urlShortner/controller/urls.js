const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handleGenerateShortUrl(req, res) {
  const shortID = nanoid(8);
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });
  return res.render('home', {
    id: shortID,
  });
}

async function handleGetShortId(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  return res.redirect(entry.redirectUrl);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

async function handleGetAllUrls(req, res){
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
}

async function handleDeleteUrlById(req, res){
  const shortId = req.params.shortId;
  await URL.findOneAndDelete({ shortId });
  return res.redirect("/")
}

async function handleUpdateUrlById(req, res){
  const shortId = req.params.shortId
  const newUrl = req.body.url;
  await URL.findOneAndUpdate({ shortId }, { redirectUrl: newUrl});
  return res.redirect("/")
}

module.exports = {
  handleGenerateShortUrl,
  handleGetShortId,
  handleGetAnalytics,
  handleGetAllUrls,
  handleDeleteUrlById,
};
