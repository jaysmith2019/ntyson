<template>
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-10 col-md-offset-1">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-sm-8 col-md-6">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="../../static/imgs/africa.jpg" style="width: 72px; height: 72px;"> </a>
                            <div class="media-body">
                                <h4 class="media-heading"><span>Free Africa Tshirt</span></h4>
                                <h5 class="media-heading"> by <span>N'TYSON</span></h5>
                                <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                            </div>
                        </div></td>
                        <td class="col-sm-1 col-md-1" style="text-align: center">
                        <input type="email" class="form-control" id="exampleInputEmail1" value="3">
                        </td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                        <td class="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                        <td class="col-sm-1 col-md-1">
                        <button type="button" class="btn btn-danger">
                            <span class="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                    </tr>
                    <tr>
                        <td class="col-md-6">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="../../static/imgs/beardOil.jpg"  style="width: 72px; height: 72px;"> </a>
                            <div class="media-body">
                                <h4 class="media-heading"><span>Pomegranate Hair & Beard Oil</span></h4>
                                <h5 class="media-heading"> by <span>N'TYSON</span></h5>
                                <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                            </div>
                        </div></td>
                        <td class="col-md-1" style="text-align: center">
                        <input type="email" class="form-control" id="exampleInputEmail1" value="2">
                        </td>
                        <td class="col-md-1 text-center"><strong>$4.99</strong></td>
                        <td class="col-md-1 text-center"><strong>$9.98</strong></td>
                        <td class="col-md-1">
                        <button type="button" class="btn btn-danger">
                            <span class="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><h3>Total</h3></td>
                        <td class="text-right"><h3>$24.59</h3></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        <button type="button" class="btn btn-primary">
                           Continue <i class="fas fa-shopping-cart"></i>
                        </button></td>
                        <td>
                        <button type="button" class="btn btn-success">
                            Checkout <i class="fas fa-shopping-bag"></i>
                        </button></td>
                    </tr>
                </tfoot>
            </table>
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
