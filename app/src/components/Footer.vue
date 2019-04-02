<template>
<nav class="navbar fixed-bottom">
  <div class="container">
  <ul class="nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Terms & Conditions</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Privacy Policy</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Copyright &copy; N'Tyson 2019</a>
  </li>
</ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      year: ''
    }
  },
  created () {
    this.year = new Date().getFullYear()
  }
}
</script>
<style scoped>
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
}
.navbar-brand:hover {
  color: black;
}
.nav-item {
  padding-left:35px;
  padding-right:35px;
}
@media only screen and (min-width:601px) and (max-width:1024px) {
  .nav-item {
    padding-left: 5px;
    padding-right: 5px;
    margin-right: -20px;
  }
}
@media only screen and (min-width:400px) and (max-width: 600px) {
.nav-item{
  padding-left:0px !important;
  padding-right:0px !important;
}
.nav-link {
  margin-right:-25px;
  font-size:8px;
  font-weight:700;
}
}
@media only screen and (max-width: 380px) {
.nav-item{
  padding-left:0px !important;
  padding-right:0px !important;
}
.nav-link {
  margin-right:-25px;
  font-weight:800;
  font-size:6px;
}
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
