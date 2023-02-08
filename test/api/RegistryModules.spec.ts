import nock from 'nock'
import { TerraformCloud } from '../../src'
import { RegistryModuleMock } from '../mocks'

const { RegistryModules } = new TerraformCloud('api-key')
const organizationName = 'organization-name'

describe('RegistryModules endpoints', () => {
  it('list modules', async done => {
    const response = { data: [RegistryModuleMock, RegistryModuleMock] }
    const scope = nock('https://app.terraform.io/api/v2')
      .get(`/organizations/${organizationName}/registry-modules?page[1]&page[20]`)
      .reply(200, response)

    const modules = await RegistryModules.list(organizationName)

    expect(modules.length).toBe(2)
    scope.done()
    done()
  })
})
