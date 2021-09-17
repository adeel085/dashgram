import { Link } from "react-router-dom";

function DashgramGroups(props) {
    return (
        <section class="dashgram-groups">
        <div
          class="
            groups-search
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <a href=""> <i class="fas fa-bars"></i></a>
          <input
            type="text"
            class="form-control search-top-left"
            placeholder="Search"
          />
        </div>
        <div class="groupslist">
          <ul>
            <li class="selected-group">
              <Link style={{textDecoration: "none"}} to="/">
                <img src="angelheartlogo2.svg" alt="" />
                <div
                  class="
                    title-time
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                >
                  <p class="group-title-p1">AngelHeart.io</p>
                  <p>0:00 AM</p>
                </div>
                <div
                  class="
                    text-count
                    d-flex
                    align-items-center
                    justify-content-between
                  "
                >
                  <p>This is random placeholder text...</p>
                  <span class="badge badge-custom">13</span>
                </div>
              </Link>
            </li>
            {
                [...Array(10)].map((x, i) =>
                    <li key={i} >
                      <Link style={{textDecoration: "none"}} to="/messenger">
                        <img
                            src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                            alt=""
                        />
                        <div
                            class="
                            title-time
                            d-flex
                            align-items-center
                            justify-content-between
                            "
                        >
                            <p class="group-title-p1">Example Title</p>
                            <p>0:00 AM</p>
                        </div>
                        <div
                            class="
                            text-count
                            d-flex
                            align-items-center
                            justify-content-between
                            "
                        >
                            <p>This is random placeholder text...</p>
                            <span class="badge badge-custom">13</span>
                        </div>
                      </Link>
                    </li>
                )
            }
          </ul>
        </div>
      </section>
    );
}

export default DashgramGroups;