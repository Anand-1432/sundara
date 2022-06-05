import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useUpdateProfilePhoto } from "../../hooks/useUpdateProfilePhoto";

export const UpdateProfilePhoto = () => {
    
	const {user:userContext} = useAuthContext()
	const { updateProfilePhoto } = useUpdateProfilePhoto(userContext);

    const [show, setShow] = useState(false);
	const [profilePhoto, setProfilePhoto] = useState(null);
	const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);

    const handleShow = () => setShow(true);
    const handleClose = () => {
		setShow(false);
		updateProfilePhoto(userContext, profilePhoto)

	}

	useEffect(() => {

		if (!profilePhoto) {
            setProfilePhotoPreview(null)
            return
        }

        const objectUrl = URL.createObjectURL(profilePhoto)
        setProfilePhotoPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)

	}, [profilePhoto])

    return (
        <>
            <div className="modal-wrapper-outer">
                <Button variant="primary" id="updatePhoto" onClick={handleShow}>
                    Update Profile Photo
                </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    animation={true}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Profile Photo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div className="form-group login-sj">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="exampleInputBuisnessName"
                                    placeholder="Your Service Photo"
                                    onChange={(e) =>
                                        setProfilePhoto(e.target.files[0])
                                    }
                                />
                            </div>
							{profilePhoto && <>
								<img src={profilePhotoPreview} alt="" />
							</>}
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="button-wrapper-modal">
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                className="btn-auth-sj btn btn-primary btn-save"
                                variant="primary"
                                onClick={handleClose}
                            >
                                Save Changes
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};
