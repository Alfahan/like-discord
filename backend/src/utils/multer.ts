import multer from "multer"
import path from "path"

export const storageUserPhoto = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '..', 'public', 'assets', 'uploads', 'photos')
        cb(null, uploadPath)
    },
        filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = file.mimetype.split('/')[1]

        const filename = `photo-${uniqueSuffix}.${extension}`
        cb(null, filename)
    }
})
