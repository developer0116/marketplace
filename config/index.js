
const PROXY_URL = process.env.NODE_ENV === 'production'
  ? 'https://leda.gojupiter.tech/'
  : 'http://localhost:8000'

const JUPITER_URL = 'https://jpr8.gojupiter.tech'

const CLOUDINARY_NAME = 'leda'
const CLOUDINARY_URL = 'cloudinary://326975778954233:HmstK1XI8xyI4BNfGnIIRNUbLAw@leda'
const CLOUDINARY_API_KEY = '326975778954233'
const CLOUDINARY_API_SECRET = 'HmstK1XI8xyI4BNfGnIIRNUbLAw'

export {
  PROXY_URL,
  JUPITER_URL,
  CLOUDINARY_NAME,
  CLOUDINARY_URL,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET
}