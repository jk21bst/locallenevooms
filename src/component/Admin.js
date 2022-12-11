import React from 'react'

export default function Admin() {
  return (
    <div>
      <div className>
<label for="exampleFormControlInput1" className="form-label">UserId</label>
<input type="UserId" className="form-control" id="exampleFormControlInput1" placeholder="Enter UserId"/>
</div>
<div className="mb-3">
<label for="passwordFormControlInput" className="form-label">Password</label>
<input type="Password" className="form-control" id="passwordFormControlInput" placeholder="EnterPassword"/>
</div>
<button type="button" className="btn btn-success mx-1">Submit</button>
<button type="button" className="btn btn-secondary mx-1">Forgot Passwor?</button>
    </div>
  )
}

