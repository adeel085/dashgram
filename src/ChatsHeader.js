import { Link } from "react-router-dom";

function ChatsHeader() {
    return (
        <div
          class="chats-header d-flex justify-content-between align-items-center"
        >
          <div>
            <p class="cheaderp1">Angelheart.io</p>
            <p class="cheaderp2">2,978 members</p>
          </div>
          <div class="dashgram-stories">
            <div class="main-content">
              <div class="owl-carousel owl-theme">
                <div class="item">
                  <img
                    src="https://images.unsplash.com/photo-1631160271779-59716828e4ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://images.unsplash.com/photo-1630978962431-9647a4ac892e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://images.unsplash.com/photo-1631326657717-937a204d32a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://images.unsplash.com/photo-1631281655772-78dae2155c2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://images.unsplash.com/photo-1631261177958-b68a44d92a56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://images.unsplash.com/photo-1631298338669-7921e0c25422?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://images.unsplash.com/photo-1631304473389-5df538a671e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://images.unsplash.com/photo-1631326619303-2a83582e2d34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  />
                </div>
                <div class="item">
                  <img
                    src="https://images.unsplash.com/photo-1631162021444-8662d150d408?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  />
                </div>
              </div>
              <div class="owl-theme">
                <div class="owl-controls">
                  <div class="custom-nav owl-nav"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <i class="fas fa-search"></i>
            <Link to="/in-call">
              <i class="fas fa-phone-alt"></i>
            </Link>
            <Link to="/in-call">
              <i class="fas fa-video"></i>
            </Link>
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
    );
}

export default ChatsHeader;