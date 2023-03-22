import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  const results = {
    photo: null,
    user: null,
  };
  const photo = await uploadPhoto();
  const user = await createUser();
  if (photo && user) {
    results.photo = photo;
    results.user = user;
  }
  return results;
};
export default asyncUploadUser;
