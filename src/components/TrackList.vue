<template>
  <div v-if="trackList.length" class="list" id="list-track">
      <TrackElement
        v-for="(track, i) in trackList"
        :key="track.id"
        :name="track.trackName"
        :album="track.album"
        :time="track.time"
        :artist="track.artist"
        :isFirst="i == 0"
        :isLast="i == trackList.length - 1"
      />
  </div>
  <div v-else class="placeholder">
    <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m274.081 262.617v-248.088l-196.394 50.65v192.092c-7.192-3.568-15.285-5.585-23.843-5.585-29.69 0-53.844 24.154-53.844 53.844s24.154 53.844 53.844 53.844 53.843-24.154 53.843-53.844v-146.633l136.394-35.176v90.637c-7.193-3.568-15.285-5.585-23.844-5.585-29.689 0-53.844 24.154-53.844 53.844s24.154 53.844 53.844 53.844 53.844-24.155 53.844-53.844zm-220.237 66.756c-13.148 0-23.844-10.696-23.844-23.843s10.696-23.843 23.844-23.843c13.147 0 23.843 10.696 23.843 23.843s-10.696 23.843-23.843 23.843zm53.843-240.949 136.394-35.176v39.492l-136.394 35.176zm112.55 198.037c-13.147 0-23.844-10.696-23.844-23.844s10.696-23.844 23.844-23.844 23.844 10.696 23.844 23.844-10.696 23.844-23.844 23.844z"/><path d="m378.478 203.277v192.092c-7.193-3.568-15.285-5.585-23.844-5.585-29.689 0-53.843 24.154-53.843 53.843s24.154 53.844 53.843 53.844 53.844-24.154 53.844-53.844v-146.633l103.522-26.697v-101.455zm-23.844 264.194c-13.147 0-23.843-10.696-23.843-23.844 0-13.147 10.696-23.843 23.843-23.843s23.844 10.696 23.844 23.843c0 13.148-10.696 23.844-23.844 23.844zm127.366-220.419-73.522 18.961v-39.491l73.522-18.962z"/><path d="m438.704 91.528h30v-12.898h12.899v-30h-12.899v-12.899h-30v12.899h-12.899v30h12.899z"/><path d="m95.039 438.269h-30v12.898h-12.898v30h12.898v12.899h30v-12.899h12.898v-30h-12.898z"/><path d="m467.924 428.627h30v30h-30z"/><path d="m181.394 404.67h30v30h-30z"/><path d="m253.292 349.5h30v30h-30z"/><path d="m319.717 65.103h30v30h-30z"/><path d="m378.478 123.026h30v30h-30z"/><path d="m15 26.488h30v30h-30z"/></g></svg>
    <p>Vue Music Player</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import { TrackType } from '@/store/types'
import TrackElement from '@/components/TrackElement.vue'

const tracks = namespace('Tracks')

@Component({
  components: {
    TrackElement
  }
})
export default class TrackList extends Vue {
  @tracks.Getter
  private trackList!: () => Array<TrackType>
}
</script>

<style lang="stylus" scoped>
.list
  background-color white
  width 100%
  border-radius 15px
  border 1px solid #e3e3e3
  margin-bottom 7rem

.placeholder
  width 40%
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin 0 auto
  margin-top 5rem

  p
    color white
    margin-top 3rem
    font-weight 700
    opacity 0.5

  svg
    width 100%
    height auto
    opacity 0.3

    path
      fill white
</style>
