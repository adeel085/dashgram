function MessageBar() {
    return (
        <div class="message-bar">
          <div class="input-group">
            <div
              class="
                input-group-prepend input-group-prepend-smile
                position-absolute
              "
            >
              <span class="input-group-text"><i class="far fa-smile"></i></span>
            </div>
            <textarea
              class="form-control c-text-area"
              placeholder="Message"
              rows="1"
            ></textarea>

            <div class="input-group-append">
              <span class="input-group-text"
                ><i class="fas fa-paperclip"></i
              ></span>
            </div>
            <div class="input-group-append">
              <span class="input-group-text"
                ><i class="fas fa-microphone"></i
              ></span>
            </div>
            <div class="input-group-append">
              <span class="input-group-text"
                ><img src="images/send.svg" alt=""
              /></span>
            </div>
            <div class="input-group-append">
              <span class="input-group-text post-btn">POST</span>
            </div>
          </div>
        </div>
    );
}

export default MessageBar;