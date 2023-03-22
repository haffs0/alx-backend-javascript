import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  let results = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    results = { photo, user };
  } catch (err) {
    results = { photo: null, user: null };
  }
  return results;
};
export default asyncUploadUser;
