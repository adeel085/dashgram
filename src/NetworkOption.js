function NetworkOption(props) {
    return (
        <div
            class="d-flex justify-content-between align-items-center n-o-div"
          >
            <div class="icon-title">
              <i class={props.icon}></i> <span> {props.title}</span>
            </div>
            <span>{props.count}</span>
        </div>
    );
}

export default NetworkOption;