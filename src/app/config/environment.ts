const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/voucher-codes'
const port = process.env.PORT || 3000
const secret = process.env.SECRET || 'Shhhh it\'s a secret'

export { dbURI, port, secret }