import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Avatar from "react-avatar-edit";

const Profile_Pic = () => {
  const [dialogs, setDialogs] = useState(false);
  const [imgCrop, setImageCrop] = useState(false);
  const [storeImage, setStoreImage] = useState([]);
  //   var imageName = require("./Anurag_Profile_Picture.JPG");

  const onclose = () => {
    setImageCrop(null);
  };
  const oncrop = (view) => {
    setImageCrop(view);
  };

  const saveImage = () => {
    setStoreImage([...storeImage, { imgCrop }]);
    setDialogs(false);
  };

  const profileImageShow = storeImage.map((item) => item.imgCrop);
  console.log(profileImageShow);
  return (
    <div>
      <div className="profile_img text-center p-4">
        <div className="div">
          <img
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            // src="./Anurag_Profile_Picture.JPG"
            src={imageName.default}
            // src={
            //   profileImageShow.length
            //     ? profileImageShow
            //     : require("./Anurag_Profile_Picture.JPG")
            // }
            alt=""
            onClick={() => setDialogs(true)}
          />

          <Dialog
            visible={dialogs}
            header={() => (
              <p htmlFor="" className="text-2xl font-semibold textcenter">
                Update Profile
              </p>
            )}
            onHide={() => setDialogs(false)}
          >
            <div className="confirmation-content flex flex-column align-items-center">
              <div className="flex flex-column align-items-center mt-5 w-12">
                <div className="flex flex-column justify-content-around w-12 mt-4">
                  <Avatar
                    width={400}
                    height={300}
                    onClose={onclose}
                    onCrop={oncrop}
                  />
                  <Button onClick={saveImage} label="Save" icon="pi pi-check" />
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
export default Profile_Pic;
