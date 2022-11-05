export const getLanguageFromFile = (fileType: string): string => {
  switch (fileType) {
    case 'ts':
    case 'tsx':
      return 'typescript';
    case 'html':
    case 'svelte':
    case 'vue':
      return 'html';
    case 'css':
    case 'less':
    case 'scss':
      return 'css';
    case 'js':
    case 'jsx':
    case 'json':
    default:
      return 'javascript';
  }
};
