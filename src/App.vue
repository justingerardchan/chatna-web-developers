<template>
  <v-app id="inspire" light>
   <v-toolbar>
    <v-toolbar-title id="tbLocation" v-model="toolbarTitle"><small>{{ toolbarTitle }}</small></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <div id="profileLocation" class="text-xs-center">
      <v-btn fab small>
      <v-icon dark>person</v-icon>
    </v-btn>
  </div>
    </v-toolbar-items>
  </v-toolbar>
  <v-navigation-drawer persistent width="220" v-model="drawer" overflow dark>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="./assets/chatna.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title style="cursor: pointer">
              <template><chat-na-dialog></chat-na-dialog></template>
        </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
    </v-list>
     <v-list>
          <v-list-group v-for="item in items" v-bind:key="item.title">
            <v-list-tile id="vlistStyle" 
            slot="item" 
            @click="changeTitle"
            router
            :to="item.link">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
  </v-navigation-drawer>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'home', link: '/home' },
          { title: 'View Visitors', icon: 'bubble_chart', link: '/visitor' },
          { title: 'Chat History', icon: 'history', link: '/chat-history' },
          { title: 'Chat Monitoring', icon: 'laptop', link: '/chat-monitoring' },
          { title: 'Map', icon: 'map', link: '/map' },
          { title: 'Settings', icon: 'settings', items: [ { title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }, { title: 'Item 4' }, { title: 'Item 5' } ] },
          { title: 'Notifications', icon: 'notifications', link: '/notifications' }
        ],
        toolbarTitle: '',
        right: null
      }
    },
    methods: {
      changeTitle () {
        if (this.$route.path === '/home') {
          this.toolbarTitle = 'Home'
        } else if (this.$route.path === '/visitor') {
          this.toolbarTitle = 'Visitor'
        } else if (this.$route.path === '/chat-history') {
          this.toolbarTitle = 'Chat History'
        } else if (this.$route.path === '/chat-monitoring') {
          this.toolbarTitle = 'Chat Monitoring'
        } else if (this.$route.path === '/map') {
          this.toolbarTitle = 'Map'
        } else if (this.$route.path === '/notifications') {
          this.toolbarTitle = 'Notifications'
        }
      }
    }
  }

</script>


<style lang="stylus">
  @import './stylus/main'
</style>