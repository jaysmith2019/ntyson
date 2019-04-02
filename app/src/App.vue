<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
    <router-view/>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'bottom': Footer
  },
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

<style>
@import url("https://use.fontawesome.com/releases/v5.7.2/css/all.css");
#app {
  padding: 0px 0px 0px 0px;
}
.nav-link:hover {
  color: black;
  text-decoration: underline;
}
body {
  background-color: #fff;
}
#text-black {
  color: black;
}
#text-white {
  color:#FFFFFF;
  text-shadow: 2px 2px black;
  font-weight:bold;
}
#footer-text {
  color: #fff;
  font-weight: bold;
}
header {
  margin-top: 5px;
  box-shadow: 5px 10px 8px black;
}
p {
  font-size: 20px;
}
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
