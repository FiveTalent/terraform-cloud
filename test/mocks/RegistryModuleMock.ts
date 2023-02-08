export const RegistryModuleMock = {
  data: {
    id: 'mod-kwt1cBiX2SdDz38w',
    type: 'registry-modules',
    attributes: {
      name: 'api-gateway',
      namespace: 'my-organization',
      provider: 'alicloud',
      status: 'setup_complete',
      'version-statuses': [
        {
          version: '1.1.0',
          status: 'ok',
        },
      ],
      'created-at': '2021-04-07T19:01:18.528Z',
      'updated-at': '2021-04-07T19:01:19.863Z',
      'registry-name': 'private',
      permissions: {
        'can-delete': true,
        'can-resync': true,
        'can-retry': true,
      },
    },
    relationships: {
      organization: {
        data: {
          id: 'my-organization',
          type: 'organizations',
        },
      },
    },
    links: {
      self: '/api/v2/organizations/my-organization/registry-modules/private/my-organization/api-gateway/alicloud',
    },
  },
}
