<template>
  <div class='navbar'>
    <Hamburger />
    <Breadcrumb style='float: left' />
    <div class='right-menu'>
      <!-- 头像 -->
      <el-dropdown trigger='click' class='avatar-container'>
        <div class='avatar-wrapper'>
          <el-avatar
            :size='40'
            shape='square'
            :src='$store.getters.userInfo.avatar'
          />
          <el-icon>
            <Setting />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class='user-dropdown'>
            <router-link to='/'>
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <a href='#' target='_blank'>
              <el-dropdown-item>课程主页</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click='logout'
            >退出登录
            </el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Setting } from '@element-plus/icons'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import { useStore } from 'vuex'

const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang='scss' scoped>
.navbar {
  position: relative;
  height: 50px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    float: right;
    height: 100%;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    :deep(.avatar-container) {
      cursor: pointer;

      .avatar-wrapper {
        position: relative;

        .el-avatar {
          --el-avatar-background-color: none;
        }
      }
    }
  }
}
</style>
