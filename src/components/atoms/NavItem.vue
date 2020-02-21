<template>
  <li class="nav-item">
    <a class="nav-link text-light" :class="activity" :href="url">
      {{name}}
    </a>
  </li>
</template>

<script>
export default {
  props:[
    "name",
    "activity",
    "url"
  ],
}
</script>