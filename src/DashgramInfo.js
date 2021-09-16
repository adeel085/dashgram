import NetworkOption from "./NetworkOption";
import FollowSuggestion from "./FollowSuggestion";
import ChatBox from "./ChatBox";

function DashgramInfo(props) {
    return (
      <section class="dashgram-info">
        <input
          type="text"
          class="form-control search-top-left"
          placeholder="Search Dashgram"
        />
        <div class="img-grid">
          <div class="row no-gutters">
            <div class="col-4">
              <img
                class="b-t-l-radius"
                src="https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                src="https://images.unsplash.com/photo-1628191081676-8f40d4ce6c44?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="b-t-r-radius"
                src="https://images.unsplash.com/photo-1629334697871-16eb3935db52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="b-b-l-radius"
                src="https://images.unsplash.com/photo-1630988161010-cee47a39c1a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                src="https://images.unsplash.com/photo-1630687576589-43a3bc515e85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
                alt=""
              />
            </div>
            <div class="col-4">
              <img
                class="b-b-r-radius"
                src="https://images.unsplash.com/photo-1630713815198-17ff8a8a7103?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        
        <div class="network-options">
          <p class="mn-title">Manage Network</p>
          <NetworkOption title="Contacts" icon="far fa-address-book"count="74" />
          <NetworkOption title="Groups" icon="fas fa-users"count="33" />
          <NetworkOption title="Followers" icon="fas fa-user-friends"count="33" />
          <NetworkOption title="Videos" icon="fas fa-film" count="64" />
          <NetworkOption title="Pages" icon="far fa-building" count="41" />
          <NetworkOption title="Hashtags" icon="fas fa-hashtag" count="23" />
          <NetworkOption title="Trending" icon="fas fa-poll-h" count="11" />
        </div>

        <div class="dashgram-follow-suggestions">
          <p class="mn-title">Follow Suggestions</p>
          <FollowSuggestion username="mr.robert" image="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80" />
          <FollowSuggestion username="kathy.banks" image="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"/>
          <FollowSuggestion username="lauren" image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
          <FollowSuggestion username="david.jackson" image="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=812&q=80" />
        </div>

        {props.chatBoxOpen == true &&
          <ChatBox setChatBoxOpen={props.setChatBoxOpen}/>
        }
      </section>
    );
}

export default DashgramInfo;