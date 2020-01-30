import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const [file, setFile] = useState();

  const [fileName, setFileName] = useState("choose file");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  console.log("file", file);

  const onSubmit = async e => {
    e.preventDefault();
    const { _id } = publishersBootcamp;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.put(`/api/v1/bootcamps/${_id}/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      const { file } = res.data;
      setUploadedFile({ file });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("there was a problem with the server ");
      } else {
        console.log(err.response.data.message);
      }
    }
  };

  return (
    <Fragment>
      <form class="mb-4" onSubmit={onSubmit}>
        <div class="form-group">
          <div class="custom-file">
            <input
              type="file"
              name="file"
              // value={file}
              onChange={onChange}
              className="custom-file-input"
              id="photo"
            />
            <label class="custom-file-label" for="photo">
              {fileName}
            </label>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-light btn-block"
          value="Upload Image"
        />
      </form>
    </Fragment>
  );
};

export default FileUploader;
