package com.lancefy.backend.service;

import com.amazonaws.services.accessanalyzer.model.ResourceNotFoundException;
import com.lancefy.backend.model.chat.ChatMessage;
import com.lancefy.backend.model.chat.MessageStatus;
import com.lancefy.backend.repository.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatMessageService {
    @Autowired
    private ChatMessageRepository chatMessageRepository;
    @Autowired
    private ChatRoomService chatRoomService;

    public ChatMessage save(ChatMessage chatMessage) {
        chatMessage.setStatus(MessageStatus.RECEIVED);
        chatMessageRepository.save(chatMessage);
        return chatMessage;
    }

    public long countNewMessages(String senderId, String recipientId) {
        return chatMessageRepository.countBySenderIdAndRecipientIdAndStatus(
                senderId, recipientId, MessageStatus.RECEIVED);
    }

    public List<ChatMessage> findChatMessages(String senderId, String recipientId) {
        var chatId = chatRoomService.getChatId(senderId, recipientId, false);

        var messages =
                chatId.map(cId -> chatMessageRepository.findByChatId(cId)).orElse(new ArrayList<>());

//        if(messages.size() > 0) {
//            updateStatuses(senderId, recipientId, MessageStatus.DELIVERED);
//        }

        return messages;
    }

    public ChatMessage findById(String id) {
        return chatMessageRepository
                .findById(Long.parseLong(id))
                .map(chatMessage -> {
                    chatMessage.setStatus(MessageStatus.DELIVERED);
                    return chatMessageRepository.save(chatMessage);
                })
                .orElseThrow(() ->
                        new ResourceNotFoundException("can't find message (" + id + ")"));
    }

//    public void updateStatuses(String senderId, String recipientId, MessageStatus status) {
//        Query query = new Query(
//                Criteria
//                        .where("senderId").is(senderId)
//                        .and("recipientId").is(recipientId));
//        Update update = Update.update("status", status);
//        mongoOperations.updateMulti(query, update, ChatMessage.class);
//    }
}
