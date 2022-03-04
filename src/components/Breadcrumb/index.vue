<template>
  <el-breadcrumb class='breadcrumb'>
    <transition-group name='breadcrumb'>
      <el-breadcrumb-item
        v-for='(item,index) in breadcrumbData'
        :key='item.path'
      >
        <!-- 不可点击 -->
        <span
          class='no-redirect'
          v-if='index === breadcrumbData.length -1'
        >
        {{ item.meta.title }}
      </span>
        <!-- 可点击 -->
        <router-link
          class='redirect'
          v-else
          :to='item.path'
        >
          {{ item.meta.title }}
        </router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

// route.matched 获取到的是当前路由匹配的路由表，是一个数组
// 比如当前路由是 /user/manage，那返回的数据是 [{path: '/user'}, {path: '/user/manage'}]
// 面包屑要的是符合meta.title即可，有无icon都可以
const route = useRoute()
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(item => {
    return item.meta && item.meta.title
  })
}

// 面包屑 hover 样式
// 将来要进行主题替换，这里获取动态样式
const store = useStore()
const linkHoverColor = computed(() => store.getters.cssVar.menuBg)

watch(route, () => getBreadcrumbData(), { immediate: true })
</script>

<style lang='scss' scoped>
.breadcrumb {
  display: inline-block;
  line-height: 50px;
  margin-left: 8px;
  font-size: 16px;

  :deep(.redirect) {
    color: #666;
    font-weight: 600;

    &:hover {
      color: v-bind(linkHoverColor);
    }
  }

  :deep(.no-redirect) {
    color: #97a8be;
    cursor: text;
  }
}
</style>
