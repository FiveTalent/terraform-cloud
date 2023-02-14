import nock from 'nock'
import { TerraformCloud } from '../../src'
import { ApplyMock } from '../mocks'

const { Applies } = new TerraformCloud('api-key')
const applyId = 'apply-id'

describe('PolicyChecks endpoints', () => {
  it('shows apply', async done => {
    const scope = nock('https://app.terraform.io/api/v2').get(`/applies/${applyId}`).reply(200, { data: ApplyMock })

    const apply = await Applies.show(applyId)

    expect(apply.type).toBe('applies')
    scope.done()
    done()
  })
})
