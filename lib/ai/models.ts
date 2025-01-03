
export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gemini-1.5-flash',
    label: 'Gemini 1.5-flash',
    apiIdentifier:  'gemini-1.5-flash',
    description: 'Improved efficiency, speed and capabilities.'
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemini-1.5-flash';



