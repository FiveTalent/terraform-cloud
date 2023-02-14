import { AxiosInstance } from 'axios'
import { PolicyCheck } from '../..'
import Request from './Request'

export default class PolicyChecks extends Request {
  constructor(client: AxiosInstance) {
    super(client)
  }

  async list(runId: string, number = 1, size = 20): Promise<PolicyCheck[]> {
    const path = `/runs/${runId}/policy-checks?page[${number}]&page[${size}]`
    return await this.get<PolicyCheck[]>(path)
  }
}
