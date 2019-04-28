<template>
  <header class="header">
   <img class="headerpic" width="300" height="100" :src="require('../assets/congoII.png')" />
   <!-- <h1> {{ title }} </h1>
   <p> {{ info }} </p> -->
 </header>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style>
  .header {
    /* background-color: #6b9e6b; */
    z-index: 3;
    box-shadow:0px 2px 5px black;
  }
  .headerpic {
    margin-top: 15px;
    margin-left: 15px;
  }
</style>
