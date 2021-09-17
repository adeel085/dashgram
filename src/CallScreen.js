import { Link } from "react-router-dom";

function CallScreen() {
    return (
        <section class="call-options-centre">
            <div class="call-options-centre-top">
            <div>
                <p class="coct-p1">Kathy Jackson, Mr Robert</p>
            </div>
            <div class="coct-div-1">
                <a href="" class="cocb-btn"><i class="fas fa-user-plus"></i></a>

                <p class="coct-p2">33:21</p>
            </div>
            </div>
            <div class="call-options-centre-middle">
            <div class="cocm-container">
                <div>
                <img
                    src="https://images.unsplash.com/photo-1616435194395-850bd264a8fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                    alt=""
                />
                </div>
                <div>
                <img
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=644&q=80"
                    alt=""
                />
                </div>
            </div>
            </div>
            <div class="call-options-centre-bottom">
            <div>
                <a href="" class="cocb-btn"><i class="fas fa-record-vinyl"></i></a>
            </div>
            <div>
                <a href="" class="cocb-btn"><i class="fas fa-microphone"></i></a>
                <a href="" class="cocb-btn"><i class="fas fa-video"></i></a>
                <Link style={{color: "#ffffff"}} class="cocb-btn call-decline" to="/">
                    <i class="fas fa-phone-slash"></i>
                </Link>
            </div>
            <div>
                <a href="" class="cocb-btn" title="Chat"
                ><i class="fas fa-comment-dots"></i
                ></a>
                <a href="" class="cocb-btn" title="React"
                ><i class="far fa-smile"></i
                ></a>
                <a href="" class="cocb-btn" title="Share Screen"
                ><i class="fas fa-desktop"></i
                ></a>

                <a href="" class="cocb-btn"><i class="fas fa-ellipsis-h"></i></a>
            </div>
            </div>
        </section>
    );
}

export default CallScreen;