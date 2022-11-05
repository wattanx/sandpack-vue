export type FileType = string;

export interface File {
  value: string;
  name: string;
  type: FileType;
  editable: boolean;
  visible: boolean;
}
