import {isPasswordAllowed, userToJSON} from '../auth'

// Test factories
const allowedPasswords = ['djkls.345.6']
const disallowedPasswords = ['', 'ffffffff', '88888888']

allowedPasswords.forEach((pwd) => {
  test(`"password ${pwd}" should be allowed`, () => {
    expect(isPasswordAllowed(pwd)).toBe(true)
  })
})
disallowedPasswords.forEach((pwd) => {
  test(`"password ${pwd}" should be disallowed`, () => {
    expect(isPasswordAllowed(pwd)).toBe(false)
  })
})
// End Test factories

test('isPasswordAllowed only allows some passwords', () => {
  expect.hasAssertions()
  expect(isPasswordAllowed('')).toBe(false)
  expect(isPasswordAllowed('ffffffff')).toBe(false)
  expect(isPasswordAllowed('88888888')).toBe(false)
  expect(isPasswordAllowed('djkls.345.6')).toBe(true)
})

test('userToJSON excludes secure properties', () => {
  expect.hasAssertions()

  const passedProperties = {
    id: 'some-id',
    username: 'sarah',
  }
  const user = {
    ...passedProperties,
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const jsonUser = userToJSON(user)

  expect(jsonUser).not.toEqual(user)
  expect(jsonUser).not.toEqual({
    ...passedProperties,
    hash: user.hash,
  })
  expect(jsonUser).not.toEqual({
    ...passedProperties,
    salt: user.salt,
  })
  expect(jsonUser).not.toEqual({
    ...passedProperties,
    hash: user.hash,
    salt: user.salt,
  })
  expect(jsonUser).toEqual(passedProperties)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
