import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./${process.env.CATEGORY_IMAGES_ROUTE}`);
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        cb(null, `${Date.now()}_${req.body.category}.${ext}`);
    }
});

export const uploadCateogryImg = multer({ storage });
