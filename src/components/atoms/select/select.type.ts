export type Option = {
    value: string;
    label: string;
  };
  
  export type props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
    className: string[];
  }
  