import React, { useState } from "react";
import styles from "./styles";

import StepOne from "../stepOne/stepOne";
import StepTwo from "../stepTwo/stepTwo";
import StepThree from "../stepThree/stepThree";
import StepFour from "../stepFour/stepFour";
import StepFive from "../stepFive/stepFive";
import { useNavigate } from "react-router-dom";

const StepComponent: React.FC = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [petInfo, setPetInfo] = useState<{
    type: string;
    name: string;
    character: string[];
  }>({
    type: "",
    name: "",
    character: [],
  });

  const handlePrevStep = () => {
    if (step > 1) {
      console.log(step);
      console.log(petInfo);
    }
  };

  const handleNextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      console.log(step);
      console.log(petInfo);
    }
  };

  const handleSubmit = () => {
    navigate("/main");
  };

  const setSelectedType = (type: string) => {
    setPetInfo((prevInfo) => ({
      ...prevInfo,
      type: type,
    }));
  };

  const setName = (name: string) => {
    setPetInfo((prevInfo) => ({
      ...prevInfo,
      name: name,
    }));
  };

  const setSelectedCharacter = (character: string[]) => {
    setPetInfo((prevInfo) => ({
      ...prevInfo,
      character: character,
    }));
  };

  return (
    <styles.Container>
      <styles.StepContainer>
        {[1, 2, 3, 4, 5].map((num) => (
          <React.Fragment key={num}>
            <styles.RoundNumber
              $isActive={step === num}
              $isCompleted={num < step}
            >
              {num}
            </styles.RoundNumber>
            {num < 5 && <styles.Line $isCompleted={num < step} />}
          </React.Fragment>
        ))}
      </styles.StepContainer>

      {step === 1 && (
        <StepOne
          selectedType={petInfo.type}
          setSelectedType={setSelectedType}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          selectedName={petInfo.name}
          setName={setName}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 3 && (
        <StepThree
          selectedCharacter={petInfo.character}
          setSelectedCharacter={setSelectedCharacter}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 4 && (
        <StepFour
          selectedName={petInfo.name}
          setName={setName}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}

      {step === 5 && (
        <StepFive
          selectedName={petInfo.name}
          setName={setName}
          handlePrevStep={handlePrevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </styles.Container>
  );
};

export default StepComponent;
