<template>
  <h1>Sandpack Vue</h1>
  <div class="container">
    <Editor class="editor" :files="files" @change="handleCodeChange" />
    <Sandbox class="sandbox" :info="info" />
  </div>
</template>
<script lang="ts">
import { Sandbox, Editor, File } from './index';
import { defineComponent, ref, computed } from 'vue-demi';
import {
  appVue,
  indexHtml,
  mainJs,
  convertScriptSetup,
} from './constants/files';
import { parse, compileScript } from '@vue/compiler-sfc';

export default defineComponent({
  components: { Sandbox, Editor },
  setup() {
    function handleCodeChange(index: number, value: string) {
      const converted = convertScriptSetup(value);

      files.value[index].value = converted;
    }

    const files = ref<File[]>([
      {
        value: appVue,
        name: 'App.vue',
        type: 'vue',
        editable: true,
        visible: true,
      },
      {
        value: mainJs,
        name: 'main.js',
        type: 'js',
        editable: true,
        visible: true,
      },
      {
        value: indexHtml,
        name: 'index.html',
        type: 'html',
        editable: true,
        visible: true,
      },
    ]);
    const info = computed(() => {
      return {
        files: Object.fromEntries(
          files.value.map((file) => ['/' + file.name, { code: file.value }])
        ),
        entry: './main.js',
        dependencies: {
          'core-js': '^3.6.5',
          vue: '3.2.41',
          '@vue/cli-plugin-babel': '5.0.8',
        },
      };
    });

    return {
      info,
      files,
      handleCodeChange,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.sandbox {
  width: 800px;
  height: 400px;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}
.container {
  display: flex;
  flex-direction: row;
}
</style>
