import React, { useRef, useEffect } from "react";

import styles from "./styles";

import PetProfileImage from "@assets/chatPage/PetProfileImage.svg";

interface ChatComponentProps {
  chattingData: {
    totalCount: number;
    nodes: {
      id: number;
      chatRoomId: number;
      userId: string | null;
      content: string;
      attachment: {
        id: number;
        type: string;
        url: string;
        createdAt: string;
      };
      createdAt: string;
    }[];
  };
}

const ChatComponent: React.FC<ChatComponentProps> = ({ chattingData }) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // 함수 컴포넌트 내부에서 마운트나 업데이트 시 스크롤을 제일 하단으로 이동
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <styles.Container ref={chatContainerRef}>
      {chattingData.nodes.map((chat) => (
        <styles.ChattingContainer key={chat.id} $isMe={!!chat.userId}>
          {/* 애완동물 프로필사진 및 이름 */}
          {chat.userId === null && (
            <styles.PetProfile>
              <styles.PetImage src={PetProfileImage} />
              <styles.PetName>{chat.userId ? "" : `브리`}</styles.PetName>
            </styles.PetProfile>
          )}

          {/* 채팅 메시지 및 시간 */}
          <styles.Message $isMe={!!chat.userId}>
            <styles.MessageBubble $isMe={!!chat.userId}>
              <div>{chat.content}</div>
            </styles.MessageBubble>
            <styles.Timestamp>{chat.createdAt}</styles.Timestamp>
          </styles.Message>
        </styles.ChattingContainer>
      ))}
    </styles.Container>
  );
};

export default ChatComponent;
