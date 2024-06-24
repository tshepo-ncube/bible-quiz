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
    <header className="flex justify-between items-center py-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">Bible Quiz Adventure</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Leaderboard</li>
        </ul>
      </nav>
    </header>
    <main className="mt-6">
      <div className="mb-4">
        <div className="w-full bg-gray-300 h-2 rounded-full">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: "10%" }}
          ></div>
        </div>
        <p className="text-center mt-2">Progress: 10%</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {levels.map((level) => (
          <Level key={level.id} level={level} />
        ))}
      </div>
    </main>
    {/* <aside className="fixed top-20 left-0 w-64 p-4 bg-white shadow-lg">
      <h2 className="text-xl font-bold mb-2">User Stats</h2>
      <p>Current Level: 1</p>
      <p>Achievements: 5</p>
      <p>In-game Currency: 1000</p>
    </aside> */}
  </div>
);

export default LevelsPage;
