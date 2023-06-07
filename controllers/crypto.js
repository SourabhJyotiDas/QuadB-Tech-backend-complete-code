const { axios } = require("axios");
const Crypto = require("../models/crypto");


exports.initializeDatabase = async (req, res) => {
  try {

    const { data } = await axios.get('https://api.wazirx.com/api/v2/tickers');
    // console.log(data);

    // Filter out the top 10 tickers
    const top10Tickers = Object.values(data).slice(0, 10);

    const storedData = top10Tickers.forEach(async (ele) => {
      const { name, base_unit, quote_unit, low, high, last, type, open, volume, sell, buy, at } = ele;
      await Crypto.create({ name, base_unit, quote_unit, low, high, last, type, open, volume, sell, buy, at });
    })

    res.status(200).json({
      success: true,
      message: " All data has been saved successfully ",
      storedData
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSavedApiData = async (req, res) => {
  try {
    let savedApiData = await Crypto.find({});

    res.status(200).json({
      success: true,
      message: " All data has been saved successfully ",
      savedApiData
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}