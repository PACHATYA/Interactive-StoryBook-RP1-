const storySections = {
    background: [
        "In the year 2045, the world is a bleak place. The planet's energy resources are depleted, the economy is in ruins, and most people live in poverty.",
        "However, there is one place where people can escape: The OASIS, a vast virtual reality universe created by the eccentric genius, James Halliday.",
        "The OASIS is a place of endless possibilities, where users can be anyone they want, live in any world they desire, and even take on various jobs and quests.",
        "Before his death, Halliday left behind an Easter egg hidden somewhere in the OASIS. The first person to find it would inherit his fortune and control of the OASIS itself.",
        "This event, known as the Hunt, becomes a global obsession. Millions of people search for clues to find the egg, but no one has succeeded... yet."
    ],
    characters: [
        "Wade Watts, a teenager and one of the many 'gunters' (Egg hunters), embarks on the quest to find the Easter egg. Wade, who uses the avatar Parzival, spends most of his days in the OASIS, searching for clues.",
        "Wade is a brilliant, self-taught hacker and a fan of 1980s pop culture, which is key to solving Halliday's puzzles. He spends countless hours studying Halliday's life, hoping to discover the secret to the Easter egg.",
        "His best friend in the OASIS is Aech, a talented gunter and an expert in virtual reality. Aech's real-world identity is Art3mis' close friend, though they both have different avatars in the game.",
        "Aech is also a competitive gunter, known for their skills and knowledge of the OASIS. However, like many other gunters, Aech's true identity is a mystery. They are known to be loyal, witty, and fiercely protective of their friends.",
        "Art3mis, another gunter, is a fierce and determined woman in the OASIS. She is known for her intelligence, beauty, and mysterious persona. Art3mis and Parzival form an unlikely alliance in their pursuit of the egg.",
        "Despite their different personalities, Parzival and Art3mis quickly bond over their shared interest in the OASIS and their common goal of winning the egg. Though they often butt heads, they are always there for each other when it counts.",
        "The IOI (Innovative Online Industries) is the corporate antagonist of the story. The IOI, led by Nolan Sorrento, seeks to control the OASIS by any means necessary. They want to find the egg first to take over Halliday’s creation and turn it into a profit-making machine.",
        "The IOI is known for using ruthless tactics, including hiring gunters to do the dirty work for them, using violence and manipulation to try to win the egg. They will stop at nothing to achieve their goal."
    ],
    mainStory: [
        "As the race to find the Easter egg intensifies, Wade and his friends face both the challenges of the OASIS and the constant threat from the IOI. They must navigate complex virtual worlds filled with puzzles, dangers, and riddles left behind by Halliday.",
        "Wade and Art3mis are the first to discover the First Key, a crucial clue in the Hunt. This leads them to the First Gate, a deadly challenge that requires both intelligence and bravery to overcome.",
        "The IOI, desperate to win the egg and seize control of the OASIS, intensifies their efforts. They send waves of agents to track down Wade and his friends, resorting to violent means to try and get ahead in the Hunt.",
        "Through the puzzles and games, Parzival, Art3mis, and Aech form a close bond, working together to overcome impossible odds. Their journey is one of courage, loyalty, and determination as they face both virtual and real-world dangers.",
        "The stakes are high, and with the IOI's growing power, the future of the OASIS and the fate of its users hang in the balance. Will Wade and his friends be able to unlock the mystery of the Easter egg, or will the IOI take control? The race is on!"
    ]
};

let currentSection = 'background'; 
const storyTextElement = document.getElementById('story-text');
const nextButton = document.getElementById('next-button');
const music = document.getElementById('background-music');


function updateStory() {
    storyTextElement.textContent = storySections[currentSection].join("\n\n");
}


function nextSection() {
    if (currentSection === 'background') {
        currentSection = 'characters';
    } else if (currentSection === 'characters') {
        currentSection = 'mainStory';
        nextButton.style.display = 'none'; 
    } else {
        currentSection = 'background'; 
    }
    updateStory();
}

function startOver() {
    currentSection = 'background';
    nextButton.style.display = 'inline-block'; // 

    music.currentTime = 0; // 
    music.play(); // 
    updateStory();
}

// Start music automatically when the page loads
function startMusic() {
    music.play(); 
    music.muted = false; 
}

// Pause or Play the background music
function toggleMusic() {
    if (music.paused) {
        music.play(); // If music is paused, play it
    } else {
        music.pause(); // If music is playing, pause it
    }
}

// Increase the volume of the music
function increaseVolume() {
    if (music.volume < 1) { // Maximum volume is 1
        music.volume += 0.1; // Increase volume by 0.1
    }
}

// Decrease the volume of the music
function decreaseVolume() {
    if (music.volume > 0) { // Minimum volume is 0
        music.volume -= 0.1; // Decrease volume by 0.1
    }
}

// Initialize the story and start music when the page loads
window.onload = function() {
    updateStory();
    startMusic(); // Automatically play and unmute the music
};
