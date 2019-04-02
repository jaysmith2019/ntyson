<template>
<div class="row">
  <div class="col-12 col-sm-12 col-lg-6 col-lg-6">
    <div>
    <h1 id="imageh1" class="text-center">Health</h1>
    <img  id="responsive-left" src="../../static/imgs/darkskin.jpg" class="rounded" alt="Hair Products">
    </div>
     <div>
    <h1 id="imageh1" class="text-center">Oils</h1>
    <img  id="responsive-left" src="../../static/imgs/earringbeard.png" style="height:528px;" class="rounded" alt="Oils">
    </div>
  </div>
  <div class="col-12 col-sm-12 col-lg-6 col-lg-6">
    <div>
    <h1 id="imageh1" class="text-center">Beard</h1>
    <img id="responsive-right" src="../../static/imgs/bmb.jpg" class="rounded" alt="Beard">
    </div>
    <div>
    <h1 id="imageh1" class="text-center">Hair</h1>
    <img id="responsive-right" src="../../static/imgs/violaDavis.jpg" class="rounded" alt="Hair Care">
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
@import url('https://fonts.googleapis.com/css?family=Tangerine');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
#bold {
  font-weight: bold;
  border: solid 2px black;
  text-shadow: 2px 2px black;
}
#imageh1 {
  z-index: 99;
  font-weight:bold;
  color: white;
  font-family: 'Tangerine', sans-serif;
  text-shadow: 2px 2px black;
  margin-top:5px;
  padding-top:-5px;
  position: relative;
  font-size:38px;
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
  -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 4s; /* Firefox < 16 */
        -ms-animation: fadein 4s; /* Internet Explorer */
         -o-animation: fadein 4s; /* Opera < 12.1 */
            animation: fadein 4s;
}
#listh1 {
  font-family: 'Roboto Condensed', sans-serif;
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
  height:145px;
}
#moveUp {
  margin-top:-40px;
}
img {
  transition: opacity .5s;
}
@media only screen and (max-width: 400px) {
#responsive-left {
  height: 10%;
  width: 98%;
  z-index: -1;
  margin-top: -50px;
  box-shadow: 2px 2px 2px 2px gray;
}
#responsive-right {
  height: 10%;
  width: 98%;
  margin-top: -50px;
  z-index: -1;
  box-shadow: 2px 2px 2px 2px gray;
}
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
