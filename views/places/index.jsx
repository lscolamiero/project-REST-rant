const React = require('react')
const Def = require('../default')

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <div className="text-center">
          <h2>{place.name}</h2>
          <p>
            {place.cuisines}
          </p>
          <img className="img-fluid rounded" src={place.pic} alt={place.name} height={400} width={400} />
          <p>
            Located in {place.city}, {place.state}
          </p>
          Photo by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          <br />
          Photo by <a href="https://unsplash.com/@sevcovic23?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Petr Sevcovic</a> on <a href="https://unsplash.com/photos/people-inside-cafe-qE1jxYXiwOA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>

      </div>
    )
  })
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave about</h1>
        <div className="row">
          {placesFormatted}
        </div>
        <div className="text-center">
          <a href="/">
            <button className="btn-primary">Home</button>
          </a>
        </div>
      </main>
    </Def>
  )
}

module.exports = index