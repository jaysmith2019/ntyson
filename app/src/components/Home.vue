<template>
<div class="row">
  <div class="col-12 col-sm-12 col-lg-6 col-lg-6">
    <div>
    <h1 id="imageh1" class="text-center">Health</h1>
    <img  id="responsive-left" src="../../static/imgs/56.jpg" class="rounded" alt="Hair Products">
    </div>
     <div>
    <h1 id="imageh1" class="text-center">Oils</h1>
    <img  id="responsive-left" src="../../static/imgs/65.jpg" class="rounded" alt="Oils">
    </div>
    <div class="jumbotron">
    <div class="row" id="moveUp">
    <div class="col-4"><h1 id="listh1">Oils that restore the shine.</h1>
    <h1 id="listh1">Oils that make you smile.</h1>
    </div>
    <div class="col-4">
      <h1 id="listh1">Oils that restore the shine.</h1>
      <h1 id="listh1">Oils that define a culture.</h1>
    </div>
     <div class="col-4">
    <h1 id="listh1">Oils that repair damaged roots.</h1>
    <h1 id="listh1">Oils that show off your beauty.</h1>
    </div>
    </div>
    </div>
  </div>
  <div class="col-12 col-sm-12 col-lg-6 col-lg-6">
    <div>
    <h1 id="imageh1" class="text-center">Hair</h1>
    <img id="responsive-right" src="../../static/imgs/oils.jpg" class="rounded" alt="Beard">
    </div>
    <div>
    <h1 id="imageh1" class="text-center">Beard</h1>
    <img id="responsive-right" src="../../static/imgs/66.jpg" class="rounded" alt="Hair Care">
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
    relocateProducts () {
      window.location.replace('/#/products')
    },
    relocateHaircuts () {
      window.location.replace('/#/haircuts')
    }
  }
}
</script>

<style scoped>
#bold {
  font-weight: bold;
  border: solid 2px black;
  text-shadow: 2px 2px black;
}
#imageh1 {
  z-index: 99;
  font-weight:bold;
  color: white;
  text-shadow: 2px 2px black;
  text-decoration: underline;
}
#responsive-left {
  height: 25%;
  width: 100%;
  z-index: -1;
  margin-top: -50px;
  box-shadow: 2px 2px 2px 2px gray;
}
#responsive-right {
  height: 25%;
  width: 100%;
  margin-top: -50px;
  z-index: -1;
  box-shadow: 2px 2px 2px 2px gray;
}
#shadow {
  border: solid 2px black;
}
.col-lg-6{
    padding-right:0;
    padding-left:0;
    padding-top:0;
}
img {
  position: relative;
  z-index: -1;
}
#listh1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 18px;
  font-weight: bold;
  color:black;
  text-shadow: none !important;
  padding-top:0;
}
.jumbotron {
  border: 2px solid gray;
  box-shadow: 2px 2px 2px gray;
  background-color: white;
  height:146px;
}
#moveUp {
  margin-top:-40px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
