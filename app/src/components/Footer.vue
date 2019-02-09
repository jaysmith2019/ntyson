<template>
<nav class="navbar fixed-bottom">
  <div class="container-fluid">
  <ul class="nav" style="margin-left:425px;">
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
  font-size: 24px;
}
.navbar-brand:hover {
  color: black;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
