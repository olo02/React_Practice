import React from "react";
import "./UserInputs";
import UserInputs from "./UserInputs";

const Info2 = () => {
  const [state, onChange] = UserInputs({ name: "", nickname: "" });
  const { name, nickname } = state;
  return (
    <div>
      <input name="name" value={name} onChange={onChange}></input>
      <input name="nickname" value={nickname} onChange={onChange}></input>
      <div>
        <div>
          <b>이름</b> : {name}
        </div>
        <div>
          <b>닉네임</b> : {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info2;
