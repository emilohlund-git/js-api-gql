export interface Repository {
  create(params: any): Promise<any>;
  get(params: any): Promise<any[]>;
  update(params: any): Promise<any>;
  delete(params: any): Promise<any>;
}