import { IsRider } from './is-rider.service';
import { createFakeToken, createFakeUser } from '../testing/factories';

describe('IsRider', () => {
  let isRider: IsRider;

  beforeEach(() => {
    isRider = new IsRider();
  });

  it('should allow a rider to access a route', () => {
    localStorage.setItem('taxi.auth', JSON.stringify(
      createFakeToken(createFakeUser({ group: 'sang_peduli' }))
    ));
    expect(isRider.canActivate()).toBeTruthy();
  });

  it('should not allow a non-rider to access a route', () => {
    localStorage.setItem('taxi.auth', JSON.stringify(
      createFakeToken(createFakeUser({ group: 'sang_pemilah' }))
    ));
    expect(isRider.canActivate()).toBeFalsy();
  });
});
