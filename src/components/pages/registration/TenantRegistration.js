function OwnerRegistration() {
  return (
    <div className="container app-container">
      <div className="container">
        <h3>Tenant Registration</h3>
        <form>
          <div className="form-group">
            <label>Name</label>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last name, First name"
              />
            </div>
          </div>
          <div className="form-group app-container">
            <label>Email</label>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="youremail@domain.com"
              />
            </div>
          </div>
          <div className="form-group app-container">
            <label>Address</label>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Building name and City"
              />
            </div>
          </div>
          <div className="form-group app-container">
            <label>Mobile number</label>
            <div className="form-group">
              <input type="tel" className="form-control" />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default OwnerRegistration
