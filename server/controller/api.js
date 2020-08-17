let XLSX = require('xlsx');
const mongoose = require('mongoose');
const SPAREMODEL = require('./models/spare');
const async = require('async');
const { json } = require('body-parser');


module.exports = {
    bulkupload,
    listSpare
}

function bulkupload(req, res) {
    async function async_fun() {

        try {
            console.log('i am workinh')
            console.log('body', req.files)
            let xlsData = req.files.xlsfile
            let workbook = XLSX.read(xlsData.data, { type: "buffer" });
            let sheet_name_list = workbook.SheetNames;
            // console.log('workbook', workbook)
            sheet_name_list.forEach(function (y) {
                let worksheet = workbook.Sheets[y];
                // console.log('datata',worksheet)
                let headers = {};
                let spareData = [];
                for (z in worksheet) {
                    if (z[0] === '!') continue;
                    //parse out the column, row, and value
                    var tt = 0;
                    for (var i = 0; i < z.length; i++) {
                        if (!isNaN(z[i])) {
                            tt = i;
                            break;
                        }
                    };
                    let col = z.substring(0, tt);
                    let row = parseInt(z.substring(tt));
                    let value = worksheet[z].v;
                    // console.log('col', col, 'row', row, 'value', value)

                    //     //store header names
                    if (row == 1 && value) {
                        headers[col] = value;
                        continue;
                    }

                    if (!spareData[row]) spareData[row] = {};
                    spareData[row][headers[col]] = value;
                }
                if (spareData.length) {
                    spareData.shift(); //remove first row
                    spareData.shift(); // remove second row as they are empty
                    // console.log('/000000000000000000', spareData);
                    let spareArr = []
                    for (spare of spareData) {
                        // console.log('spareeeeeeeeeeeeeeeeeeeee', spare)
                        let OBJ = {}
                        OBJ['part_photo'] = spare['Part Photo link'];
                        OBJ['part_number'] = spare['Part Number'];
                        OBJ['oes_oem'] = spare['OES/OEM'];
                        OBJ['part_name'] = spare['Part Name'];
                        OBJ['brand'] = spare['Brand'];
                        OBJ['oes_oem'] = spare['OES/OEM'];
                        OBJ['part_category'] = spare['Part Category'];
                        OBJ['part_subcategory'] = spare['Part Sub Category'];
                        OBJ['MRP'] = spare['MRP'];
                        OBJ['GST_AMOUNT'] = spare['GST AMOUNT'];
                        OBJ['GST_PERCENT'] = spare['GST%'];
                        OBJ['discount'] = spare['DISCOUNT%']
                        OBJ['price_after_discount'] = spare['PRICE AFTER DISCOUNT']
                        OBJ['car_make'] = spare['Car Make']
                        OBJ['car_model'] = spare['Car Model']
                        OBJ['car_manufacturing_year'] = spare['Car Manufacturing Year']
                        OBJ['car_varient'] = spare['Car Variant']
                        OBJ['vendor_id'] = spare['Vendor id']
                        OBJ['reutrn_warrenty'] = spare['Return Warranty']
                        OBJ['dispatch_day'] = spare['Dispatch days']
                        spareArr.push(OBJ)
                    }

                    console.log('spareeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', spareArr)
                    SPAREMODEL.deleteMany({})
                    SPAREMODEL.insertMany(spareArr, (err, result) => {
                        if (err) throw err
                        console.log(';;;;;;;;;;;;;;', result)
                        if (result) {
                            res.json({
                                data: {},
                                code: 200,
                                message: "Success"
                            })
                        }
                    })


                }

            });
        } catch (error) {
            console.log('errrrorrr', error)
            res.json({
                data: {},
                code: 500,
                message: "Failure"
            })
        }
    }
    async_fun()
}

function listSpare(req, res) {
    async function asunc_fun() {
        try {
            SPAREMODEL.find({}, (err, data) => {
                if (err) throw err
                if (data) {
                    res.json({
                        data: data,
                        code: 200,
                        message: "Success"
                    })
                }
            })
        } catch (error) {
            res.json({
                data: {},
                code: 500,
                message: "Failure"
            })
        }
    } asunc_fun()
}