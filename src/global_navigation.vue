<style>
</style>

<template>
<ul>
  <li v-for="m in menu"><a v-link="m.link">{{ m.text }}</a></li>
</ul>
</template>

<script>
export default {
  data: function(){
    return {
      menu: [
        {text:'menu1', link: '/menu1'},
        {text:'menu2', link: '/menu2'},
        {text:'menu3', link: '/menu3'}
      ]
    }
  }
}
</script>
