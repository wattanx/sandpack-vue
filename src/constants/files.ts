import { parse, compileScript } from '@vue/compiler-sfc';

export const convertScriptSetup = (src: string) => {
  const descriptor = parse(src).descriptor;
  if (!descriptor.scriptSetup) {
    return src;
  }

  const template = descriptor.template?.content ?? '';
  const script = compileScript(descriptor, {
    id: '',
    reactivityTransform: false,
  }).content;

  return `<template>
${template}
</template>
<script>
${script}
</script>`;
};

export const appVue = `<script setup>
import { ref } from 'vue';
const msg = ref('Hello');
</script>
<template>
  <h1>{{ msg }}</h1>
  <p>This file is visible</p>
</template>`;

export const mainJs = `import { createApp } from 'vue';
import App from './App.vue';
        
createApp(App).mount('#app');`;

export const indexHtml = `<!DOCTYPE html>
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
</html>`;
