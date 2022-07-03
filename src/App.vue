<template>
  <h1>Basic</h1>
  <Editor class="editor" :files="files" @change="handleCodeChange" />
  <Sandbox class="sandbox" :info="info" />
</template>
<script lang="ts">
import { Sandbox, Editor, File } from './index';
import '../dist/style.css';
import { defineComponent, ref, computed } from 'vue-demi';
export default defineComponent({
  components: { Sandbox, Editor },
  setup() {
    function handleCodeChange(index: number, value: string) {
      files.value[index].value = value;
    }

    const files = ref<File[]>([
      {
        value: `<!DOCTYPE html>
<!-- First file will always be active, even if it's hidden. -->
<html>
<body>
  <h1>Hello from Sandpack!</h1>
  <p>This file is hidden</p>
</body>
</html>`,
        name: 'hidden.html',
        type: 'html',
        editable: true,
        visible: true,
      },
      {
        value: `<!DOCTYPE html>
<!-- Once hidden file is not active, it's impossible to open it. -->
<html>
<body>
  <h1>Hello Sandpack!</h1>
  <p>This file is visible</p>
</body>
</html>`,
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
        entry: '/index.html',
        dependencies: {},
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sandbox {
  width: 800px;
  height: 400px;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}
</style>
