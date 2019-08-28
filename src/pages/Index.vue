<template>
  <q-page class="container">
    <div class="row q-col-gutter-sm">
      <div class="col-md-4 col-sm-4 col-xs-12 q-mt-sm"  v-for="(post, index) in posts" :key="index">
        <q-card class="shadow-6 full-height" >
        <img :src="post.jetpack_featured_media_url" style="max-height: 200px">

        <q-card-section class=" q-mb-xl">
          <div class="text-body1 text-bold">{{ post.title.rendered }}</div>
        </q-card-section>

         <q-card-actions class="absolute-bottom">
          <q-btn class="full-width " color="blue-9" @click="readPost(post.id)" >Visualizar</q-btn>
        </q-card-actions>
      </q-card>
      </div>
    </div>
    <q-inner-loading :showing="visible">
      <q-spinner size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      visible: true
    }
  },
  mounted () {
    // this.$q.loading.show()
    this.setPosts()
      .then(() => {
        // this.$q.loading.hide()
        this.visible = false
      })
  },
  computed: {
    ...mapState('Posts', ['posts'])
  },
  methods: {
    ...mapActions('Posts', ['setPosts']),
    readPost (id) {
      this.$router.push({ name: 'post', params: { id: id } })
    }
  }
}
</script>
