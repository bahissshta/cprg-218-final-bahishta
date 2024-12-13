document.getElementById("homepage").addEventListener("click", function () {
    document.getElementById("default_paragraph").textContent = 
        "Hi, welcome! This is a mini-blog dedicated to cats. I hope you enjoy your stay as much as I enjoyed creating it! 😊 You can use the buttons above to navigate to different sections of the blog.";
    document.getElementById("default_media").src = "images/home_img.jpg";
});

document.getElementById("behavior").addEventListener("click", function () {
    document.getElementById("default_paragraph").textContent = 
        "Cats have developed various ways to communicate, including: vocalizations, body language + scent marking. Vocalizations like meowing, purring + growling serve to express emotions such as affection, contentment or fear. Body language such as tail movements, ear positions + eye contact reveal a cat's emotional state. Scent marking (like rubbing their head or leaving traces) helps mark territory + establish bonds. Understanding these forms of communication can deepen the connection between these furballs + their owners, fostering a relationship built on trust + affection.";
    document.getElementById("default_media").src = "images/page_2.jpg";
});

document.getElementById("therapy").addEventListener("click", function () {
    document.getElementById("default_paragraph").textContent = 
        "Owning a cat offers numerous health benefits, both physical + mental. Studies show that cat owners tend to have better psychological health, in turn reporting higher levels of happiness, confidence + improved sleep. Cats are also known to reduce stress as they (usually) provide a calming presence. Despite the research limitations, it's clear cats can bring joy + reduce stress, making them invaluable companions!";
    document.getElementById("default_media").src = "images/page_3.jpg";
});

document.getElementById("mythology").addEventListener("click", function () {
    document.getElementById("default_paragraph").textContent = 
        "Despite their historical ties to bad luck, witches + Halloween, black cats are actually considered symbols of good fortune + luck in many traditions. In Britain, black cats are believed to bring prosperity + good health. They are also linked to wealth, with myths suggesting they bring prosperity in Japanese, Chinese + French cultures. A very common belief is that black cats crossing one's path is a bad omen. However, the majority of superstitions regarding these creatures are positive, reinforcing their reputation as lucky tokens.";
    document.getElementById("default_media").src = "images/page_4.jpg";
});
