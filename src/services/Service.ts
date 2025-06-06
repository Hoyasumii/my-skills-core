export interface Service<Provider, Args, ReturnType> {
  provider: Provider;
  run(data: Args): Promise<ReturnType>;
}
