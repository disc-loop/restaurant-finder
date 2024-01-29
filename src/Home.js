function Home() {
  return (
    <div>
      <button>Login</button><br></br>
      <button>Guest</button><br></br>
      <button>New Meetup</button><br></br>
      <form action="">
        <label for="roomId">Join Meetup</label><br></br>
        <input type="text" id="roomId" name="roomId"/>
      </form><br></br>
      <button>Join</button>
    </div>
  )
}

export default Home
