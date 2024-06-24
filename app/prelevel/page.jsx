import React from "react";

const themes = [
  "Creation and the Fall",
  "The Flood and Noah",
  "Tower of Babel",
  "Abraham's Calling",
  "Isaac and Rebekah",
  "Jacob's Ladder",
  "Joseph's Dreams",
  "Moses and the Burning Bush",
  "The Ten Plagues",
  "Crossing the Red Sea",
  "The Ten Commandments",
  "The Golden Calf",
  "Spies into Canaan",
  "The Fall of Jericho",
  "Samson and Delilah",
  "Ruth and Boaz",
  "Samuel's Calling",
  "David and Goliath",
  "Solomon's Wisdom",
  "Elijah and the Prophets of Baal",
  "Jonah and the Whale",
  "Daniel in the Lion's Den",
  "The Fiery Furnace",
  "Nehemiah Rebuilds Jerusalem",
  "Esther Saves Her People",
  "Job's Suffering and Restoration",
  "Psalms of David",
  "Proverbs of Solomon",
  "Ecclesiastes: A Time for Everything",
  "The Song of Solomon",
  "Isaiah's Prophecies",
  "Jeremiah: The Weeping Prophet",
  "Ezekiel's Visions",
  "The Valley of Dry Bones",
  "Hosea's Unfaithful Wife",
  "Joel: The Day of the Lord",
  "Amos: Social Justice",
  "Obadiah's Vision",
  "Jonah's Mission to Nineveh",
  "Micah: Do Justice, Love Mercy",
  "Nahum: The Fall of Nineveh",
  "Habakkuk's Complaints",
  "Zephaniah: The Day of the Lord",
  "Haggai: Rebuilding the Temple",
  "Zechariah's Night Visions",
  "Malachi: A Call to Return",
  "The Birth of John the Baptist",
  "The Annunciation",
  "The Birth of Jesus",
  "Jesus' Baptism",
  "The Temptation of Jesus",
  "The Sermon on the Mount",
  "Jesus' Miracles",
  "Parables of Jesus",
  "The Good Samaritan",
  "The Prodigal Son",
  "Feeding the 5000",
  "Walking on Water",
  "The Transfiguration",
  "The Last Supper",
  "Jesus' Crucifixion",
  "The Resurrection",
  "The Ascension",
  "Pentecost",
  "The Conversion of Saul",
  "Paul's Missionary Journeys",
  "Letters to the Corinthians",
  "Paul's Letter to the Romans",
  "The Fruit of the Spirit",
  "The Armor of God",
  "The Book of Philippians",
  "The Book of Colossians",
  "Thessalonians: End Times",
  "Timothy: Pastoral Guidance",
  "Titus: Church Leadership",
  "Philemon: Forgiveness",
  "Hebrews: Faith and Works",
  "James: Practical Faith",
  "Peter's Letters",
  "John's Letters",
  "Jude: Contending for the Faith",
  "The Seven Churches",
  "The Throne in Heaven",
  "The Seals and Trumpets",
  "The Two Witnesses",
  "The Woman and the Dragon",
  "The Beast and the False Prophet",
  "The Seven Bowls",
  "The Fall of Babylon",
  "The New Heaven and New Earth",
  "The River of Life",
  "The Alpha and Omega",
  "The Parable of the Sower",
  "The Rich Man and Lazarus",
  "The Mustard Seed",
  "The Wedding Banquet",
  "The Wise and Foolish Virgins",
  "The Sheep and the Goats",
  "Jesus Heals a Blind Man",
  "Jesus Raises Lazarus",
  "The Rich Young Ruler",
  "The Widow's Offering",
  "Jesus Clears the Temple",
  "The Road to Emmaus",
];

const levels = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Level ${i + 1}`,
  theme: themes[i],
  isLocked: i !== 0,
}));

const Level = ({ level }) => (
  <div
    className={`p-4 border rounded-lg ${
      level.isLocked ? "bg-gray-300" : "bg-white shadow-black"
    }`}
  >
    <h3 className="text-lg font-bold">{level.title}</h3>
    <p className="text-sm">{level.theme}</p>
    <button
      className={`mt-2 p-2 rounded ${
        level.isLocked
          ? "bg-gray-500 text-gray-700 cursor-not-allowed"
          : "bg-blue-500 text-white"
      }`}
      disabled={level.isLocked}
    >
      {level.isLocked ? "Locked" : "Start Level"}
    </button>
  </div>
);

const LevelsPage = () => (
  <div className="min-h-screen bg-gray-100 p-6">
    <center>
      <div class="grid grid-cols-1 gap-8 mt-56 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div class="w-full p-8 space-y-8 text-center border border-gray-500 rounded-lg dark:border-gray-700">
          <p class="font-medium text-gray-500 uppercase dark:text-gray-300">
            Level 1
          </p>

          <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
            "The Rich Young Ruler"
          </h2>

          <p class="font-medium text-gray-500 dark:text-gray-300">
            Target <br /> &#11088; &#11088; &#11088;
          </p>

          <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Play
          </button>
        </div>
      </div>
    </center>
  </div>
);

export default LevelsPage;
