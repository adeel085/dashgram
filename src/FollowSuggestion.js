function FollowSuggestion(props) {
    return (
        <div class="follow-suggestion">
            <div>
              <img
                src={props.image}
              />
              <span>{props.username}</span>
            </div>
            <a href="" class="follow-btn"> Follow </a>
        </div>
    );
}

export default FollowSuggestion;