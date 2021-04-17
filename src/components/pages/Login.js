function Login() {
  return (
    <div className="container app-container">
      <div className="container-fluid">
        <form>
          <div className="form-group">
            <label>Email</label>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="youremail@domain.com"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="your password"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
