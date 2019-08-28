<template>
  <q-page padding>
    <div v-if="post.content">
      <p class="text-h6" v-html="post.title.rendered"  ></p>
      <div v-html="post.content.rendered">
      </div>
    </div>
    <q-inner-loading :showing="visible">
      <q-spinner size="50px" color="primary" />
    </q-inner-loading>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Post',
  data () {
    return {
      content: {},
      visible: true
    }
  },
  props: {
    id: {
      type: Number
    }
  },
  mounted () {
    if (this.id) {
      this.setPost(this.id)
        .then(() => {
          this.visible = false
        })
    } else {
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState('Posts', ['post'])
  },
  methods: {
    ...mapActions('Posts', ['setPost']),
    ...mapMutations('Posts', ['CLEAR_POST'])
  },
  destroyed () {
    this.CLEAR_POST()
  }
}
</script>

<style>
</style>
