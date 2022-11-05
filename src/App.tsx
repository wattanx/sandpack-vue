import { Sandbox, Editor, File } from './index';
import '../dist/style.css';
import { defineComponent, ref, computed } from 'vue-demi';
export const App = defineComponent({
  components: { Sandbox, Editor },
  setup() {
    function handleCodeChange(index: number, value: string) {
      files.value[index].value = value;
    }

    const files = ref<File[]>([
      {
        value: `
<template>
  <h1>{{ msg }}</h1>
  <p>This file is visible</p>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const msg = ref('Hello');
    return {
      msg
    }
  }
})
</script>`,
        name: 'App.vue',
        type: 'vue',
        editable: true,
        visible: true,
      },
      {
        value: `import { createApp } from 'vue';
import App from './App.vue';
        
createApp(App).mount('#app');`,
        name: 'main.js',
        type: 'js',
        editable: true,
        visible: true,
      },
      {
        value: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sandpack App</title>
  </head>
  <body>
    <div id="app"></div>
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
        entry: './main.js',
        dependencies: {
          'core-js': '^3.6.5',
          vue: '^3.0.0-0',
          '@vue/cli-plugin-babel': '4.5.0',
        },
      };
    });

    const options = {
      height: '800px',
    };

    return () => (
      <>
        <h1>Basic</h1>
        <div class="container">
          <Editor
            class="editor"
            files={files.value}
            change={handleCodeChange}
          />
          <Sandbox class="sandbox" info={info.value} options={options} />
        </div>
      </>
    );
  },
});
