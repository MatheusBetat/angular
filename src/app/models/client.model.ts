export interface ClientModel {
  name?: string;
  email?: string;
  genre?: ClientGenereEnum | null;
  birthDate?: Date;
  address?: ClientAdressModel | null;

}

export interface ClientAdressModel{
  city?: string;
  state?: string;
  cep?: string;

}

export enum ClientGenereEnum{
  Male= 'Masculino',
  Female = 'Feminino'

}
