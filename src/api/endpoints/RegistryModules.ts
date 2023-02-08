import { AxiosInstance } from 'axios'
import { RegistryModule } from '../..'
import Request from './Request'

export default class RegistryModules extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  async list(organizationName: string, number = 1, size = 20): Promise<RegistryModule[]> {
    const path = `/organizations/${organizationName}/registry-modules?page[${number}]&page[${size}]`
    return await this.get<RegistryModule[]>(path)
  }
}
