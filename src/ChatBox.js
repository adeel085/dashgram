function ChatBox(props) {
    return (
        <div class="dashgram-chatbox">
          <div class="chatbox-header">
            <div>
              <img
                src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
              />
              <span>kathy.banks</span>
            </div>
            <div class="chat-box-header-options">
              <i class="fas fa-expand-arrows-alt"></i>

              <i class="fas fa-phone-alt"></i>
              <i class="fas fa-video"></i>
              <i class="fas fa-times chatbox-closer" onClick={() => {
                props.setChatBoxOpen(false);
              }}></i>
            </div>
          </div>
          <div class="chatbox-chat">
            <div class="chat-bubble-container2">
              <div class="chat-bubble-1">
                Lorem ipsum, dolor sit amet consectetur
              </div>
            </div>
            <div class="chat-bubble-container">
              <div class="chat-bubble-2-2">Lorem ipsum, dolor sit amet!</div>
            </div>
            <div class="chat-bubble-container2">
              <div class="chat-bubble-1">
                Lorem ipsum, dolor sit amet consectetur
              </div>
            </div>
            <div class="chat-bubble-container">
              <div class="chat-bubble-2-2">Lorem ilor sit amet!</div>
            </div>
            <div class="chat-bubble-container2">
              <div class="chat-bubble-1">Lorem ipsum, dolor</div>
            </div>
            <div class="chat-bubble-container">
              <div class="chat-bubble-2-2">Lorem ipsum, dolor sit amet!</div>
            </div>
            <div class="chat-bubble-container2">
              <div class="chat-bubble-1">Lorem ipsum, dolor sit</div>
            </div>
            <div class="chat-bubble-container">
              <div class="chat-bubble-2-2">Lorem ipsum, dolor sit amet!</div>
            </div>
          </div>
          <div class="chatbox-messageip">
            <div class="input-group">
              <div
                class="
                  input-group-prepend input-group-prepend-smile
                  position-absolute
                "
              >
                <span class="input-group-text"
                  ><i class="far fa-smile"></i
                ></span>
              </div>
              <textarea
                class="form-control chatbox-textarea"
                placeholder="Message"
                rows="1"
              ></textarea>

              <div class="input-group-append">
                <span class="input-group-text input-group-text-custom"
                  ><i class="fas fa-paperclip"></i
                ></span>
              </div>
              <div class="input-group-append">
                <span class="input-group-text input-group-text-custom"
                  ><i class="fas fa-microphone"></i
                ></span>
              </div>
              <div class="input-group-append">
                <span class="input-group-text input-group-text-custom2"
                  ><img src="images/send.svg" alt=""
                /></span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default ChatBox;