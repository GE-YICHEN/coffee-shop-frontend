<template>
  <l-map
    ref="map"
    v-model:zoom="zoom"
    class="h-full w-full"
    :use-global-leaflet="false"
    :center="[25.01768558420301, 121.29862288250831]"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    ></l-tile-layer>
    <l-marker :lat-lng="[25.01768558420301, 121.29862288250831]">
      <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
    </l-marker>
  </l-map>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'

const zoom = 13

const iconWidth = ref(25)

const iconHeight = ref(25)

const iconUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPcUvR9iOw0bd74_FpNhS-HGQcRtLebwhJA&usqp=CAU'

const iconSize = [iconWidth.value, iconHeight.value]
</script>

<style lang="scss" scoped></style>
