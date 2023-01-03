import React from "react";
import { useNavigate } from "react-router-dom";

const useBack = () => {
  const navigate = useNavigate();
  const handleBackPage = () => {
    navigate("/");
  };
  return { handleBackPage };
};

export default useBack;
