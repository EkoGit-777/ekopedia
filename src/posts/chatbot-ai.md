---
description: How I Built My Own Chatbot (and What I Learned Along the Way).
title: Building My Own AI Chatbot
cover: /assets/images/project/aideekopedia.webp
layout: DiaryLayout
icon: book-bookmark
date: 2025-10-07
category:
- Diary
tag:
- Career
---

## Why I Started

I’ve always wanted to create an AI assistant that fits into my Ekopedia ecosystem — something that feels personal, helpful, and a little bit geeky. So I started working on [AideEkopedia](https://aide.ekopedia.id/), my own AI chatbot, powered by Google’s Gemini API. Why Gemini? I haven't explored other AI API. But I often use it on mobile phone. So, I want to make my own.

## The Early Days

I've already said that I want to create my own AI chatbot. But the actual reason why I initiated it was because I was asked to make one as test when I apply to a job vacancy. The requirements was I had to use Nuxt 3, which it was the first time I use it. The first “Hello!” from my chatbot was magical — even though I spent half a day just trying to fix the script because what ChatGPT guides me was out of date. And I realize it little bit late. But when it finally responded, I couldn’t stop smiling. :star_struck:

## The Challenges

As a web developer, if you imagine about how to create AI Chatbot, it seems like it's really simple. You only need 1 page where you send prompt to API, then you show the response. One of the hardest parts was making the responses appear like they were being typed in real time and also present it in good format. It felt like giving the bot a personality — not just dumping text on the screen. Luckily on project I was working on when I worked at Gradin, I have made a component to show markdown formatted text. I can just take the component and apply it on my AI Chatbot project, so that it can show readable text.

<ArtPlayer
  src="assets/videos/chatbot-demo.webm"
  poster="assets/images/project/aideekopedia.webp"
/>

## Little Wins

There are many bugs I need to fix before I can satisfy my friends who act as testers of my AI Chatbot. Like disabled input box when streamed text is finished, the first response that failed to be streamed, etc. I also made some improvements like hiding the ugly scrollbar, getting markdown to render properly. Every time I fixed a small UI issue — like the scrollbar ruining the layout — it felt like the chatbot was learning to stand on its own feet. :satisfied:

## What I Learned

The experience reminded me that AI feels smarter when it looks smoother. Even the way the words appear on screen changes how we perceive its intelligence. AI is not magic — it’s layers of logic and API calls. When you display it properly, you can make it look smarter and more capable.

## What’s Next

The journey’s far from over — next, I want [AideEkopedia](https://aide.ekopedia.id/) to remember past chats and feel truly conversational. There is also option for choosing AI model to be used. Also, for now [AideEkopedia](https://aide.ekopedia.id/) can only show response with format text. It actually can receive the response like image or even code, but it still can only process response with format text. But for now, I’m just happy that it finally talks back. :grin: