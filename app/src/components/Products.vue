<template>
<div class="container-fluid">
<hr>
<div class="row">
  <div class="col-4">
  <div class="card" @click="visitProduct('../../static/imgs/beardOil.jpg')">
    <img class="card-img-top" src="../../static/imgs/beardOil.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Sweet Cherry Hair & Body Oil</h1>
      <hr>
      <h1 id="smallText" class="text-center">$15.00</h1>
    </div>
  </div>
  </div>
  <div class="col-4">
  <div class="card"  @click="visitProduct('../../static/imgs/beardOil.jpg')" >
    <img class="card-img-top" src="../../static/imgs/beardOil.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Bluegrass Hair & Body Oil</h1>
      <hr>
      <h1 id="smallText" class="text-center">$15.00</h1>
    </div>
  </div>
  </div>
  <div class="col-4">
  <div class="card"  @click="visitProduct(beardOil)" >
    <img class="card-img-top"  src="../../static/imgs/beardOil.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Pomegranate Hair & Body Oil</h1>
      <hr>
      <h1 id="smallText" class="text-center">${{pPrice}}.00</h1>
    </div>
  </div>
</div>
</div><br>
<div class="row">
  <div class="col-4">
  <div class="card" >
    <img class="card-img-top" src="../../static/imgs/africa.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Africa Tee</h1>
      <hr>
      <h1 id="smallText" class="text-center">$20.00</h1>
    </div>
  </div>
  </div>
  <div class="col-4">
  <div class="card" >
    <img class="card-img-top" src="../../static/imgs/tshirt.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Think Black Tee</h1>
      <hr>
      <h1 id="smallText" class="text-center">$15.00</h1>
    </div>
  </div>
  </div>
  <div class="col-4">
  <div class="card" >
    <img class="card-img-top" src="../../static/imgs/tshirt.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Black Pride Tee</h1>
      <hr>
      <h1 id="smallText" class="text-center">${{pPrice}}.00</h1>
    </div>
  </div>
</div>
</div><br>
<div class="row">
  <div class="col-4">
  <div class="card" >
    <img class="card-img-top" src="../../static/imgs/bscrub.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Pumpkin Body Scrub</h1>
      <hr>
      <h1 id="smallText" class="text-center">$20.00</h1>
    </div>
  </div>
  </div>
  <div class="col-4">
  <div class="card" >
    <img class="card-img-top" src="../../static/imgs/bscrub2.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Charcoal Body Scrub</h1>
      <hr>
      <h1 id="smallText" class="text-center">$15.00</h1>
    </div>
  </div>
  </div>
  <div class="col-4">
  <div class="card" >
    <img class="card-img-top" src="../../static/imgs/bscrub.jpg" alt="Card image">
    <div class="card-body">
      <h1 id="midSizeText" class="card-title text-center">Orange Charcoal Body Scrub</h1>
      <hr>
      <h1 id="smallText" class="text-center">${{pPrice}}.00</h1>
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
      sliding: null,
      pDisplay: 'none',
      imageDisplay: 'inline',
      pPrice: 10.00,
      sizeSelect: 'Small Bottle',
      products: []
    }
  },
  created () {
    console.log(this.sizeSelect)
    console.log(this.$store.state.selectedProduct)
  },
  methods: {
    mouseOver: function () {
      this.pDisplay = 'inline'
      this.imageDisplay = 'none'
    },
    mouseLeave: function () {
      this.pDisplay = 'none'
      this.imageDisplay = 'inline'
    },
    updatepPrice: function () {
      if (this.sizeSelect === 'Medium Bottle') {
        this.pPrice = 20
      } else if (this.sizeSelect === 'Large Bottle') {
        this.pPrice = 30
      }
    },
    visitProduct (x) {
      console.log(x)
      this.$store.commit('change', x)
      location.assign('/#/product')
    }
  }
}
</script>

<style scoped>
#menuH1 {
  font-size: 28px;
}
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
  padding-left: 0;
  padding-right:0;
  -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 4s; /* Firefox < 16 */
        -ms-animation: fadein 4s; /* Internet Explorer */
         -o-animation: fadein 4s; /* Opera < 12.1 */
            animation: fadein 4s;
}
.card:hover {
  box-shadow: 2px 2px 2px black;
  cursor:pointer;
}
.card-img-top {
  height:200px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
