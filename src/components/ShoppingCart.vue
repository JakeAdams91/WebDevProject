<template>
  
</template>

<script>
export default {
  name: 'ShoppingCart',
  filters: {
    percentFmt (number) {
      let percent = number * 100
      let percentStr = `${percent}%`
      return percentStr
    }
  }
}
</script>

<style>
  
</style>
