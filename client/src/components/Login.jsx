import React from "react";
import { Outlet ,Link} from "react-router-dom";
import '../style/Home.css'

export const Login=()=>{
    return <div id="login">
    <h1>התחבר</h1>
    {/* <form>
      <input type="text" placeholder="שם משתמש"/>
      <input type="password" placeholder="סיסמה"/>
      <input type="submit" placeholder="לשליחה" />
    </form>
     */}
     <form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
    <Link to={'/signin'}>אינך רשום עדיין?לרישום</Link>
    <Outlet/>
    </div>
}