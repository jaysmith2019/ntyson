<template>
<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="/#/">N'Tyson</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor03">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/#/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/products">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/products">Testimonials</a>
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
</style>
