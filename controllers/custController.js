const customer = require('../models/customer');


exports.custDetails = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        let cust = await customer.findOne({ email });
        if (cust) return res.status(400).send('Details already exists');

        cust = new customer({
            name,
            email,
            phone, 
            message
        });

        await cust.save();

        res.status(201).send('Details posted successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};