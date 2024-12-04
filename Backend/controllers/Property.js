const Property = require("../models/Property");

const getProperty = async (req, res) => {
  try {
    const properties = await Property.find();
    return res.status(200).json(properties);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const addProperty = async (req, res) => {
  try {
    const new_property = new Property(req.body);
    new_property.save();
    res.status(201).json({ message: "property added...", data: new_property });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    await Property.findByIdAndDelete(propertyId);
    res.status(200).json({
      message: `property ${property.name} deleted...`,
      data: property,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPropertyByID = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({
      data: property,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const editProperty = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    const PropertyData = await Property.findByIdAndUpdate(propertyId, req.body, {new : true});
    res.status(200).json({
      message: `property ${property.name} edited...`,
      data: PropertyData,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProperty,
  addProperty,
  deleteProperty,
  getPropertyByID,
  editProperty,
};
