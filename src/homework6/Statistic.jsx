import React, { useState, useEffect } from "react";

export const Statistic = () => {
  const [data, setData] = useState([]);
  const [dataAdd, setDataAdd] = useState();

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(
        "https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search"
      );
      const newData = await responce.json();
      setData(newData);
    };
    getData();
  }, []);

  let a = [];

  const eachData = (obj) => {
    for (const key in obj.data) {
      a.push(obj.data[key]);
    }
  };

  let b = [];

  const eachDataB = () => {
    for (const key in a[2]) {
      b.push(a[2][key]);
    }
    // console.log(b[0]);
  };

  let aa = [];
  const eachDataC = (obj) => {
    for (const key in b[0]) {
      aa.push(key);
    }
    // console.log(aa);
  };

  let bb = [];
  const eachDataD = (i) => {
    for (const key in b[i]) {
      bb.push(b[i][key]);
    }
    console.log(bb);
  };

  //   const valueRow = [];
  //   const valueCell = [];

  //   const eachData = (obj) => {
  //     for (const key in obj.data) {
  //       valueRow.push(key);
  //     }
  //   };

  //   const eachDataB = (obj) => {
  //     for (const key in obj.data) {
  //       valueCell.push(obj.data[key]);
  //     }
  //   };

  return (
    <>
      <div>1</div>
      {eachData(data)}
      {eachDataB()}
      {eachDataC()}

      <table>
        <tr>
          {aa.map((value, i) => {
            return <td>{value}</td>;
          })}
        </tr>
        {bb.map((value, i) => {
          {
            eachDataD(i);
          }
          // return (
          //   // <tr>
          //   //   {/* {bb.map((value) => {
          //   //     <td>{console.log(value)}</td>;
          //   //   })} */}
          //   // </tr>
          // );
        })}
      </table>

      {/* <table border="1" cellspacing="0">
        <tr>
          {valueRow.map((value) => {
            return <td>{value.replace(/_/g, " ")}</td>;
          })}
        </tr>

        <tr>
          {valueCell.map((value) => {
            return <td>{value}</td>;
          })}
        </tr>
      </table> */}
    </>
  );
};
