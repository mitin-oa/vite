/**
 * VK: Chat Component
 *
 * The Chat component is a React functional component designed to provide a instant chat interface
 * using the react-chat-widget library.
 */

import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import { sendMessage } from "../fetchScripts/chatRequests";

interface ChatProps {
  profileAvatar: string;
  title: string;
  subtitle: string;
  emojis: boolean;
}

const handleNewUserMessage = async (newMessage: string) => {
  console.log(`New message incoming! ${newMessage}`);

  try {
    const response = await sendMessage(newMessage);

    if (response.success) {
      console.log("Server response:", response.message);
    } else {
      console.error("Server error:", response.error);
    }
  } catch (error) {
    console.error("Failed to send message:", error);
  }
};

addResponseMessage("Welcome to this **awesome** chat!");

const Chat: React.FC<ChatProps> = ({
  profileAvatar,
  title,
  subtitle,
  emojis,
}) => {
  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={profileAvatar}
        title={title}
        subtitle={subtitle}
        emojis={emojis}
      />
    </div>
  );
};

export default Chat;
