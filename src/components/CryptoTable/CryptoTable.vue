<template lang="pug">
    div.crypto-table__container
        div.crypto-table__block

</template>

<script lang="ts">

import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})
export default class CryptoTable extends Vue {
    
}
</script>

<style lang="sass">

.crypto
    &-table
        &__container
            height: 100%
            display: flex
            justify-content: center
            align-items: center
        &__block 
            -webkit-box-shadow: -1px 3px 10px 2px rgba(34, 60, 80, 0.2)
            -moz-box-shadow: -1px 3px 10px 2px rgba(34, 60, 80, 0.2)
            box-shadow: -1px 3px 10px 2px rgba(34, 60, 80, 0.2)
            width: 600px 
            height: 500px
</style>