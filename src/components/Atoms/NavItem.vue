<template>
  <li class="nav-link" :class="activity" href="#">{{name}}</li>
</template>

<script>
export default {
  props:[
    "name",
    "activity"
  ]

}
</script>
