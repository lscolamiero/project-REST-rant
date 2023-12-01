const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className='showplaces'>
                    <div className='aligner'>
                        <img className="img-fluid rounded" src={data.place.pic} alt={data.place.name} height={800} width={800} />
                    </div>
                    <div className='aligner2'>
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <h4>Not Rated</h4>
                        <h2>Description</h2>
                        <h4>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}.</h4>
                    </div>
                </div>
                <div>
                    <h1 className='comments border-top'>Comments</h1>
                    <h4 className='text-center'>No comments yet!!</h4>
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