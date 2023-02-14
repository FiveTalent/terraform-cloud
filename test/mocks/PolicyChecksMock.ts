export const PolicyChecksMock = {
  data: [
    {
      id: 'polchk-9VYRc9bpfJEsnwum',
      type: 'policy-checks',
      attributes: {
        result: {
          result: false,
          passed: 0,
          'total-failed': 1,
          'hard-failed': 0,
          'soft-failed': 1,
          'advisory-failed': 0,
          'duration-ms': 0,
          sentinel: {},
        },
        scope: 'organization',
        status: 'soft_failed',
        'status-timestamps': {
          'queued-at': '2017-11-29T20:02:17+00:00',
          'soft-failed-at': '2017-11-29T20:02:20+00:00',
        },
        actions: {
          'is-overridable': true,
        },
        permissions: {
          'can-override': false,
        },
      },
      relationships: {
        run: {
          data: {
            id: 'run-veDoQbv6xh6TbnJD',
            type: 'runs',
          },
        },
      },
      links: {
        output: '/api/v2/policy-checks/polchk-9VYRc9bpfJEsnwum/output',
      },
    },
  ],
}
