<template>
    <div class="overflow-auto" style="max-height: 650px">
        <board-card v-for="i in 20" :key="i"></board-card>
    </div>
</template>

<script>
import BoardCard from "@/components/atoms/BoardCard.vue"

export default {
    components:{
        BoardCard
    }
}
</script>