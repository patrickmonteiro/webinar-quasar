<template>
  <q-page class="container">
    <div class="row">
          <q-card class="col-md-3 col-sm-4 col-xs-12">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section>
         Esse aqui será o texto do artigo!
        </q-card-section>
          <q-card-actions :align="'right'">
          <q-btn class="full-width" color="secondary" icon="search" >Visualizar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
