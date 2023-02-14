import nock from 'nock'
import { TerraformCloud } from '../../src'
import { PolicyChecksMock } from '../mocks'

const { PolicyChecks } = new TerraformCloud('api-key')
const runId = 'run-id'

describe('PolicyChecks endpoints', () => {
  it('list modules', async done => {
    const response = { data: [PolicyChecksMock, PolicyChecksMock] }
    const scope = nock('https://app.terraform.io/api/v2')
      .get(`/runs/${runId}/policy-checks?page[1]&page[20]`)
      .reply(200, response)

    const modules = await PolicyChecks.list(runId)

    expect(modules.length).toBe(2)
    scope.done()
    done()
  })
})
