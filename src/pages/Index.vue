<template>
  <q-page class="container">
    <div class="row q-col-gutter-sm">
      <div class="col-md-3 col-sm-4 col-xs-12 q-mt-sm"  v-for="(post, index) in posts" :key="index">
        <q-card style="min-height: 23rem">
        <img :src="post.jetpack_featured_media_url" style="max-height: 200px">

        <q-card-section class="absolute-bottom q-mb-xl">
          <div class="text-h6">{{ post.title.rendered }}</div>
          <!-- <div class="text-subtitle2">by John Doe</div> -->
        </q-card-section>
        <!-- <q-card-section v-html="post.excerpt.rendered"></q-card-section> -->
        <div class="absolute-bottom">
          <q-btn class="full-width absolut-bottom" color="blue-9" icon="search" >Visualizar</q-btn>
        </div>
        <!-- </q-card-actions> -->
      </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PageIndex',
  mounted () {
    this.setPosts()
  },
  computed: {
    ...mapState('Posts', ['posts'])
  },
  methods: {
    ...mapActions('Posts', ['setPosts'])
  }
}
</script>
