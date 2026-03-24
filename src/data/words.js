export const fallbackWords = [
  {
    word: "Ephemeral",
    description: "Lasting for a very short time; transitory.",
    useCase: "Social media fame is often ephemeral, fading as quickly as it arrives."
  },
  {
    word: "Serendipity",
    description: "The occurrence of events by chance in a happy or beneficial way.",
    useCase: "Finding that rare book at the garage sale was pure serendipity."
  },
  {
    word: "Eloquent",
    description: "Fluent or persuasive in speaking or writing.",
    useCase: "The CEO gave an eloquent speech that inspired the entire team."
  },
  {
    word: "Resilient",
    description: "Able to recover quickly from difficult conditions.",
    useCase: "Despite multiple setbacks, she remained resilient and achieved her goals."
  },
  {
    word: "Pragmatic",
    description: "Dealing with things sensibly and realistically.",
    useCase: "We need a pragmatic approach to solve this budget crisis."
  },
  {
    word: "Ubiquitous",
    description: "Present, appearing, or found everywhere.",
    useCase: "Smartphones have become ubiquitous in modern society."
  },
  {
    word: "Meticulous",
    description: "Showing great attention to detail; very careful and precise.",
    useCase: "The scientist was meticulous in documenting every step of the experiment."
  },
  {
    word: "Ambiguous",
    description: "Open to more than one interpretation; not clear.",
    useCase: "The contract language was ambiguous, leading to different interpretations."
  },
  {
    word: "Profound",
    description: "Very great or intense; showing deep insight.",
    useCase: "The book had a profound impact on my worldview."
  },
  {
    word: "Tenacious",
    description: "Holding firmly; persistent and determined.",
    useCase: "Her tenacious pursuit of justice inspired many activists."
  },
  {
    word: "Verbose",
    description: "Using more words than needed; wordy.",
    useCase: "The report was verbose and could have been summarized in half the pages."
  },
  {
    word: "Candid",
    description: "Truthful and straightforward; frank.",
    useCase: "I appreciate your candid feedback on my presentation."
  },
  {
    word: "Diligent",
    description: "Having or showing care in one's work or duties.",
    useCase: "The diligent student always submitted assignments ahead of deadline."
  },
  {
    word: "Elusive",
    description: "Difficult to find, catch, or achieve.",
    useCase: "Work-life balance remains an elusive goal for many professionals."
  },
  {
    word: "Innovative",
    description: "Featuring new methods; advanced and original.",
    useCase: "The company is known for its innovative approach to problem-solving."
  }
];

export async function fetchWords() {
  try {
    const response = await fetch('https://fiap-bff-2502.onrender.com/ask');
    if (!response.ok) throw new Error('BFF unavailable');
    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      return { words: data, source: 'bff' };
    }
    throw new Error('Invalid data');
  } catch (error) {
    console.log('Using fallback words:', error.message);
    return { words: fallbackWords, source: 'fallback' };
  }
}
