import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

const StatPanel = ({logs}) => {



   const getCountOfTypes= (data) => {
      let totalTypes = [];

      console.log("let's look at the data: ", data);

      data.forEach((element) => {
         totalTypes.push(element.type);
      })

      console.log("totalTypes: ",totalTypes);
      console.log("uniqueTypes: ",countNumberOfUniqueElements(totalTypes));

      return ((convertToDataSet(countNumberOfUniqueElements(totalTypes))));

   }
   const convertToDataSet = (data) => {
       let labels = [];
       let count = [];


      Object.keys(data).forEach(key => {
         console.log(key, data[key]);
         labels.push(key);
         count.push(data[key]);
      })

      return {
         labels: labels,
         datasets: [
            {
               backgroundColor: 'rgba(255,99,132,0.2)',
               borderColor: 'rgba(255,99,132,1)',
               borderWidth: 1,
               hoverBackgroundColor: 'rgba(255,99,132,0.4)',
               hoverBorderColor: 'rgba(255,99,132,1)',
               label: 'type numbers',
               data: count
            }
         ]
      }


   }


   /**
    * Calculates the number of unique elements from an array
    *
    * @param data[a,a,b,b,b,c,c,c,c]
    * returns {a:2, b:3, c:4}
    */

   const countNumberOfUniqueElements = (data) => {
      return data.reduce((tally, element) =>{
         tally[element] = (tally[element] || 0) + 1;
         return tally;
      }, {});

   }


   return (
       <>
      <div>testing log length: {logs.length}</div>
          <Bar  data={getCountOfTypes(logs)}
               width={100}
               height={250}
               options={{
                  maintainAspectRatio: false
               }}/>

           </>
   )
}

export default StatPanel;
