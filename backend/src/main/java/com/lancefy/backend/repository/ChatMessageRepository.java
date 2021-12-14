package com.lancefy.backend.repository;

import com.lancefy.backend.model.chat.ChatMessage;
import com.lancefy.backend.model.chat.MessageStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    long countBySenderIdAndRecipientIdAndStatus(
            String senderId, String recipientId, MessageStatus status);

    List<ChatMessage> findByChatId(String chatId);
}
