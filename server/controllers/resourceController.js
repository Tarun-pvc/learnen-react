const Resource = require('../models/ResourceModel');

const createResource = async (req, res, next) => {
    console.log("Inside createResource function");
    const { title, description, link } = req.body;
    try {
        const resource = new Resource({
            title,
            description,
            link
        });
        await resource.save();
        res.status(201).json({ message: "Resource created successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not create resource" });
        next(err);
    }
}

const getResources = async (req, res, next) => {
    console.log("Inside getResources function");
    try {
        const resources = await Resource.find();
        res.status(200).json({ resources: resources });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Could not fetch resources" });
        next(err);
    }
}

module.exports = {
    createResource,
    getResources
}