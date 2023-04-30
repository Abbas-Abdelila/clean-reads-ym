import * as React from "react";
import Box from "@mui/material/Box";
import Input from "./Input";
import Modal from "@mui/material/Modal";
import { LOGIN } from "@/constans/constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal(props) {
  const { handleClose, open, type } = props;

  let children = type == LOGIN ? <LoginModal /> : <RegisterModal />;

  return (
    <div className="absolute">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="rounded-md shadow-md flex flex-col gap-3 items-center"
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
}

export const LoginModal = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold">Welcome Login</h1>
      <div className="input-group flex flex-col gap-6 mt-5">
        <Input
          label="Email"
          error={false}
          errorMessage={"Lutfen bu alanı doldurunuz"}
        />
        <Input label="Password" />
        <button className="p-3 bg-[#0F730C] text-lg rounded-full text-white flex justify-center items-center font-normal">
          SignUp
        </button>
      </div>
    </div>
  );
};
export const RegisterModal = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold">Welcome Register</h1>
      <div className="input-group flex flex-col gap-6 mt-5">
        <Input
          label="Username"
          error={false}
          errorMessage={"Lutfen bu alanı doldurunuz"}
        />
        <Input label="Email" />
        <Input label="Password" />
        <button className="p-3 bg-[#0F730C] text-lg rounded-full text-white flex justify-center items-center font-normal">
          Register
        </button>
      </div>
    </div>
  );
};
