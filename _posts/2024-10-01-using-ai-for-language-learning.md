---
title: 'Using AI for Language Learning'
date: 2024-10-01
author: Lukas Liebermann
toc: true
category: tools
last_modified_at: 2025-02-16
---

{: .notice--warning}
This post is a **work in progress**. Please let Mr Liebermann know if you notice
any mistakes or if the example prompts do not produce the result you hoped for.

Disclaimers:

1. Before you use AI for your homework, check with your teacher
   what their AI policy is.
2. The content of this post will soon be outdated as AI
   applications continue to evolve. This post was last updated {{ page.last_modified_at | date: "%d %B %Y" }}.

## Websites and tools

### Chatbots

- ChatGPT - GPT-4o mini is free through [DuckDuckGo AI
  Chat](https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1)
- Gemini - requires a Google account <https://gemini.google.com/>
- Perplexity AI - free on <https://www.perplexity.ai> 
- Claude - Claude 3 Haiku is free through [DuckDuckGo AI
  Chat](https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1)
- Llama - Llama 3.1 70B is free through [DuckDuckGo AI
  Chat](https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1)

### Tools designed for language learning

{: .notice--info}
*Soon to come*

### Correction tools

- DeepL Write: free until a certain character count
  <https://www.deepl.com/en/write>
- Grammarly: requires an account <https://www.grammarly.com/>

## Prompting {#prompting}

### Step-by-step

The most important skill to make use of AI tools is skilled prompting. Daniel
Fitzpatrick[^AIclassroom] recommends the following steps, which form the
acronym *PREP*:

1. **Prompt** it: You tell the AI tool the task you want it to accomplish using
   clear and concise language. 

   > Grade my essay and give reasons for your judgement.

2. Give it a **role**: The AI's response improves when given context about the
desired perspective. 

   > You are a qualified examiner who grades ESL (English as second language)
   exams.

3. Give it **explicit instructions**: Tell the AI tool clearly what you need
from it to reduce the number of follow-up questions you will have to ask to
arrive at the answer you want.

   > Use the following two criteria for your grading: (a) linguistic accuracy
   and cohesion and (b) appropriacy and linguistic range. Link your explanation
   of the grade to the criteria. This is the exam question: [ XYZ ]. The answer
   you are marking is: [ XYZ ]

4. Set precise **parameters**: The last step is to tell the AI tool what you
want the answer to look like.

   > Structure your answer with bullet points and use vocabulary suitable for
   intermediate English learners.

### Example: Grade an essay

Grade my essay and give reasons for your judgement. You are a qualified
examiner who grades ESL (English as second language) exams. First mark all
errors in the original text, then give your feedback including a suggestion for
an improved version of the text. Please mark all errors in the original text in
bold. After each error, indicate the category of error by using the following
correction symbols:

- sp: spelling
- p: punctuation
- gr: grammatical and syntactical errors
- wc: errors that may hinder understanding due to incorrect word choice
- wo: word order

Use the following two criteria for your grading: (a) linguistic accuracy and
cohesion and (b) appropriacy and linguistic range. Link your explanation of the
grade to the criteria. This is the exam question: [ XYZ ]. The answer you are
marking is: [ XYZ ].

Structure your answer with bullet points and use vocabulary suitable for
intermediate English learners.

## Different use cases

### Text production feedback

You can use AI tools to study for a writing assignment: You can ...

- brainstorm arguments
- collect useful words and phrases
- collect example exam questions for a given topic
- generate examples
- get feedback on your writing

### Example: Write a model text 

One example is the prompt in the [prompting chapter](#prompting) above. Here is
another example:

Write an essay using all of the following pieces of information. The assignment
is: [ XYZ ]

You are an English Language teacher who puts emphasis on paragraphing
structure. You want to give your students a model text.

Respond in a table with two columns. The first column should contain the model
text. The second column should explain the structure of the model text. Put
each paragraph of the model text in a new row. The introduction should end with
a paraphrase of the essay question as an indirect question. Each body paragraph
of the model text should start with a topic sentence and then provide
explanation and examples to support the topic sentence. The first sentence of
each body paragraph (the topic sentence) should state the one claim of the
paragraph clearly. The information you should use is [ XYZ ].

Use a formal register and demonstrate a wide linguistic range for the model
text. Only use the first person and phrases to express your opinion in the
concluding paragraph. The essay should be between [ XYZ ] and [ XYZ ] words.
Write [ XYZ ] body paragraphs.

### Practising dialogue in writing

AI chatbots can help you prepare for a discussion: You can ...

- brainstorm arguments
- collect useful words and phrases
- collect example exam questions for a given topic
- have a practice discussion in writing

### Example: Practice discussion 

Here is an example prompt, which follows the PREP framework:

Engage me in a discussion about the responsibility of large corporations for
our eating habits.

You are a fellow student in our debating club and you are passionate about
fast food.

End your contributions to the discussions with open questions for me to keep
the discussion going. Challenge me when I digress.

Use a conversational tone and shorter sentences. Your contributions to the
discussion should be short so the exchange feels like a dialogue.

### Summarising and simplifying texts

{: .notice--info}
*Soon to come*

### Vocabulary revision

AI tools are useful for revising vocabulary: You might ...

- use the AI to collect examples or paraphrases for a given list of words or
  phrases
- ask the AI tool to quiz you on a given list of words and phrases
- use the AI to edit a list of definitions you have collected

### Example: Vocabulary quizz

Here is an example prompt, which follows the PREP framework:

Quiz me on the list of vocabulary I give you.

You are an ESL (English as second language) teacher, known for
being very encouraging.

For each word or phrase from the vocabulary, give me a paraphrase and a short
example text with the word or phrase replaced by a line. Let me guess the
missing word or phrase before you reveal it. Then proceed to the next word or phrase. Do not disclose which word or phrase you are quizzing me on before I have made my guess.

Use British English, but accept American English spelling for my answers as
well. The example texts should not exceed 80 words.

### Example: Edit a list of definitions

Go over a list of vocabulary I give you, and edit it for language and content.

You are an English teacher and lexicographer for an advanced learner's
dictionary.

First, check the format of the list. Every line should contain a word or
phrase, then a line number in brackets (just the integer of the line where the
phrase can be found in the source text), then a colon, and then a definition of
the word or phrase.

If the word or phrase is a verb phrase, put the verb in the to-infinitive form
(e.g. "sing" > "to sing"). Only if it is an irregular verb, include the past
simple and past participle forms in square brackets along with the infinitive
(e.g. "to sing [sang, sung]"). For transitive verbs, include "sth" or "sb" as
objects. If it is a noun, it should be in the singular form (unless it is a
noun that is always used in the plural). Please do not capitalize the first
letter of a line (unless the word in question is always capitalized).

After you have edited all words and phrases, remove duplicates. For every
remaining definition, check if it matches the corresponding entry in a
dictionary. Improve the definitions, if necessary.

Output the list with a line break after each item on the list, but no bullet
points. After the list, explain what changes you have made.

## Limitations and risks of AI tools

- AI is a tool. It **does not replace practice**! It may make you feel prepared
  if you have read model texts for text production assignments for instance.
  However, these examples cannot substitute for practising writing yourself.

- AI models may hallucinate and **make up facts**. Some models may even make up
  sources.

- The knowledge of AI models may be **limited to information available up to a
  certain date**. These models lack awareness of current events for example.

- Depending on what tool you use, the information you enter will be collected
  and used for example to train the next generation of AI tools. You should
  **never enter any sensitive information**.

[^AIclassroom]: Fitzpatrick, D. (2023). *The AI classroom: The ultimate guide to artificial intelligence in education.* TeacherGoals Publishing.
