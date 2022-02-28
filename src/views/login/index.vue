<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- username -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <Avatar />
          </el-icon>
        </span>
        <el-input placeholder="请输入用户名" name="username" type="text" />
      </el-form-item>
      <!-- password -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <Lock />
          </el-icon>
        </span>
        <el-input placeholder="请输入密码" name="password" />
        <span class="show-pwd">
          <el-icon>
            <Lock />
          </el-icon>
        </span>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button type="primary" style="width: 100%; margin-bottom: 30px">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { Avatar, Lock } from '@element-plus/icons'
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  width: 100%;
  min-height: 100%;
  background: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    padding: 160px 35px 0;
    overflow: hidden;
    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    :deep(.el-input) {
      display: inline-block;
      width: 85%;
      height: 47px;

      input {
        height: 47px;
        border: 0;
        border-radius: 0;
        background: transparent;
        -webkit-appearance: none;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
    .svg-container {
      display: inline-block;
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
    }
    .title-container {
      position: relative;
      .title {
        margin: 0 auto 40px auto;
        text-align: center;
        color: $light_gray;
        font-weight: bold;
        font-size: 26px;
      }
    }
    .show-pwd {
      position: absolute;
      top: 7px;
      right: 15px;
      color: $dark_gray;
      font-size: 16px;
      cursor: pointer;
      user-select: none;
    }
  }
}
</style>
