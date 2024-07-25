export interface ItemType {
  carryLimit: number;
  description: string;
  id: number;
  name: string;
  rarity: number;
  value: number;
}

export interface NavbarPage {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}
