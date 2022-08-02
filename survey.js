const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (song) => {
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) ",
        (meal) => {
          rl.question(
            "What is your favourite thing to eat for that meal? ",
            (food) => {
              rl.question(
                "Which sport is your absolute favourite? ",
                (sport) => {
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (superpower) => {
                      console.log(
                        `Hello, my name is ${name}. An activity I like doing is ${activity}! While ${activity}, I like to listen to ${song}. My favourite meal is ${meal} and my favourite thing to eat for that meal is ${food}. My absolute favourite sport is ${sport}. My superpower is ${superpower}.`
                      );

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
