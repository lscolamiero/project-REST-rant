const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form action="/places" method="POST">
                    <div className="from-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" type="text" name="name" required />
                    </div>
                    <div className="from-group">
                        <label htmlFor="pic">Place Pictures</label>
                        <input className="form-control" id="pic" type="url" name="pic" />
                    </div>
                    <div className="from-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" type="text" name="city" />
                    </div>
                    <div className="from-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" type="text" name="state" />
                    </div>
                    <div className="from-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" type="text" name="cuisines" required />
                    </div>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form