<template>
  <div class="main">
    <Struc>
      <div slot="header">
        <Header></Header>
      </div>
      <div slot="nav">
        <NavLeft></NavLeft>
      </div>
      <div slot="navbar">
        <Navbar></Navbar>
      </div>
    </Struc>
  </div>
</template>
<script>
import Struc from '@/components/Struc'
import Header from '@/components/Header'
import NavLeft from '@/components/NavLeft'
import Navbar from '@/components/Navbar'
export default {
  name: 'TestPage',
  data () {
    return {
    }
  },
  components: {
    Struc,
    Header,
    NavLeft,
    Navbar
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
  .main{
    height: 100%;
    width: 100%;
  }
</style>
