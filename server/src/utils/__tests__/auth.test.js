import {isPasswordAllowed, userToJSON} from '../auth'

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

  expect(userToJSON(passedProperties)).not.toEqual(user)
  expect(userToJSON(passedProperties)).not.toEqual({
    ...passedProperties,
    hash: user.hash,
  })
  expect(userToJSON(passedProperties)).not.toEqual({
    ...passedProperties,
    salt: user.salt,
  })
  expect(userToJSON(passedProperties)).not.toEqual({
    ...passedProperties,
    hash: user.hash,
    salt: user.salt,
  })
  expect(userToJSON(passedProperties)).toEqual(passedProperties)
  // Here you'll need to create a test user object
  // pass that to the userToJSON function
  // and then assert that the test user object
  // doesn't have any of the properties it's not
  // supposed to.
  // Here's an example of a user object:
  // const user = {
  //   id: 'some-id',
  //   username: 'sarah',
  //   ↑ above are properties which should
  //   be present in the returned object
  //
  //   ↓ below are properties which shouldn't
  //   be present in the returned object
  //   exp: new Date(),
  //   iat: new Date(),
  //   hash: 'some really long string',
  //   salt: 'some shorter string',
  // }
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
