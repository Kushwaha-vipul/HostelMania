import { useAuth } from "../store/auth";
export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section>
          <div className="about-container">
          <div className="about-heading">
            <div id="aboutId">
              <h1>About Us</h1>
            </div>
            <span class="inverted-comma">
              <div id="paragraphAbout">
                <p>
                  Dear {user?.username ? user.username : "student,"}
                  <br />
                  Welcome , This hostel is only available for Institute students. It provides you a inclusive, safe, and supportive environment and  we encourage personal growth, cultural exchange, and lifelong friendships. All the hostel related information is given below.
                </p>
              </div>
            </span>

            <div class="ag-format-container">
              <div class="ag-courses_box">
                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                      Total rooms:200,
                      <br/>
                      Room occupancy : 3 students 
                      <br/>
                      Total floor : 6
                      <br/>
                      Total student : 500
                    </div>

                    {/* <div class="ag-courses-item_date-box">
                      Start:
                      <span class="ag-courses-item_date">04.11.2022</span>
                    </div> */}
                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                    Each Room have 3:
                     <br/>
                     Beds,Table and Chair,Almirah,LEd,
                     <br/>Fans and sockets ,for each student  
                  

                    </div>

                    {/* <div class="ag-courses-item_date-box">
                      Start:
                      <span class="ag-courses-item_date">04.11.2022</span>
                    </div> */}
                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                    Main-office : Ground floor
                    <br/>
                      Warden Room : G9,
                      <br/>
                      caretaker Room : G10,
                     
                    </div>

                    {/* <div class="ag-courses-item_date-box">
                      Start:
                      <span class="ag-courses-item_date">04.11.2022</span>
                    </div> */}
                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                      Sports:<br/>
                     Gnd floor : 2 Badminton Court<br/>
                      1st floor: 1 Table Tennis Room
                      <br/>
                      Study Room : 2nd floor
                    </div>

                    {/* <div class="ag-courses-item_date-box">
                      Start:
                      <span class="ag-courses-item_date">04.11.2022</span>
                    </div> */}
                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                    Total Mess : 2,
                    <br/>
                   Mess Location : 1,2 floor
                    Watercooler in each Mess:3 
                    <br/>
                    Occupancy:300 students
                      
                    </div>

                    {/* <div class="ag-courses-item_date-box">
                      Start:
                      <span class="ag-courses-item_date">30.11.2022</span>
                    </div> */}
                  </a>
                </div>

                <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                    Total Washroom : 24,
                     <br/>
                     Location : corners in every floor
                     Water cooler : available in every floor
                  
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutImage">
            <img
              src="images/hostelaboutImage.jpeg"
              height="800px"
              width="100%"
              alt="aboutImage"
            />
          </div>
          </div>
        </section>
      </main>
    </>
  );
};
