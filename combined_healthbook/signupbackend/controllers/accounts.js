const accounts = require("../models/SignupModels");

exports.getAccounts = async (req, res, next) => {
    
    try {
        const account = await accounts.find();

        return res.status(200).json({
        success: true,
        count: account.length,
        data: account
        });
    } catch (err) {
        return res.status(500).json({
        success: false,
        error: 'Server Error'
        });
    }
}
  