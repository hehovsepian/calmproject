import S3 from 'aws-sdk/clients/s3.js';
import fs from 'fs'
import { config } from 'dotenv';
config();

let bucketName = process.env.S3_BUCKET
let region = process.env.S3_BUCKET_REGION
let accessKeyId = process.env.S3_ACCESS_KEY_ID
let secretAccessKey = process.env.S3_ACCESS_SECRET

let s3Params = {
    region,
    accessKeyId,
    secretAccessKey,
};

let s3 = new S3(s3Params);

function uploadFile(file) {

    let path

    if(file.fieldname === 'image'){
        path = "/images"
    }else if(file.fieldname === 'audio' || file.fieldname === 'tracks[]'){
        path = "/audio"
    }else if(file.fieldname === 'video'){
        path = "/video"
    }

    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName + path,
        Body: fileStream,
        Key: file.originalname,
        Type:file.mimetype
    }

    return s3.upload(uploadParams).promise()
}

export {uploadFile as uploadFile}

