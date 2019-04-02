<template>
<div class="container-fluid">
<hr>
<div class="row">
  <div class="col-6">
  <div class="card" @click="visitProduct('../../static/imgs/beardOil.jpg')">
    <img class="card-img-top" src="../../static/imgs/beardOil.jpg" alt="Card image">
  </div>
  </div>
  <div class="col-6">
  <div class="card">
    <p class="more"><Strong>Sweet Cherry Hair & Beard Oil:</strong>&nbsp;The sweet cherry hair and beard oil by N'Tyson is a sweet scented oil that helps repair damaged hair.  Not only does this product repair damaged hair it also keeps healthy hair shining like it is meant to and keeps your hair hydrated.  This is a unisex product and works on all hair types.</p>
    <div class="row">
    <div class="col-3">
    <label>Select Size:</label>
    </div>
    <div class="col-4" style="padding-top: 0;padding-left: 0">
       <select v-model="size" @change="onChange($event)" class="form-control pull-right "><option value="small" default>S</option><option value="medium">M</option><option value="large">L</option></select>
    </div>
    <div class="col-5"></div>
    </div><br><br>
    <div class="row">
    <div class="col-12">
    <label>Price:</label> <span id="price">${{price}}.00</span>
    </div>
    </div><br><br>
    <div class="row">
      <button class="btn btn-block btn-primary">Add To Cart &nbsp; <i class="fas fa-shopping-cart"></i></button>
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
      size: '',
      imageDisplay: 'inline',
      price: 12.00,
      sizeSelect: 'Small Bottle',
      products: []
    }
  },
  created () {
    console.log(this.size)
    console.log(this.$store.state.selectedProduct)
    this.size = 'small'
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
    onChange (event) {
      console.log(event.target.value)
      if (event.target.value === 'medium') {
        this.price = 22
      } else if (event.target.value === 'large') {
        this.price = 36
      }
    }
  }
}
</script>

<style scoped>
.card {
  border:none;
}
#price {
  font-size: 18px;
  color: green;
  font-weight:800;
}
label {
  font-size: 18px;
  font-weight: bold;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
