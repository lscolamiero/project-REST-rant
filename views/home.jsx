const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div className="text-center">
                    <img src="/images/food-bowl.jpg" alt="Protein bowl" height={700} width={700} />
                    <div>
                    Photo by <a href="https://unsplash.com/@pwign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anh Nguyen</a> on <a href="https://unsplash.com/photos/vegetable-and-meat-on-bowl-kcA-c3f_3FE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                    <br />
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = home