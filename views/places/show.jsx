const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='showplaces'>
                    <div className='aligner'>
                        <img className="img-fluid rounded" src={data.place.pic} alt={data.place.name} height={800} width={800} />
                        <h4>Located in {data.place.city}, {data.place.state}</h4>
                    </div>
                    <div className='aligner2'>
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <h4>Not Rated</h4>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>
                    </div>
                </div>
                <div>
                    <h2 className='comments border-top'>Comments</h2>
                    {comments}
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">Delete</button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show