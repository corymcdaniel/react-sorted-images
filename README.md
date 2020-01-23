## Issue
This only occurs in a Gatsby production build.

When providing an array of objects that include an image source url to a component, you would expect
the properties to display per object.

Shuffling the array randomizes everything, but React seems to re-render everything other than the `img` tag.

Various sort methods to randomize the array have been tried with the same result.

## Installation

- `git clone git@github.com:corymcdaniel/react-sorted-images.git`

- `cd react-sorted-images && npm i`

- `npm run build && npm run serve`

- open http://localhost:9000

## Different attempts
- Spun up the same thing in a create-react-app project and didn't experience the issue
- Putting a unique key on the `img` tag.
- Used lodash.shuffle
- Created a small component that returns the `img` element
- Shuffled before and after using `.map`
