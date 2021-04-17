const contents = require("../../data/contents.json")

function Home() {
  return (
    <div className="container app-container">
      <div className="container">
        <h5 className="text-center">Home Page</h5>
        <div>
          <p>{contents.homepage}</p>
        </div>
        <div>
          <p>{contents.homepage}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
