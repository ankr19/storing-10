const connectToMongo = require("./db");
const model2 = require("../models/model2");
const refine = require("../models/refine");
var obj = {};
var a = 1;
var b = 0;
var  c = 10;
var p = 0;
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
    console.log(date)
  }
  try {
      // console.log(tesc[0].length);
      // console.log(idc[0].length);
      for (let i = 0; i < date[0].length ; i++) {
        Date(date);
        Time(time);
        p++;

        repeat(vdc, idc, rpm, idref, tmot, tesc);

        obj = new Object(obj);
        // console.log(obj);
        // console.log(data)

        const main = new refine({ data: obj });
        const savem = await main.save();
        console.log(savem);
      }
  } catch (error) {
    console.log(error);
  }
  finally{
    obj = new Object({});
    a = 1;
    b = 0;
    c = 10;
    p = 0;
  }
};

const repeat = (vdc, idc, rpm, idref, tmot, tesc) => {
  for (let i = b; i < c; i++, a++) {
    obj["vdc"+a] = vdc[0][i];
    obj["idc"+a] = idc[0][i];
    obj["rpm"+a] = rpm[0][i];
    obj["idref"+a] = idref[0][i];
    obj["tmot"+a] = tmot[0][i];
    obj["tesc"+a] = tesc[0][i];
  }
  // console.log("before");
  // console.log(a);
  // console.log(b);
  // console.log(c);

  
  if (a === 11) {
    a = 1;b += 10;
  c += 10;
  }
  // console.log('after')
  // console.log(a);
  // console.log(b);
  // console.log(c);
};

const Date = (dt) => {
  for (let i in dt) {
    obj["Date"] = dt[0][p];
  }
};
const Time = (dt) => {
  for (let i in dt) {
    obj["Time"] = dt[0][p];
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
