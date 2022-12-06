<!-- lang="pug" 加了才可以用 pug 語法 -->
<template lang="pug">
TopImageVue
#middle
  #left
    LeftMenuVue
    LeftUpdateVue
  #right
    RightMarqueeVue
    //- router-view 插件 把 router裡的的元件渲染出來
    #page
      router-view
FooterTextVue
</template>

<script setup>
import TopImageVue from '@/components/TopImage.vue'
import LeftMenuVue from '@/components/LeftMenu.vue'
import LeftUpdateVue from '@/components/LeftUpdate.vue'
import RightMarqueeVue from '@/components/RightMarquee.vue'
import FooterTextVue from '@/components/FooterText.vue'
</script>
