package com.lancefy.backend.controller;

import com.lancefy.backend.model.chat.ChatMessage;
import com.lancefy.backend.model.chat.ChatNotification;
import com.lancefy.backend.service.ChatMessageService;
import com.lancefy.backend.service.ChatRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@CrossOrigin("*")
public class ChatController {
    @Autowired private SimpMessagingTemplate simpMessagingTemplate;
    @Autowired private ChatMessageService chatMessageService;
    @Autowired private ChatRoomService chatRoomService;

    @MessageMapping("/chat")
    public void processMessages(@Payload ChatMessage chatMessage) {
        System.out.println(chatMessage);
        var chatId = chatRoomService.getChatId(chatMessage.getSenderId(), chatMessage.getRecipientId(), true);
        chatMessage.setChatId(chatId.get());;

        ChatMessage saved = chatMessageService.save(chatMessage);

        simpMessagingTemplate.convertAndSendToUser(
                chatMessage.getRecipientId(),"queue/messages",
                new ChatNotification(saved.getId(),
                        saved.getSenderId(),
                        saved.getSenderName())
        );
    }

    @GetMapping("/messages/{senderId}/{recipientId}/count")
    public ResponseEntity<Long> countNewMessages(
            @PathVariable String senderId,
            @PathVariable String recipientId) {

        return ResponseEntity
                .ok(chatMessageService.countNewMessages(senderId, recipientId));
    }

    @GetMapping("/messages/{senderId}/{recipientId}")
    public ResponseEntity<?> findChatMessages ( @PathVariable String senderId,
                                                @PathVariable String recipientId) {
        return ResponseEntity
                .ok(chatMessageService.findChatMessages(senderId, recipientId));
    }

    @GetMapping("/message/{id}")
    public ResponseEntity<?> findMessage ( @PathVariable String id) {
        return ResponseEntity
                .ok(chatMessageService.findById(id));
    }

    @GetMapping("/messages/{id}")
    public ResponseEntity<?> findChatRooms ( @PathVariable String id) {
        return ResponseEntity
                .ok(chatRoomService.findByRecipient(id));
    }

}
