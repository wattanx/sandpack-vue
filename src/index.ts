import Editor from './components/Editor.vue';
import Sandbox from './components/Sandbox.vue';
import type { File } from './types/file';
import type {
  SandpackTheme,
  SandpackPredefinedTheme,
  SandpackSyntaxStyle,
} from './utils/theme';
import { getPredefinedTheme } from './utils/theme';

export { Editor, Sandbox, getPredefinedTheme };
export type {
  File,
  SandpackTheme,
  SandpackPredefinedTheme,
  SandpackSyntaxStyle,
};
