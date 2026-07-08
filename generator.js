// Basis-DNA
const base = [
    "Respo-Rotation",
    "Scan-Ghost",
    "BOERSE",
    "ID-Gate",
    "ki3KIme",
    "ECO-MARKT3-EXP168",
    "SCAN81",
    "MARKT",
    "TP4",
    "TP8",
    "TP12"
];

// Markov-ähnliche Silben
const syllables = [
    "Re", "Spo", "Ro", "Ta", "Whirl", "Boost", "Ghost",
    "Ki", "Me", "Gate", "Scan", "Eco", "Exp", "Mark",
    "TP", "Sys", "Rot", "Flow", "Spin", "Loop"
];

// Fehlerfreie Version
function generateRespoName() {
    const pick = base[Math.floor(Math.random() * base.length)];

    const syl1 = syllables[Math.floor(Math.random() * syllables.length)];
    const syl2 = syllables[Math.floor(Math.random() * syllables.length)];

    const minLen = 3;
    const maxLen = pick.length;
    const sliceLen = Math.floor(Math.random() * (maxLen - minLen)) + minLen;
    const slice = pick.slice(0, sliceLen);

    const random = Math.random().toString(36).substring(2, 6).toUpperCase();

    return `${syl1}${syl2}-${slice}::ID-${random}`;
}
