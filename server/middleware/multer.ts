import multer from 'multer'
import path from 'path'

const storage = multer.memoryStorage()

export = multer({ storage })