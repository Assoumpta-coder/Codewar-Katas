function validateHello(greetings) {
  const lowerCaseMessage = greetings.toLowerCase();
  const messages =[
    "hello",  // English
    "ciao",   // Italian
    "salut",  // French
    "hallo",  // German
    "hola",   // Spanish
    "ahoj",   // Czech Republic
    "czesc"   // Polish
  ];
  for (let i = 0; i < messages.length; i++) {
    const greeting = messages[i];
    if (lowerCaseMessage.includes(greeting)) {
      return true;
    }
  }
  return false;
}