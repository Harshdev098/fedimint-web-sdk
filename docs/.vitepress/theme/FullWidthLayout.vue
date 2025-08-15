<template>
  <div class="full-width-layout">
    <!-- Place VersionSwitcher above or next to Content -->
    <div class="navbar-extra">
      <VersionSwitcher :currentVersion="'v0.1'" />
    </div>
    <Content />
  </div>
</template>

<script setup>
import { Content } from 'vitepress'
import VersionSwitcher from 'vitepress-versioning-plugin/src/components/VersionSwitcher.vue'
</script>

<style scoped>
.full-width-layout {
  max-width: 100% !important;
  padding: 0 32px;
}

.full-width-layout :deep(.container) {
  max-width: none;
}

.navbar-extra {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  .full-width-layout {
    padding: 0 16px;
  }

  .navbar-extra {
    margin-bottom: 8px;
  }
}
</style>
