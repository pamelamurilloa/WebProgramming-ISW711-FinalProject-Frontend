import React from 'react'

function frontPage() {
  return (
    <div id="background-band">
    <div className="main-title">
        <h1 id="tube-logo big-title">Tube</h1>
        <h2 id="kids-logo big-title">Kids</h2>
    </div>
    <div className="subtitle top-left">
        <h3>Pamela Murillo</h3>
        <h4>I Project</h4>
        <h4>ISW-711</h4>
    </div>
</div>
  )
}

export default frontPage

{/* <body>
    <div className="circle-form">
        <h2 id="front-page">Login</h2>
        <form id="login-form">
            <!-- <label for="email">First name</label> -->
            <input className="input-form" type="email" id="email" name="email" placeholder="email" required>

            <!-- <label for="password">Password</label> -->
            <input className="input-form password" type="password" id="password" name="password" placeholder="password" required>

            <input className="main-button" type="submit" value="Confirm">
            <a class="main-button" href="register.html">Register</a>
        </form>
    </div>

    <script src="../scripts/user-login.js"></script>
</body> */}
