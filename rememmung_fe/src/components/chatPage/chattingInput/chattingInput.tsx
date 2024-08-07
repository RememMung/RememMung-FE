import React, { ChangeEvent, KeyboardEvent } from "react";

import SendButtonImage from "../../../assets/chatPage/sendButton.svg";

import styles from "./styles";

interface ChattingInputProps {
  content: string;
  handleContent: (e: ChangeEvent<HTMLInputElement>) => void;
  sendContent: () => void;
}

const ChattingInput: React.FC<ChattingInputProps> = ({
  content,
  handleContent,
  sendContent,
}) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendContent();
    }
  };

  return (
    <styles.Container>
      <styles.StyleInput
        type="text"
        placeholder="브리에게 말을 걸어봐요!"
        value={content}
        onChange={handleContent}
        onKeyPress={handleKeyPress}
      />
      <styles.SendButton
        src={SendButtonImage}
        alt="전송 버튼"
        onClick={sendContent}
      />
    </styles.Container>
  );
};

export default ChattingInput;
