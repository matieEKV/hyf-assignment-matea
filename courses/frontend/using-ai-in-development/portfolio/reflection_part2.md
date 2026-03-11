**\*\*\*** IMPROVEMENTS **\*\*\***

These are the changes suggested by AI (Gemini) that I decided to implement:

- wrap the HTML elements in <main> so that screen readers and search engines can find the primary content of my site
- to keep my css variables consistent, I applied the suggestion to store the background color in its variable
- removed max-width: auto from my css as it is not valid and does not affect my layout
- removed the redundant variable from script.js file document.body.style.color = randomTheme.text;
- fixed a spelling mistake from "Chrocheting" to "Crocheting"
- implemented a logical step which makes sure that the color change does not repeat twice in a row

**\*\*\*** ASCII DIAGRAM **\*\*\***

portfolio-project/
├── index.html # Main structure & content
├── styles.css # Visual design & CSS variables
├── script.js # Theme switching logic & color array
├── reflections_part1.md # Initial thoughts and process
├── reflections_part2.md # Reflection on the review, implementation of AI suggestions, ASCII diagram and ethical issues and mitigations

**\*\*\*** ETHICAL ISSUES, RISKS AND MITIGATIONS **\*\*\***

1. Risk of slowed learning and lessened critical thinking
   I have noticed the itch I get to resolve the issues I come across fast, and to get the answer to my question as soon as possible. But I truly believe that this approach hinders learning in the long term. This is particularly applicable to debugging the apps. Instead of asking AI to help me locate the problem in my code, I try to solve it on my own. It takes a long time sometimes, but it is far more rewarding. Mainly because I've noticed that if I do not do it on my own, next time a problem arises I panic and cannot seem to find my way to solve it by myself, even if it is the problem I've encountered before and solved with the help of AI. To mitigate this would be to rely on AI for problems which I cannot seem to solve either myself or with the help of other resources such as documentation, stackOverflow or tutorials.

2. Environmental effects
   Although the data is still not fully here yet, and it is difficult to grasp the actual effect using AI in our daily lives has on our environment - we know it is affecting it, and in a detrimental way. As a person who tries to live my life with the least amount of negative affect I have on the world around me, use of AI has me questioning my values. To mitigate this, I try to use AI as little as possible and instead rely on other methods and approaches.

3. Hallucinations and overly complicated code
   AI is known to give wrong answers. Although it is not so common for simple standard code problems, it can still happen. And when it does, for me - a person just starting the software engineering process - can be a significant problem because I do not have enough knowledge yet to discern it. To mitigate it would be to confirm the answers by checking elsewhere, and to learn how to test the code well.
