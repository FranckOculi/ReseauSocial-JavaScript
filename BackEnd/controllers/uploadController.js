import UserModel from '../models/userModel.js';
import fs from 'fs';
import { uploadErrors } from '../utils/errors.utils.js';

export default async function uploadProfil(req, res) {
  try {
    if (
      req.file.detectedMimeType != 'image/jpg' &&
      req.file.detectedMimeType != 'image/png' &&
      req.file.detectedMimeType != 'image/jpeg'
    )
      throw Error('invalid file');

    if (req.file.size > 500000) throw Error('max size');
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }
  const fileName = req.body.name + '.jpg';

  fs.createReadStream(
    `BackEnd/../../FrontEnd/public/uploads/profil/${req.file.originalName}`,
  ).pipe(
    fs.createWriteStream(
      `BackEnd/../../FrontEnd/public/uploads/profil/${fileName}`,
    ),
  );

  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      { $set: { picture: './uploads/profil/' + fileName } },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    )
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).send({ message: err });
  }
}
