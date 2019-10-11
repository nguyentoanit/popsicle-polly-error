import { fetch } from 'popsicle'
import { PollyJS } from './pollyjs/polly'

const pollyJs = new PollyJS('RefreshToken')
const polly = pollyJs.getPollyInstance()
const url = 'https://api.amazon.com/auth/o2/token'

describe('Record Amazon Refresh Token', () => {
  it('refresh an existing token', async () => {
    await fetch(url);
    await polly.stop()
  })
})
