<template>
<nav class="navbar navbar-expand bg-white">
  <a class="navbar-brand" href="/#/"><b>N'TYSON</b></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" id="fontweight" href="/#/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="fontweight" href="/#/products">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="fontweight" href="/#/testimonials">Testimonials</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="fontweight" href="/#/login">Log In</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="fontweight" href="/#/signup">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/cart"><i class="fas fa-shopping-cart"></i></a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar {
  background-color: #fff;
}
.nav-link {
  color: black;
  font-weight: 500;
}
.navbar-brand {
  color: black;
  font-weight:bold;
  font-size: 24px;
}
.navbar-brand:hover {
  color: black;
}
hr {
  border: 1px solid black;
}
#fontweight {
  font-weight: 500;
}
@media only screen and (min-width:401px) and (max-width: 600px) {
.nav-item{
  padding-left:0px !important;
  padding-right:0px !important;
}
.nav-link {
  margin-right:-10px;
  font-size:10px;
}
}
@media only screen and (max-width: 400px) {
  .nav-link {
    font-size: 8px;
    font-weight:bold;
  }
  .navbar-brand {
  color: black;
  font-weight:bold;
  font-size: 12px;
  margin-left: 4px;
}
}
</style>
