import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <main>
        <section>
          <div className="parentHpCont">
            <div className="bgImagesHomePage">
              <img
                src="images/hosteImage.jpg"
                alt="hostelImage"
                style={{ opacity: 0.5, width: "100%", height: "150%" }}
              />
            </div>
            <div className="cardstyleHomepage grid">
              <div className="card">
                <div className="cover item-a">
                  <h1>
                    Fee
                    <br />
                    Gateway
                  </h1>

                  <div className="card-back">
                
                  <li className="card-item hoverable"><NavLink to="/messfee">Mess Fee </NavLink></li>
                  <li className="card-item hoverable"><NavLink to="/hostefee">Hostel Fee</NavLink></li>
                 
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cover item-b">
                  <h1>
                    Notices
                    <br />
                    &
                    <br />
                    Announcements
                  </h1>

                  <div className="card-back">
                 
                  <li className="card-item hoverable"><NavLink to="/messfee">Notices </NavLink></li>
                  <li className="card-item hoverable"><NavLink to="/hostefee">Announcements</NavLink></li>
                 
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="cover item-c">
                  <h1>
                    Mess
                    <br />
                    Management
                  </h1>

                  <div className="card-back">               
                    <li className="card-item hoverable"><NavLink to="/messtimetable">TimeTable</NavLink></li>
                  </div>
                </div>
              </div>
              {/* Add more card divs as needed */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
