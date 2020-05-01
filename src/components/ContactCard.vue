<template>
  <v-card color="#f7f9e4">
    <v-list-item>
      <v-list-item-avatar height="40px" width="40px">
        <v-img :src="require('@/assets/'+contact.image)" contain />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="contacttitle">{{contact.name}}</v-list-item-title>
        <v-list-item-subtitle class="overline">{{contact.type}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-for="(contact,i) in contact.contacts" :key="i">
      <v-list-item-avatar>
        <v-icon>mdi-{{contact.icon}}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title style="white-space:break-spaces!important">{{contact.value}}</v-list-item-title>
        <v-list-item-subtitle>{{contact.sub}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    contact: Object
  }
}
</script>

<style>
.contacttitle {
  font-family: "Satisfy", cursive;
  font-size: 45px;
  font-weight: 400;
  font-style: italic;
  white-space: pre-line;
}
@media only screen and (max-width: 600px) {
  .contacttitle {
    font-size: 35px;
  }
}
</style>
