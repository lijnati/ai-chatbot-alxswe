
export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'grok-beta',
    label: 'Grok beta',
    apiIdentifier:  'grok-beta',
    description: 'Improved efficiency, speed and capabilities.'
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'grok-beta';



