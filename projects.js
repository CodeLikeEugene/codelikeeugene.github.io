/*
HOW TO ADD A NEW PROJECT
1. Make a folder inside images/ named after the project, for example images/sales-dashboard/
   and put the project's charts or screenshots in it.
2. Copy the TEMPLATE at the bottom of this file and paste it at the TOP of the list below
   (newest project first). Fill in each line. Remove the comment marks.
3. Upload this file and the new images folder to GitHub.
The home page card and the project's own page are created automatically.
*/
const PROJECTS = [
  {
    slug: "nba-player-performance-analysis",
    title: "NBA Player Performance Analysis",
    blurb: "SQL analysis of 27 seasons of NBA stats, testing common basketball opinions against the numbers.",
    summary: [
      "Basketball debates run on opinion. I used SQL to test a few of them against the numbers: do high-volume scorers shoot worse, are players getting smaller, and which teams keep producing top scorers.",
      "Some results looked wrong at first. I checked them and tightened the definitions, and the report explains what changed."
    ],
    tags: ["MySQL", "Window functions", "CTEs", "Data cleaning", "Data visualization"],
    links: [
      { label: "View the code", url: "https://github.com/CodeLikeEugene/NBA-Player-Performance-Analysis" },
      { label: "Read the report", url: "https://github.com/CodeLikeEugene/NBA-Player-Performance-Analysis/blob/main/Reports/NBA_Portfolio_Report.docx" }
    ],
    stats: [
      ["Seasons covered", "27"],
      ["Player-season rows", "12,844"],
      ["Highest scoring season", "Harden, 36.1 PPG"],
      ["Top franchise", "Lakers, 11 times"],
      ["Biggest one-year jump", "McCollum, +14.0 PPG"],
      ["2022-23 data MVP", "Luka Dončić"]
    ],
    cover: "top_franchises.png",
    charts: [
      { file: "usage_vs_efficiency.png", alt: "Bar chart of average true shooting percentage for low, medium and high usage players. The bars are nearly equal.", caption: "High-usage scorers shoot just as well. True shooting was 53.6%, 53.1% and 53.8% across the three usage groups." },
      { file: "top_franchises.png", alt: "Bar chart of top-2 scorer appearances by team: Lakers 11, 76ers 9, Thunder 8, Rockets 6, Cavaliers 3.", caption: "The Lakers had a top-2 scorer 11 times, ahead of Philadelphia (9) and Oklahoma City (8)." },
      { file: "rookies_vs_veterans.png", alt: "Bar chart comparing rookie and veteran averages for points, rebounds and assists.", caption: "Veterans edge rookies in every category. The biggest gap is assists, 2.02 against 1.56." },
      { file: "player_size_by_decade.png", alt: "Line chart of average NBA player height and weight by decade, flat until a dip in the 2020s.", caption: "Average height and weight held steady for 20 years, then dropped in the 2020s." }
    ]
  }
];

/* TEMPLATE: copy from the next line down to the closing brace and comma

  {
    slug: "my-next-project",            // same as the folder name inside images/
    title: "My Next Project",
    blurb: "One sentence shown on the home page card.",
    summary: ["First paragraph for the project page.", "Optional second paragraph."],
    tags: ["Excel", "Power BI"],
    links: [
      { label: "View the code", url: "https://github.com/CodeLikeEugene/your-repo" }
    ],
    stats: [["A key number", "123"], ["Another one", "45%"]],   // optional, delete the line if not needed
    cover: "chart1.png",               // image shown on the home page card
    charts: [
      { file: "chart1.png", alt: "Describe the image", caption: "What this image shows." }
    ]
  },

*/
