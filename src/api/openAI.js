import axios from 'axios';
import {apiKey} from '../constants';

const groqEndpoint = 'https://api.groq.com/openai/v1/chat/completions';

const groqCall = async (prompt, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(groqEndpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [{role: 'user', content: prompt}],
        }),
      });
      const data = await res.json();
      return data?.choices[0]?.message?.content;
    } catch (error) {
      console.log(`Attempt ${i + 1} failed:`, error.message);
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
};

export const apiCall = async (prompt, messages) => {
  try {
    const isArtText = await groqCall(
      `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simple answer yes or no.`,
    );

    if (isArtText.toLowerCase().includes('yes')) {
      console.log('image api call');
      return imageApiCall(prompt, messages || []);
    } else {
      console.log('groq api call');
      return chatApiCall(prompt, messages || []);
    }
  } catch (error) {
    console.log('Error: ', error);
    return Promise.resolve({success: false, msg: error.message});
  }
};

const chatApiCall = async (prompt, messages) => {
  try {
    const answer = await groqCall(prompt);
    messages.push({role: 'assistant', content: answer.trim()});
    return Promise.resolve({success: true, data: messages});
  } catch (error) {
    console.log('Error: ', error);
    return Promise.resolve({success: false, msg: error.message});
  }
};

const imageApiCall = async (prompt, messages) => {
  try {
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt,
    )}`;
    messages.push({role: 'assistant', content: imageUrl});
    return Promise.resolve({success: true, data: messages});
  } catch (error) {
    console.log('Error: ', error);
    return Promise.resolve({success: false, msg: error.message});
  }
};
