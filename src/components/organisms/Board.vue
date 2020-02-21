<template>
<div>
    <organism-title>Message Board</organism-title>
    <div class="overflow-auto" style="max-height: 650px">
        <board-card v-for="i in 20" :key="i"></board-card>
    </div>
</div>
</template>

<script>
import BoardCard from "@/components/atoms/BoardCard.vue"
import OrganismTitle from "@/components/atoms/OrganismTitle.vue"

export default {
    components:{
        BoardCard,
        OrganismTitle
    }
}
</script>