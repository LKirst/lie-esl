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
acronym *PREP*. (The example is too vague to yield any reliable results. It is
just meant to illustrate the steps.)

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

## Different use cases

### Text production practice

You can use AI tools to study for a writing assignment: You can ...

- brainstorm arguments
- collect useful words and phrases
- collect example exam questions for a given topic
- generate examples
- get feedback on your writing

#### Example: Write a model text 

Write an essay utilizing all of the material I provide.

You are an English Language teacher who emphasises paragraphing structure. Your
goal is to create a model text for your students.

Please first ask about the assignment details, including the essay topic,
number of body paragraphs, and the target word count. Then, ask me about the
material that should serve as the foundation for your arguments. Before you
start writing the model text, confirm that you have all necessary information.

The introduction should conclude with a paraphrase of the essay question framed
as an indirect question. You can use phrases such as "which raises the
question" or "the question arises" to introduce the indirect question. Each
body paragraph of the model text should begin with a topic sentence, followed
by explanation and examples that support the topic sentence. The first sentence
of each body paragraph (the topic sentence) should clearly state the one claim
of that paragraph.

Maintain a formal register and demonstrate a wide linguistic range for the
model text. Only use the first person and phrases to express your opinion in
the concluding paragraph of the model text. It is important that you keep the
word count of the model text between 100% and 120% of the specified target.

For the model text, please respond in a table with two columns. The first
column should contain the model text. The second column should explain the
structure of the model text and your use of the provided material. Put each
paragraph of the model text in a new row. Do not format the table as code.

#### Example: Correct the language of an essay

Help me decide on whether to mark different sentences, phrases or words as
correct, as unidiomatic, or as a mistake.

You are an English-as-a-second-language (ESL) teacher in secondary school and a
native speaker of English. You are very strict, but you accept both British
English and American English spelling.

First, ask me to give you the task for the essay the students had to write.
Before you start with the correction, remove line breaks within sentences and
non-word characters (like x, +, * or -) that are not part of the punctuation.

Please check not just spelling, but also word choice, coherence and cohesion,
register, and punctuation. Make sure the students use a semi-formal to formal
register and idiomatic word combinations. Go multiple times over each phrase or
sentence because you can often find multiple issues in the same phrase. Check
the vocabulary in the context of the task description the students were given
and the context of the preceding and following sentences. If you decide a
phrase contains a mistake or is unidiomatic, please make a suggestion of what
student could write instead.

Format your answer as a table with three columns: original with mistakes in
bold, grading symbols, and suggested alternative. It is very important that
there is a grading symbol in the second column  for every change you suggest in
the third column. After the table, explain the most important changes in a list
with bullet points (up to ten). In this list, group similar mistakes.

Use the grading symbols below if they fit an issue. If no grading symbol fits,
make up a new grading symbol and explain the symbol at the end of your answer. 

*LLMs "understand" markdown syntax. Below you can find markdown tables of
grading symbols you can add to the prompt above.*

```
### Verb forms

| symbol | explanation | example |
|----|----|----|
| t | Tense | _I \*will be in class yesterday._ |
| asp | Aspect (simple, continuous, perfect) | _I \*was knowing it the whole time._ |
| pass | Awkward use of passive voice | _A ball has been thrown over the wall._ => Who threw the ball? |
| constr | Participles, gerund, infinitive | _I decided \*flying to London_ |
| // | Parallel structure is missing  | _I like reading and \*to hike. My friends and I love that we have the same taste in books and \*to go on hikes together._ |

### Vocabulary, collocations and spelling

| symbol | explanation | example |
|----|----|----|
| voc | Vocabulary mistake | _She \*became a baby_ |
| vague | Vague word | _stuff_ or _things_ or _good / nice_ |
| sp | Spelling | _\*exiting_ |
| cap | Capitalization error | _You and \*i \*Should talk._ |
| coll | Collocation | _a \*powerful tea_ instead of _a strong tea_ |

### Other

| symbol | explanation | example |
|----|----|----|
| ad | Adjective vs adverb | _The pie tastes \*deliciously._ |
| p | Punctuation | _He said \*, that he had to go._ |
| gr | Generic category for grammar mistakes that don’t fall into one of the other categories such as _t_, _prep_, _wo_, ... | _In my room \*it gives three chairs._ |
| prep | Preposition | _\*On the picture, you can see a snowman._ |
| wo | Word order | _\*Always I play basketball on Thursdays._ |
| num | Number | _There \*is no students here. I know \*these teacher over there._ |
| ref | Reference | _David > \*her book_; _\*The pupils have to study in the afternoon._ when the referent is _(all) pupils_ in general |
| reg | Register: Too formal or too informal | _The guys in my hood aren't …_ in a semi-formal or formal text |
| rep | Repetition: You have needlessly repeated a word, phrase or idea. | |
| frag | The sentence is not complete. This group of words is a fragment. | _If I were a teacher._ |
| ( ) or ~~crossed out~~ | Remove these words | _If I were you, ~~then~~ I would study more. I think your reaction was (very) extreme._ |
| awk | awkward phrasing or sentence structure ||
| ?? | Difficult to read or understand | |

## Content

| symbol | explanation | example |
|----|----|----|
| link | Missing (logical) link between two sentences or paragraphs | |
| cont | A phrase / sentence / section is meaningless, incorrect on the content-level or has no relation to the question / task. | |
| logic | Logic on a language or content level | _I love marshmallows \*but I ate one anyway._ |
| weak | Sentence or paragraph is vague or general or states the obvious. | |
```

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
