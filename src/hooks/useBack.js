import { useNavigate } from "react-router-dom";

export default function useBackToPage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return {
    onBack: handleBack,
  };
}
