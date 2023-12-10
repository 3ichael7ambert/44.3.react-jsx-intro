function Tweet({ username, name, date, message }) {
  return (
    <div className="tweet">
      <div className="tweetHeader">
        <span className="username">{username}</span>
        <span className="name">{name}</span>
        <span className="date">{date}</span>
      </div>
      <div className="tweetMessage">
        <p>{message}</p>
      </div>
    </div>
  );
}
