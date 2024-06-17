import React, { useState, useEffect } from "react";

const URL = "http://localhost:3000/api/timetable/mess"; // Replace with your API endpoint

export function MessTimeTable() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        console.log("Response status:", response.status);
        if (!response.ok) {
          console.log("Error fetching data from messtimetable");
          // Handle API errors (display user-friendly message)
          return;
        }
        const data = await response.json();
        console.log("Fetched data:", data);

        // Access data within 'message' property
        const tableData = data.message;
        setTableData(tableData);
      } catch (err) {
        console.error("Error parsing data:", err);
        // Handle parsing errors (display user-friendly message)
      } finally {
        setIsLoading(false); // Set loading state to false (success or error)
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures effect runs only once

  return (
    <div className="timetable-container">
      <div className="timetable-heading">
        <h1>
          <span className="blue">Time-Table</span>
        </h1>
      </div>
      <div className="timetable-box">
        {isLoading && (
          <p>Loading timetable data...</p>
        )}

        {/* Handle unexpected data format (optional) */}
        {!isLoading && !Array.isArray(tableData) && (
          <p>Error: Unexpected data format. Please check the API response.</p>
        )}

        {!isLoading && Array.isArray(tableData) && ( // Ensure tableData is an array
          tableData.length > 0 ? (
            <section className="timetable-section">
              {/* Table headers - Week Names */}
              <div className="week-headers">
                {tableData.map((dayObject, index) => (
                  <div key={index} className="week-day">
                    {dayObject.day}
                  </div>
                ))}
              </div>

              {/* Table Body - Meals */}
              <div className="timetable-content">
                <div className="meal-names">
                  {/* Use object.keys to get meal names */}
                  {Object.keys(tableData[0].meals??{}).map((mealName) => (
                    <p key={mealName} className="meal-name">
                      {mealName}
                    </p>
                  ))}
                </div>
              
                {tableData.map((dayObject, index) => (
                  
                  <div key={index} className="day-meals">
                   
                    {Object.entries(dayObject.meals??{}).map(([mealName, mealItems]) => (
                      <p key={mealName} className="meal-item">
                        {mealItems.length > 0 ? mealItems.join(", ") : "No meals"}
                      </p>
                    ))}
                
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <p>No data available for this period.</p>
          )
        )}
      </div>
      <div className="timing-container">
        <div className="timing-heading">
        <h1>
          <span className="messH">Mess-Timings</span>
        </h1>
        </div>
        <div className="timing-content">
          {tableData.some((dayObject)=>dayObject.timings)}
            <section className="timings-sections">
              {tableData.map((dayObject,index)=>(
                <div key={index} className="day-timings">
                 
                  {dayObject.timings &&(<ul>
                    {Object.entries(dayObject.timings).map(([mealName,timing])=>(
                      <li key={mealName}>
                       <p className="timeData"><p className="left">{mealName}</p><p classname="right">{timing.start}-{timing.end}</p></p> 
                      </li>
                    ))}
                  </ul>)}

                </div>
              ))}
            </section>
          
        </div>
      </div>
    </div>
    
  );
}