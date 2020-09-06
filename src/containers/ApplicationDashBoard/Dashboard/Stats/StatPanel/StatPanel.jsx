import React, {useState} from 'react';


const StatPanel = ({logs}) => {

   const getCountOfTypes= (data) => {
      let totalTypes = [];

      data.forEach((element) => {
         totalTypes.push(element.type);
      })

      console.log("totalTypes: ",totalTypes);

      return {
         types: (countNumberOfUniqueElements(totalTypes))
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
       <div>{getCountOfTypes(logs).toString()}</div>
          </>
   )
}

export default StatPanel;
