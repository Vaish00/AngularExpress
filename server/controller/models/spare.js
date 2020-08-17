var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var spareSchema = new mongoose.Schema({
    part_photo: { type: String },
    part_number: { type: String, default: '' },
    part_name: { type: String, default: '' },
    oes_oem: { type: String, enum: ['OES', 'OEM'] },
    brand: { type: String, default: '' },
    part_category: { type: String, default: '' },
    part_subcategory: { type: String, default: '' },
    MRP: { type: Number, default: 0 },
    GST_AMOUNT: { type: Number, default: 0 },
    GST_PERCENT: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    price_after_discount: { type: Number, default: 0 },
    car_make: { type: String, default: '' },
    car_model: { type: String, default: '' },
    car_manufacturing_year: { type: String, default: '' },
    car_varient: { type: String, default: '' },
    vendor_id: { type: String, default: '' },
    reutrn_warrenty: { type: String, default: '' },
    dispatch_day: { type: String, default: '' }





},
    { timestamps: true }
);

var spareObj = mongoose.model('spare', spareSchema);
module.exports = spareObj;
