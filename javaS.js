// הגדרה: שמירה על הסאונד המתנגן כדי להפסיק אותו בלחיצה נוספת
let currentAudio = null;

// פונקציה שמנגנת סאונד ומפעילה אפקט על התמונה
function playAnimalSound(img) {
    // אפקט קליק
    img.classList.add('clicked');
    setTimeout(() => img.classList.remove('clicked'), 600);

    // ניגון הסאונד (ועצירת קודם אם צריך)
    const soundPath = img.getAttribute('data-sound');
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(soundPath);
    currentAudio.play();
}

// איסוף כל התמונות והאזנה ללחיצה
document.addEventListener("DOMContentLoaded", () => {
    const animalImgs = document.querySelectorAll('.jungle-animal');
    animalImgs.forEach(img => {
        img.addEventListener('click', () => playAnimalSound(img));
    });
});


const infoBtn = document.getElementById('info-btn');
const infoDialog = document.getElementById('info-dialog');
const closeDialog = document.getElementById('close-dialog');

// פתיחת הדיאלוג בלחיצה
infoBtn.addEventListener('click', () => {
  infoDialog.showModal();
});

// סגירה
closeDialog.addEventListener('click', () => {
  infoDialog.close();
});


document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.getElementById('play-music-btn');
  const muteBtn = document.getElementById('mute-btn');
  const bgAudio = document.getElementById('background-audio');

  // ניגון בלחיצה ראשונה
  playBtn.addEventListener('click', () => {
    bgAudio.play();
    playBtn.style.display = 'none';
    muteBtn.style.display = 'inline-block';
  });

  // השתקה/ביטול השתקה
  muteBtn.addEventListener('click', () => {
    bgAudio.muted = !bgAudio.muted;
    muteBtn.innerText = bgAudio.muted ? 'הפעל מוזיקת רקע' : 'השתק מוזיקת רקע';
  });
});

// מיפוי בין מקשים לבין חיות 
const animalKeys = {
  '1': 'Elephant',
  '2': 'monkey',
  '3': 'frog',
  '4': 'dolphin',
  '5': 'sheep',
  '6': 'lion',
  '7': 'cat'
};

// מקש במקלדת ינגן חיה מתאימה
document.addEventListener('keydown', (event) => {
  const animalName = animalKeys[event.key];
  if (animalName) {
    const img = document.querySelector(`img[alt="${animalName}"]`);
    if (img) {
      playAnimalSound(img);
      img.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    
  }
  else(
    alert("מקש לא תקין")
  )
});

