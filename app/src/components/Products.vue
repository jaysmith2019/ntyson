<template>
<div class="container-fluid">
<div class="row" id="center">
  <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#"><h1>Oils</h1></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><h1>Tshirts</h1></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><h1>Body</h1></a>
  </li>
</ul>
</div>
<hr>
<div class="row">
<div class="col-4">
  <div class="card" >
    <img class="card-img-top" src="../../static/imgs/65.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Mid Size N'Tyson Palmegranate Oil</h1>
      <hr>
      <h1 id="smallText" class="text-center">$15.00</h1>
    </div>
  </div>
</div>
<div class="col-4">
  <div class="card" >
    <img class="card-img-top" src="../../static/imgs/65.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Mid Size N'Tyson Palmegranate Oil</h1>
      <hr>
      <h1 id="smallText" class="text-center">$15.00</h1>
    </div>
  </div>
</div>
<div class="col-4">
  <div class="card" >
    <img class="card-img-top" src="../../static/imgs/65.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Mid Size N'Tyson Palmegranate Oil</h1>
      <hr>
      <h1 id="smallText" class="text-center">$15.00</h1>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '',
      sliding: null
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#midSizeText {
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
#smallText {
  color: green;
  font-weight: 600;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
}
#center {
  margin: auto;
  width: 40%;
}
hr {
  box-shadow: 2px 2px 2px gray;
  border: 2px solid gray;
}
.card {
  box-shadow: 2px 2px 2px gray;
  padding-left: 0;
  padding-right:0;
}
.card-img-top {
  box-shadow: 2px 2px 2px gray;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
