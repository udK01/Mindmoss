const AnimateLetters = ({ text, delay }) => {
  return text.split("").map((letter, index) => {
    if (letter === "\n") {
      return <br key={`br-${index}`} />;
    }

    return (
      <span
        key={index}
        className="inline-block opacity-0 animate-up"
        style={{
          animationDelay: `${index * delay}s`,
        }}
      >
        <span>{letter === " " ? "\u00A0" : letter}</span>
      </span>
    );
  });
};

export default AnimateLetters;
