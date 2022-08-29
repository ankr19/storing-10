const connectToMongo = require("./db");
const model2 = require("../models/model2");
const refine = require("../models/refine");
var obj = {};
var a = 0,
  b = 10,
  c = b + 10,
  p = 1;
const arrange = async () => {
  connectToMongo();
  //model2.fin
  const model = await model2.find({}).sort({ _id: -1 }).limit(1);
  data = JSON.parse(JSON.stringify(model));
  let date = [];
  let time = [];
  let vdc = [];
  let idc = [];
  let rpm = [];
  let idref = [];
  let tmot = [];
  let tesc = [];
  for (let i in data) {
    date.push(
      data[i]["Date"].map((e) => {
        return e;
      })
    );
    time.push(
      data[i]["Time"].map((e) => {
        return e;
      })
    );
    vdc.push(
      data[i]["vdc"].map((e) => {
        return e;
      })
    );
    idc.push(
      data[i]["idc"].map((e) => {
        return e;
      })
    );
    rpm.push(
      data[i]["rpm"].map((e) => {
        return e;
      })
    );
    idref.push(
      data[i]["idref"].map((e) => {
        return e;
      })
    );
    tmot.push(
      data[i]["tmot"].map((e) => {
        return e;
      })
    );
    tesc.push(
      data[i]["tesc"].map((e) => {
        return e;
      })
    );
  }
  try {
    if (data.length != 0) {
      // console.log(tesc[0].length);
      // console.log(idc[0].length);
      for (let i = 0; i < date[0].length - 1; i++) {
        repeat2(date);
        repeat2(time);
        p++;

        repeat(vdc, idc, rpm, idref, tmot, tesc);

        obj = new Object(obj);
        // console.log(obj);
        // console.log(data)

        const main = new refine({ data: obj });
        const savem = await main.save();
        // console.log(savem);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const repeat = (vdc, idc, rpm, idref, tmot, tesc) => {
  for (let i = b; i < c; i++, a++) {
    obj[vdc[0][a]] = vdc[0][i];
    obj[idc[0][a]] = idc[0][i];
    obj[rpm[0][a]] = rpm[0][i];
    obj[idref[0][a]] = idref[0][i];
    obj[tmot[0][a]] = tmot[0][i];
    obj[tesc[0][a]] = tesc[0][i];
  }

  b += 10;
  c = b + 10;
  if (a === 10) {
    a = 0;
  }
  // console.log(a);
  // console.log(b);
  // console.log(c);
};

const repeat2 = (dt) => {
  for (let i in dt) {
    obj[dt[0][0]] = dt[0][p];
  }
};

module.exports = arrange;

// grabage value
// obj[idc[0][1]] = idc[0][18];// let d = [2, 3, 34, 3];
// console.log(d.splice(0, 2));
// // console.log(date[1].length);
// console.log(d);
//   console.log(time);
//   console.log(vdc);// obj[date[0][0]] = date[0][1];
// obj[time[0][0]] = time[0][1];
