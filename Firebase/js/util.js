export let uploadImg = async (file) => {
  let cloudName = 'docmtwzxm';
  let uploadPreset = 'abcd1234';

  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  let res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: formData
  })

  const data = await res.json();
  console.log(data.secure_url);

  return data.secure_url


}
