const strings = [
  "That's pretty woomy.",
  "I'm kayak and I'm here to tell you Marmite is garbo, Vegemite is king",
  "*sigh* LISTEN,",
  "I'm wakka kakka... Wakka! Kakka! kayak!",
  "no wakkas mate",
  "yeah nah, anyway...",
  "don't capitalise kayak",
  "I SAID *don't* capitalise kayak",
  "bonza",
  "yeah so anyway I came up with this idea while waiting in line at sevo levo (7-Eleven for the uninitiated)",
  "could honestly smash 17,000 lamingtons right now, like seriously",
  "I'm the goddamn Vegemite Fairy and that's a job I'm proud to do."
];

exports.beKayak = () => strings[Math.floor(Math.random() * strings.length)];
