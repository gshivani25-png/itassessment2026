const topics = [
  {
    id: "mental-health",
    title: "Mental Health",
    content: `
Mental health refers to a person's emotional, psychological, and social well-being. It affects how individuals think, feel, behave, and handle stress in daily life.

Maintaining good mental health is essential for living a balanced and productive life. It helps individuals build strong relationships, make better decisions, and cope with challenges effectively.

Mental health is not just the absence of mental illness. It is a state of overall well-being where a person can realize their abilities, work productively, and contribute to society.

# Importance of Mental Health
Good mental health helps people:
• Cope with daily stress
• Work productively
• Build healthy relationships
• Realize their potential

# Common Mental Health Disorders
Many people experience mental health conditions such as anxiety disorders, depression, bipolar disorder, and PTSD. These conditions can affect thoughts, emotions, and behavior.

# Causes
Mental health problems may develop due to a combination of genetic factors, traumatic experiences, chronic stress, or environmental influences such as isolation or abuse.

# Treatment and Support
Treatment may include psychotherapy (such as CBT), medication, lifestyle changes, and strong social support. Early diagnosis and care can significantly improve recovery.
    `
  },

  {
    id: "personality",
    title: "Personality",
    content: `
Personality is the unique combination of emotional patterns, thought processes, and behaviors that define an individual. It is what makes each person different from another.

Personality develops gradually over time and is influenced by both genetic and environmental factors. Childhood experiences, family upbringing, and cultural background all play an important role.

Psychologists often study personality using different models and theories to better understand human behavior.

# Big Five Personality Traits
The Big Five model includes openness, conscientiousness, extraversion, agreeableness, and neuroticism. These traits help explain how people typically behave in different situations.

* Development Factors
• Genetics
• Environment
• Childhood experiences
• Social learning

# Theories
• Freud’s Psychoanalytic Theory
• Trait Theory
• Humanistic Theory

Personality changes over time with experience and self-awareness.


# Personality Theories
Freud’s psychoanalytic theory explains personality through unconscious desires. Trait theory focuses on stable characteristics, while humanistic theory emphasizes personal growth and self-actualization.

Personality is not fixed. It can evolve with experience, learning, and self-awareness throughout life.
    `
  },

  {
    id: "behavior",
    title: "Behavior",
    content: `
Behavior refers to the actions, reactions, and mannerisms of individuals in response to internal thoughts or external stimuli.

Every behavior has a cause, even if it is not immediately visible. Psychology studies behavior to understand why people act the way they do.

Behavior can be simple, like reflex actions, or complex, like decision-making and social interaction.

# Types of Behavior
• Overt behavior (visible actions)
• Covert behavior (thoughts & emotions)

Overt behavior is visible and observable, such as speaking or walking. Covert behavior includes thoughts and emotions that cannot be directly seen.

# Behavioral Learning
Behavior is often learned through experience. Classical conditioning(Pavlov), operant conditioning(Skinner), and observational learning (Bandura) explain how habits and responses are formed.

# Influences
Environment, culture, reinforcement, and emotional states strongly shape human behavior. Over time, behavior can be modified through learning and practice.
    `
  },

  {
    id: "motivation",
    title: "Motivation",
    content: `
Motivation is the internal or external force that drives individuals to take action and achieve goals.

Without motivation, it becomes difficult to maintain focus, complete tasks, or pursue long-term objectives. Motivation plays a key role in education, work, and personal development.

# Types of Motivation
• Intrinsic motivation
• Extrinsic motivation

Intrinsic motivation comes from within a person, such as passion or curiosity. Extrinsic motivation comes from external rewards like money, praise, or recognition.

# Maslow’s Theory
Maslow’s hierarchy explains human needs starting from basic survival needs to higher-level psychological growth and self-fulfillment.

# Maslow’s Hierarchy
1. Physiological needs
2. Safety
3. Love and belonging
4. Esteem
5. Self-actualization

# Importance
Motivation helps individuals overcome challenges, stay disciplined, and improve performance. It is essential for success in all areas of life.

# Improvement Strategies
• Set clear goals
• Break tasks into steps
• Stay consistent

    `
  },

  {
    id: "cognitive",
    title: "Cognitive Psychology",
    content: `
Cognitive psychology focuses on how people think, learn, remember, and process information.

It explores internal mental processes that cannot be directly observed but can be studied through behavior and experiments.

# Mental Processes
These include attention, memory, perception, reasoning, and problem-solving. Each plays a role in how humans understand the world.

# Theories
Piaget’s theory explains how thinking develops in stages. Information processing theory compares the mind to a computer system. Schema theory explains how knowledge is organized in the brain.

# Applications
Cognitive psychology is used in education, artificial intelligence, therapy, and decision-making research.

Understanding cognition helps improve learning methods and problem-solving abilities in real-life situations.
    `
  },

  {
    id: "therapy",
    title: "Therapy",
    content: `
Therapy is a structured process used to treat emotional, psychological, and behavioral issues.

It provides a safe environment where individuals can talk about their thoughts, feelings, and experiences without judgment.

# Types of Therapy
• Cognitive Behavioral Therapy (CBT)
• Psychodynamic therapy
• Humanistic therapy
• Group therapy
• Counselling 
• Mindfulness-based therapy
• Interpersonal therapy (IBT)


Cognitive Behavioral Therapy helps change negative thinking patterns. Psychodynamic therapy focuses on unconscious processes. Humanistic therapy emphasizes self-growth and personal understanding.Counselling  can be particularly used for people who are going through a difficult time such as bereavement, relationship problems, work-stress or other life-changing situations. Mindfulness-based therapies focus on teaching you to become the observer of your thoughts and feelings.

# Benefits
Therapy helps reduce anxiety, depression, and stress. It also improves emotional regulation, communication skills, and self-awareness.

# Process
A trained therapist works with individuals to identify problems, explore emotions, and develop healthier coping strategies.

Therapy is effective for people of all ages and can greatly improve quality of life.
    `
  },

  {
    id: "selfhelp",
    title: "Self-help",
    content: `
Self-help focuses on personal development through self-awareness, discipline, and consistent habits.

It encourages individuals to take responsibility for their own growth and mental well-being.

# Practices
Common self-help techniques include meditation, journaling, reading, exercise, and goal setting.

# Benefits
Self-help improves confidence, productivity, emotional strength, and focus. It also helps individuals build a positive mindset.

# Key Principles
Consistency is more important than motivation. Small daily improvements lead to long-term success.

Self-help is most effective when combined with patience, discipline, and self-reflection.
    `
  }
];

/* TRACK INDEX */
let currentIndex = 0;

/* OPEN TOPIC */
function openTopic(topicId) {
  const index = topics.findIndex(t => t.id === topicId);

  if (index === -1) return;

  currentIndex = index;

  document.querySelector(".topics-list").style.display = "none";
  document.getElementById("topicPage").style.display = "block";

  showTopic();
}

/* SHOW TOPIC */
function showTopic() {
  const topic = topics[currentIndex];

  const title = document.getElementById("topic-title");
  const content = document.getElementById("topic-content");

  title.innerText = topic.title;
  content.innerText = topic.content;

  // Force font size via JS (extra safety)
  content.style.fontSize = "25px";
  content.style.lineHeight = "1.6";
}

/* NEXT */
document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < topics.length - 1) {
    currentIndex++;
    showTopic();
  } else {
    alert("This is the last topic!");
  }
});

/* PREVIOUS */
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showTopic();
  } else {
    alert("This is the first topic!");
  }
});

/* BACK */
function goBack() {
  document.getElementById("topicPage").style.display = "none";
  document.querySelector(".topics-list").style.display = "block";
}

/* SEARCH */
function searchTopics() {
  const input = document.getElementById("topicSearch").value.toLowerCase();

  const found = topics.find(t =>
    t.title.toLowerCase().includes(input)
  );

  if (found) {
    openTopic(found.id);
  } else {
    alert("Topic not found ❌");
  }
}



// BACK TO TOP BUTTON

const backToTop = document.querySelector(".foot-panel1");

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}