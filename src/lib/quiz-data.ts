
export type Answer = {
  text: string;
};

export type QuizQuestion = {
  question: string;
  emoji: string;
  answers: Answer[];
  correctAnswer: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    "question": "If there are multiple recycle bin for a hard disk",
    "emoji": "🗑️",
    "answers": [
      { "text": "You can set different size for each recycle bin" },
      { "text": "You can choose which recycle bin to use to store your deleted files" },
      { "text": "You can make any one of them default recycle bin" },
      { "text": "None of above" }
    ],
    "correctAnswer": "You can set different size for each recycle bin"
  },
  {
    "question": "Identify false statement",
    "emoji": "🚫",
    "answers": [
      { "text": "You can find deleted files in recycle bin" },
      { "text": "You can restore any files in recycle bin if you ever need" },
      { "text": "You can increase free space of disk by sending files in recycle bin" },
      { "text": "You can right click and choose Empty Recycle Bin to clean it at once" }
    ],
    "correctAnswer": "You can increase free space of disk by sending files in recycle bin"
  },
  {
    "question": "If the displayed system time and date is wrong, you can reset it using",
    "emoji": "⏰",
    "answers": [
      { "text": "Write" },
      { "text": "Calendar" },
      { "text": "Write file" },
      { "text": "Control panel" }
    ],
    "correctAnswer": "Control panel"
  },
  {
    "question": "You should save your computer from?",
    "emoji": "🛡️",
    "answers": [
      { "text": "Viruses" },
      { "text": "Time bombs" },
      { "text": "Worms" },
      { "text": "All of the above" }
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "World Wide Web is being standard by",
    "emoji": "🌐",
    "answers": [
      { "text": "Worldwide corporation" },
      { "text": "W3C" },
      { "text": "World Wide Consortium" },
      { "text": "World Wide Web Standard" }
    ],
    "correctAnswer": "W3C"
  },
  {
    "question": "Which of the following Operating systems is better for implementing a Client-Server network",
    "emoji": "🖥️",
    "answers": [
      { "text": "MS DOS" },
      { "text": "Windows 95" },
      { "text": "Windows 98" },
      { "text": "Windows 2000" }
    ],
    "correctAnswer": "Windows 2000"
  },
  {
    "question": "My Computer was introduced from",
    "emoji": "💻",
    "answers": [
      { "text": "Windows 3.1" },
      { "text": "Windows 3.11" },
      { "text": "Windows 95" },
      { "text": "Windows 98" }
    ],
    "correctAnswer": "Windows 95"
  },
  {
    "question": "Which of the following Windows do not have Start button",
    "emoji": "🪟",
    "answers": [
      { "text": "Windows Vista" },
      { "text": "Windows 7" },
      { "text": "Windows 8" },
      { "text": "None of above" }
    ],
    "correctAnswer": "Windows 8"
  },
  {
    "question": "Which is the latest version of MS Windows?",
    "emoji": "🆕",
    "answers": [
      { "text": "Windows 2007" },
      { "text": "Windows 7" },
      { "text": "Windows 11" },
      { "text": "Windows 10" }
    ],
    "correctAnswer": "Windows 11"
  },
  {
    "question": "Which operating system doesn't support networking between computers?",
    "emoji": "🌐",
    "answers": [
      { "text": "Windows 3.1" },
      { "text": "Windows 95" },
      { "text": "Windows 2000" },
      { "text": "Windows NT" }
    ],
    "correctAnswer": "Windows 3.1"
  },
  {
    "question": "The ....... is the drive containing the files to be copied",
    "emoji": "💾",
    "answers": [
      { "text": "Source drive" },
      { "text": "Destination drive" },
      { "text": "USB drive" },
      { "text": "None of the above" }
    ],
    "correctAnswer": "Source drive"
  },
  {
    "question": "Which one of the following is not a multitasking operating system?",
    "emoji": "👨‍💻",
    "answers": [
      { "text": "DOS" },
      { "text": "Windows" },
      { "text": "Unix" },
      { "text": "Linux" }
    ],
    "correctAnswer": "DOS"
  },
  {
    "question": "The most recent version of MAC OS is based on the ...... operating system",
    "emoji": "🍎",
    "answers": [
      { "text": "Windows" },
      { "text": "Linux" },
      { "text": "Unix" },
      { "text": "CMOS" }
    ],
    "correctAnswer": "Unix"
  },
  {
    "question": "In Windows, start button is used to",
    "emoji": "🏁",
    "answers": [
      { "text": "Run applications" },
      { "text": "Device setting" },
      { "text": "Turn off the system" },
      { "text": "All of above" }
    ],
    "correctAnswer": "All of above"
  },
  {
    "question": "Which one is true for unconditional disk formatting?",
    "emoji": "💿",
    "answers": [
      { "text": "Destroys every byte of data on a disk by overwriting it with blank spaces" },
      { "text": "Do not check/scan surface after format" },
      { "text": "Transfer system files after format" },
      { "text": "All of above" }
    ],
    "correctAnswer": "Destroys every byte of data on a disk by overwriting it with blank spaces"
  },
  {
    "question": "If your hard disk is partitioned into 3 drives, the number of recycle bin for that hard disk is",
    "emoji": "🗑️",
    "answers": [
      { "text": "1" },
      { "text": "2" },
      { "text": "3" },
      { "text": "4" }
    ],
    "correctAnswer": "3"
  },
  {
    "question": "The date and time displays on",
    "emoji": "📅",
    "answers": [
      { "text": "Taskbar" },
      { "text": "Status bar" },
      { "text": "System tray" },
      { "text": "Launch pad" }
    ],
    "correctAnswer": "System tray"
  },
  {
    "question": "...... runs on a computer hardware and serves as a platform for other system to run on",
    "emoji": "⚙️",
    "answers": [
      { "text": "Operating system" },
      { "text": "Application system" },
      { "text": "System software" },
      { "text": "All of above" }
    ],
    "correctAnswer": "Operating system"
  },
  {
    "question": "Which runs on computer hardware and serves as platform for other software to run on?",
    "emoji": "⚙️",
    "answers": [
      { "text": "Operating System" },
      { "text": "Application Software" },
      { "text": "System Software" },
      { "text": "All" }
    ],
    "correctAnswer": "Operating System"
  },
  {
    "question": "Which is the first program run on a computer when the computer boots up?",
    "emoji": "👢",
    "answers": [
      { "text": "System software" },
      { "text": "Operating system" },
      { "text": "System operations" },
      { "text": "None" }
    ],
    "correctAnswer": "Operating system"
  },
  {
    "question": "A light sensitive device that converts drawing, printed text or other images into digital form is",
    "emoji": "📠",
    "answers": [
      { "text": "Keyboard" },
      { "text": "Plotter" },
      { "text": "Scanner" },
      { "text": "OMR" }
    ],
    "correctAnswer": "Scanner"
  },
  {
    "question": "Which protocol provides e-mail facility among different hosts?",
    "emoji": "📧",
    "answers": [
      { "text": "FTP" },
      { "text": "SMTP" },
      { "text": "TELNET" },
      { "text": "SNMP" }
    ],
    "correctAnswer": "SMTP"
  },
  {
    "question": "The basic architecture of computer was developed by",
    "emoji": "🏛️",
    "answers": [
      { "text": "John Von Neumann" },
      { "text": "Charles Babbage" },
      { "text": "Blaise Pascal" },
      { "text": "Garden Moor" }
    ],
    "correctAnswer": "John Von Neumann"
  },
  {
    "question": "In order to tell Excel that we are entering a formula in cell, we must begin with an operator such as",
    "emoji": "📊",
    "answers": [
      { "text": "$" },
      { "text": "@" },
      { "text": "+" },
      { "text": "=" }
    ],
    "correctAnswer": "="
  },
  {
    "question": "In how many generations a computer can be classified?",
    "emoji": "👨‍👩‍👧‍👦",
    "answers": [
      { "text": "3" },
      { "text": "4" },
      { "text": "5" },
      { "text": "6" }
    ],
    "correctAnswer": "5"
  },
  {
    "question": "What is the correct association between a hardware component and a computer function?",
    "emoji": "↔️",
    "answers": [
      { "text": "Monitor > input" },
      { "text": "Mouse > input" },
      { "text": "CPU > storage" },
      { "text": "Hard disk > processing" }
    ],
    "correctAnswer": "Mouse > input"
  },
  {
    "question": "For move to the bottom of a document, press..........",
    "emoji": "🔻",
    "answers": [
      { "text": "Auto summarize" },
      { "text": "Home key" },
      { "text": "Ctrl + Home key" },
      { "text": "Ctrl + End key" }
    ],
    "correctAnswer": "Ctrl + End key"
  },
  {
    "question": "By default, your documents print in ________ mode",
    "emoji": "📄",
    "answers": [
      { "text": "Page setup" },
      { "text": "Portrait" },
      { "text": "Landscape" },
      { "text": "Print preview" }
    ],
    "correctAnswer": "Portrait"
  },
  {
    "question": "What does the SMTP in an SMTP server stand for?",
    "emoji": "📧",
    "answers": [
      { "text": "Simple Mail Transfer Protocol" },
      { "text": "Serve Message Text Process" },
      { "text": "Short Messaging Text Process" },
      { "text": "Short Messaging Transfer Protocol" }
    ],
    "correctAnswer": "Simple Mail Transfer Protocol"
  },
  {
    "question": "A website’s main page is called its",
    "emoji": "🏠",
    "answers": [
      { "text": "Home page" },
      { "text": "Browser page" },
      { "text": "Bookmark page" },
      { "text": "Search page" }
    ],
    "correctAnswer": "Home page"
  },
  {
    "question": "When installing _________ the user must usually decompress program file from CDROM or medium to the hard disk.",
    "emoji": "💾",
    "answers": [
      { "text": "Programming software" },
      { "text": "System hardware" },
      { "text": "Application hardware" },
      { "text": "Application software" }
    ],
    "correctAnswer": "Application software"
  },
  {
    "question": "A collection of interrelated file in computer is a",
    "emoji": "🗃️",
    "answers": [
      { "text": "File manager" },
      { "text": "Field" },
      { "text": "Record" },
      { "text": "Database" }
    ],
    "correctAnswer": "Database"
  },
  {
    "question": "A collection of 8 bit is called",
    "emoji": "8️⃣",
    "answers": [
      { "text": "Byte" },
      { "text": "Record" },
      { "text": "Word" },
      { "text": "Nibble" }
    ],
    "correctAnswer": "Byte"
  },
  {
    "question": "General purpose computers are those that can be adopted to countless uses simply by changing its",
    "emoji": "🔄",
    "answers": [
      { "text": "Output device" },
      { "text": "Input device" },
      { "text": "Processor" },
      { "text": "Program" }
    ],
    "correctAnswer": "Program"
  },
  {
    "question": "Sending data from one place to another, by physical or electronic means is",
    "emoji": "➡️",
    "answers": [
      { "text": "E-mail" },
      { "text": "Internet" },
      { "text": "Data transmission" },
      { "text": "Distributed processing" }
    ],
    "correctAnswer": "Data transmission"
  },
  {
    "question": "The ability to combine name and addresses with a standard document is called",
    "emoji": "📝",
    "answers": [
      { "text": "Document formatting" },
      { "text": "Database management" },
      { "text": "Mail merge" },
      { "text": "Form letters" }
    ],
    "correctAnswer": "Mail merge"
  },
  {
    "question": "Which enables us to send the same letter to different persons?",
    "emoji": "✉️",
    "answers": [
      { "text": "Macros" },
      { "text": "Template" },
      { "text": "Mail merge" },
      { "text": "None of above" }
    ],
    "correctAnswer": "Mail merge"
  },
  {
    "question": "A word processor would most likely be used to do",
    "emoji": "✍️",
    "answers": [
      { "text": "Keep an account of money spent" },
      { "text": "Do a computer search in media center" },
      { "text": "Maintain an inventory" },
      { "text": "Type a biography" }
    ],
    "correctAnswer": "Type a biography"
  },
  {
    "question": "What is gutter margin?",
    "emoji": "📄",
    "answers": [
      { "text": "Margin that is added to the left margin when printing" },
      { "text": "Margin that is added to right margin when printing" },
      { "text": "Margin that is added to the binding side of page when printing" },
      { "text": "Margin that is added to the outside of the page when printing" }
    ],
    "correctAnswer": "Margin that is added to the binding side of page when printing"
  },
  {
    "question": "Which can be used for quick access to commonly used commands and tools?",
    "emoji": "🛠️",
    "answers": [
      { "text": "Status bar" },
      { "text": "Tool bar" },
      { "text": "Menu bar" },
      { "text": "Title bar" }
    ],
    "correctAnswer": "Tool bar"
  },
  {
    "question": "When typing in Preeti font all the Ukars turn to something else? What's the cause?",
    "emoji": "❓",
    "answers": [
      { "text": "Autotext" },
      { "text": "Autocorrect" },
      { "text": "Speller" },
      { "text": "Preeti font does not work with Word" }
    ],
    "correctAnswer": "Preeti font does not work with Word"
  },
  {
    "question": "Which of the following commands should you always use before submitting a document to others?",
    "emoji": "✔️",
    "answers": [
      { "text": "Find command" },
      { "text": "Replace command" },
      { "text": "Spelling and Grammar" },
      { "text": "Thesaurus" }
    ],
    "correctAnswer": "Spelling and Grammar"
  },
  {
    "question": "What is placed to the left of horizontal scroll bar?",
    "emoji": "↔️",
    "answers": [
      { "text": "Tab stop buttons" },
      { "text": "View buttons" },
      { "text": "Split buttons" },
      { "text": "Indicators" }
    ],
    "correctAnswer": "View buttons"
  },
  {
    "question": "Insert Date, Format Page Number, and Insert AutoText are buttons on the ________ toolbar.",
    "emoji": "📅",
    "answers": [
      { "text": "Formatting" },
      { "text": "Header and Footer" },
      { "text": "Standard" },
      { "text": "Edit" }
    ],
    "correctAnswer": "Header and Footer"
  },
  {
    "question": "Which of the following do you use to change margins?",
    "emoji": "↔️",
    "answers": [
      { "text": "Formatting toolbar" },
      { "text": "Page setup dialog box" },
      { "text": "Standard toolbar" },
      { "text": "Paragraph dialog box" }
    ],
    "correctAnswer": "Page setup dialog box"
  },
  {
    "question": "How can you access the font size tool on formatting toolbar?",
    "emoji": "🔠",
    "answers": [
      { "text": "Ctrl + S" },
      { "text": "Ctrl + Shift + S" },
      { "text": "Ctrl + P" },
      { "text": "Ctrl + Shift + P" }
    ],
    "correctAnswer": "Ctrl + Shift + P"
  },
  {
    "question": "How can you make the selected character superscripted?",
    "emoji": "x²",
    "answers": [
      { "text": "Ctrl + =" },
      { "text": "Ctrl + Shift + +" },
      { "text": "Alt + Ctrl + Shift + =" },
      { "text": "None of above" }
    ],
    "correctAnswer": "Ctrl + Shift + +"
  },
  {
    "question": "What does Ctrl + = key effect?",
    "emoji": "x₂",
    "answers": [
      { "text": "Superscript" },
      { "text": "Subscript" },
      { "text": "All Caps" },
      { "text": "Shadow" }
    ],
    "correctAnswer": "Subscript"
  },
  {
    "question": "What is the smallest width of a column?",
    "emoji": "↔️",
    "answers": [
      { "text": "0\"" },
      { "text": "0.5\"" },
      { "text": "1\"" },
      { "text": "1.5\"" }
    ],
    "correctAnswer": "0\""
  },
  {
    "question": "To Redo the last work, press ________",
    "emoji": "↪️",
    "answers": [
      { "text": "Ctrl + U" },
      { "text": "Ctrl + Y" },
      { "text": "Ctrl + Z" },
      { "text": "Ctrl + W" }
    ],
    "correctAnswer": "Ctrl + Y"
  },
  {
    "question": "What happens when you press Ctrl + X after selecting some cells in Excel?",
    "emoji": "✂️",
    "answers": [
      { "text": "The cell content of selected cells disappear from cell and stored in clipboard" },
      { "text": "The cells selected are marked for cutting" },
      { "text": "The selected cells are deleted and the cells are shifted left" },
      { "text": "The selected cells are deleted and cells are shifted up" }
    ],
    "correctAnswer": "The cell content of selected cells disappear from cell and stored in clipboard"
  },
  {
    "question": "Which of the following option is not available in Paste Special dialog box?",
    "emoji": "📋",
    "answers": [
      { "text": "Add" },
      { "text": "Subtract" },
      { "text": "Divide" },
      { "text": "SORT" }
    ],
    "correctAnswer": "SORT"
  },
  {
    "question": "Which command will you choose to convert a column of data into row?",
    "emoji": "🔄",
    "answers": [
      { "text": "Cut and Paste" },
      { "text": "Paste Special > Transpose" },
      { "text": "Both of above" },
      { "text": "None of above" }
    ],
    "correctAnswer": "Paste Special > Transpose"
  },
  {
    "question": "It is acceptable to let long text flow into adjacent cells on a worksheet when",
    "emoji": "➡️",
    "answers": [
      { "text": "Data will be entered in the adjacent cells" },
      { "text": "No data will be entered in the adjacent cells" },
      { "text": "There is no suitable abbreviation for the text" },
      { "text": "There is not time to format the text" }
    ],
    "correctAnswer": "No data will be entered in the adjacent cells"
  },
  {
    "question": "How do you display current date only in MS Excel?",
    "emoji": "📅",
    "answers": [
      { "text": "Date ()" },
      { "text": "Today ()" },
      { "text": "Now ()" },
      { "text": "Time ()" }
    ],
    "correctAnswer": "Today ()"
  },
  {
    "question": "How do you wrap the text in a cell?",
    "emoji": "🔄",
    "answers": [
      { "text": "Format, cells, font" },
      { "text": "Format, cells, protection" },
      { "text": "Format, cells, number" },
      { "text": "Format, cells, alignment" }
    ],
    "correctAnswer": "Format, cells, alignment"
  },
  {
    "question": "What does COUNTA () function do?",
    "emoji": "🔢",
    "answers": [
      { "text": "Counts cells having alphabets" },
      { "text": "Counts empty cells" },
      { "text": "Counts cells having number" },
      { "text": "Counts non-empty cells" }
    ],
    "correctAnswer": "Counts non-empty cells"
  },
  {
    "question": "What is the short cut key to highlight the entire column?",
    "emoji": "🔦",
    "answers": [
      { "text": "Ctrl + C" },
      { "text": "Ctrl + Enter" },
      { "text": "Ctrl + Page Up" },
      { "text": "Ctrl + Space Bar" }
    ],
    "correctAnswer": "Ctrl + Space Bar"
  },
  {
    "question": "In the formula, which symbol specifies the fixed columns or rows?",
    "emoji": "$",
    "answers": [
      { "text": "$" },
      { "text": "*" },
      { "text": "%" },
      { "text": "&" }
    ],
    "correctAnswer": "$"
  },
  {
    "question": "Which of the following is not information you can specify using the solver?",
    "emoji": "🤔",
    "answers": [
      { "text": "Input cells" },
      { "text": "Constraints" },
      { "text": "Target cell" },
      { "text": "Changing cells" }
    ],
    "correctAnswer": "Input cells"
  },
  {
    "question": "A worksheet can have a maximum of _________ number of rows.",
    "emoji": "↕️",
    "answers": [
      { "text": "256" },
      { "text": "1024" },
      { "text": "65535" },
      { "text": "1048576" }
    ],
    "correctAnswer": "1048576"
  },
  {
    "question": "Which of the following is not an example of a value?",
    "emoji": "🔢",
    "answers": [
      { "text": "350" },
      { "text": "May 10, 2001" },
      { "text": "0.57" },
      { "text": "Serial Number 50771" }
    ],
    "correctAnswer": "Serial Number 50771"
  },
  {
    "question": "The chart wizard term data series refers to",
    "emoji": "📊",
    "answers": [
      { "text": "A chart legend" },
      { "text": "A collection of chart data markers" },
      { "text": "A set of values you plot in a chart" },
      { "text": "None of these" }
    ],
    "correctAnswer": "A collection of chart data markers"
  },
  {
    "question": "The Chart wizard term data categories refers to",
    "emoji": "📊",
    "answers": [
      { "text": "A chart plot area" },
      { "text": "A horizontal axis" },
      { "text": "The organization of individual values with a chart's data series" },
      { "text": "The data range that supply chart data" }
    ],
    "correctAnswer": "The organization of individual values with a chart's data series"
  },
  {
    "question": "A worksheet range is a",
    "emoji": "📈",
    "answers": [
      { "text": "A command used for data modeling" },
      { "text": "A range of values such as from 23 to 234" },
      { "text": "A group of cells" },
      { "text": "A group of worksheets" }
    ],
    "correctAnswer": "A group of cells"
  },
  {
    "question": "Which tab is not available on left panel when you open a presentation?",
    "emoji": "🖥️",
    "answers": [
      { "text": "Outline" },
      { "text": "Slides" },
      { "text": "Notes" },
      { "text": "All of above are available" }
    ],
    "correctAnswer": "All of above are available"
  },
  {
    "question": "Which of the following statements is not true?",
    "emoji": "🚫",
    "answers": [
      { "text": "You can type text directly into a PowerPoint slide but typing in text box is more convenient." },
      { "text": "From Insert menu choose Picture and then File to insert your images into slides." },
      { "text": "You can view a PowerPoint presentation in Normal, Slide Sorter or Slide Show view." },
      { "text": "You can show or hide task pane from View >> Toolbars." }
    ],
    "correctAnswer": "You can type text directly into a PowerPoint slide but typing in text box is more convenient."
  },
  {
    "question": "To start Microsoft PowerPoint application",
    "emoji": "🚀",
    "answers": [
      { "text": "Click on Start > Programs > All Programs > Microsoft PowerPoint" },
      { "text": "Hit Ctrl + R then type powerpnt.exe and Enter" },
      { "text": "Click Start > Run then type powerpnt then press Enter" },
      { "text": "All of above" }
    ],
    "correctAnswer": "All of above"
  },
  {
    "question": "Which of the following section does not exist in a slide layout?",
    "emoji": "🚫",
    "answers": [
      { "text": "Titles" },
      { "text": "Lists" },
      { "text": "Charts" },
      { "text": "Animations" }
    ],
    "correctAnswer": "Animations"
  },
  {
    "question": "PowerPoint presentations are widely used as",
    "emoji": "📽️",
    "answers": [
      { "text": "Note outlines for teachers" },
      { "text": "Project presentations by students" },
      { "text": "Communication of planning" },
      { "text": "All of above" }
    ],
    "correctAnswer": "All of above"
  },
  {
    "question": "Which command brings you to the first slide in your presentation?",
    "emoji": "⏮️",
    "answers": [
      { "text": "Next slide button" },
      { "text": "Page up" },
      { "text": "Ctrl + Home" },
      { "text": "Ctrl + End" }
    ],
    "correctAnswer": "Ctrl + Home"
  },
  {
    "question": "In normal view, how can you quickly change to handout master view?",
    "emoji": "🔄",
    "answers": [
      { "text": "Click the outline tab and select handout master view" },
      { "text": "Press the shift key and click the handout master view button" },
      { "text": "On the view menu, click slide sorter, and click handouts" },
      { "text": "All of above" }
    ],
    "correctAnswer": "Press the shift key and click the handout master view button"
  },
  {
    "question": "How can you quickly reinstate a deleted footer placeholder in master view?",
    "emoji": "↩️",
    "answers": [
      { "text": "Create a new slide master" },
      { "text": "Re-apply the footer placeholder" },
      { "text": "Re-apply the slide layout" },
      { "text": "All of the above" }
    ],
    "correctAnswer": "Re-apply the slide layout"
  },
  {
    "question": "Which types of fonts are best suitable for titles and headlines?",
    "emoji": "🔠",
    "answers": [
      { "text": "serif fonts" },
      { "text": "sans serif fonts" },
      { "text": "text fonts" },
      { "text": "picture fonts" }
    ],
    "correctAnswer": "sans serif fonts"
  },
  {
    "question": "Which type of font is best suitable for large amount of text?",
    "emoji": "🔡",
    "answers": [
      { "text": "serif fonts" },
      { "text": "sans serif fonts" },
      { "text": "text fonts" },
      { "text": "picture fonts" }
    ],
    "correctAnswer": "serif fonts"
  },
  {
    "question": "To give a PowerPoint presentation to a large audience, you",
    "emoji": "📽️",
    "answers": [
      { "text": "Set up your computer in a large auditorium, and click large, auditorium, OK" },
      { "text": "Click the slide you wish the audience to see in normal view, then click the next slide, and so on" },
      { "text": "Choose either view, slide show or slide show, view show" },
      { "text": "Click slide show, OK" }
    ],
    "correctAnswer": "Choose either view, slide show or slide show, view show"
  },
  {
    "question": "Which of the following can you use to add times to the slides in a presentation?",
    "emoji": "⏱️",
    "answers": [
      { "text": "Slide Show menu" },
      { "text": "Rehearse timing button" },
      { "text": "Slide transition button" },
      { "text": "All of the above" }
    ],
    "correctAnswer": "All of the above"
  },
  {
    "question": "eTCS means",
    "emoji": "💰",
    "answers": [
      { "text": "Enable Tax Collected at Source" },
      { "text": "Electronic Tax Collected at Source" },
      { "text": "Electric Tax Collected at Source" },
      { "text": "None of these" }
    ],
    "correctAnswer": "Electronic Tax Collected at Source"
  },
  {
    "question": "To get Payroll Reports choose",
    "emoji": "📄",
    "answers": [
      { "text": "Gateway of Tally > Display" },
      { "text": "Gateway of Tally > Display > Statement of Accounts" },
      { "text": "Gateway of Tally > Display > Statement of Payroll" },
      { "text": "Gateway of Tally > Display > Payroll Reports" }
    ],
    "correctAnswer": "Gateway of Tally > Display > Payroll Reports"
  },
  {
    "question": "BOM represents",
    "emoji": "📝",
    "answers": [
      { "text": "Billing of Machines" },
      { "text": "Bill of Materials" },
      { "text": "Bill of Maintenance" },
      { "text": "None of these" }
    ],
    "correctAnswer": "Bill of Materials"
  },
  {
    "question": "\"Alias\" represents",
    "emoji": "👤",
    "answers": [
      { "text": "Short name" },
      { "text": "Nick name" },
      { "text": "Code name" },
      { "text": "All of these" }
    ],
    "correctAnswer": "All of these"
  },
  {
    "question": "If we purchase any fixed asset in credit, we can pass it from",
    "emoji": "💳",
    "answers": [
      { "text": "Payment mode" },
      { "text": "Receipt mode" },
      { "text": "Purchase mode" },
      { "text": "Contra mode" }
    ],
    "correctAnswer": "Purchase mode"
  },
  {
    "question": "Which shortcut key is pressed to display Part No. for automobile industries?",
    "emoji": "🚗",
    "answers": [
      { "text": "F1" },
      { "text": "F2" },
      { "text": "F11" },
      { "text": "F12" }
    ],
    "correctAnswer": "F12"
  },
  {
    "question": "Which shortcut key is pressed to create a new Ledger during voucher entry",
    "emoji": "➕",
    "answers": [
      { "text": "Alt + C" },
      { "text": "Alt + X" },
      { "text": "Alt + D" },
      { "text": "Alt + A" }
    ],
    "correctAnswer": "Alt + C"
  },
  {
    "question": "Which shortcut key is pressed for voucher entry or deleting a ledger?",
    "emoji": "🗑️",
    "answers": [
      { "text": "Alt + A" },
      { "text": "Alt + C" },
      { "text": "Alt + X" },
      { "text": "Alt + D" }
    ],
    "correctAnswer": "Alt + D"
  },
  {
    "question": "Which shortcut key is used to set No in 'Use Common Ledger A/c for Item Allocation'",
    "emoji": "🚫",
    "answers": [
      { "text": "Alt + F11" },
      { "text": "F11" },
      { "text": "Alt + F12" },
      { "text": "F12" }
    ],
    "correctAnswer": "F12"
  },
  {
    "question": "Default invoice mode is on for Sales or Purchase entry. Which key should be pressed for entry of sales or Purchase as a voucher?",
    "emoji": "🧾",
    "answers": [
      { "text": "Alt + V" },
      { "text": "Ctrl + V" },
      { "text": "Alt + F8" },
      { "text": "Alt + F9" }
    ],
    "correctAnswer": "Alt + F8"
  },
  {
    "question": "C++ was developed by _____",
    "emoji": "👨‍💻",
    "answers": [
      { "text": "Thomas Kushz" },
      { "text": "John Kemney" },
      { "text": "Bjarne Stroustrup" },
      { "text": "James Goling" }
    ],
    "correctAnswer": "Bjarne Stroustrup"
  },
  {
    "question": "Which one of the following is a keyword?",
    "emoji": "🔑",
    "answers": [
      { "text": "Size" },
      { "text": "Key" },
      { "text": "Jump" },
      { "text": "Switch" }
    ],
    "correctAnswer": "Switch"
  },
  {
    "question": "_____ is the smallest individual unit in a program.",
    "emoji": "🧱",
    "answers": [
      { "text": "Variable" },
      { "text": "Control" },
      { "text": "Character" },
      { "text": "Token" }
    ],
    "correctAnswer": "Token"
  },
  {
    "question": "What is a constant that contains a single character enclosed within single quotes?",
    "emoji": "'A'",
    "answers": [
      { "text": "Character" },
      { "text": "Numeric" },
      { "text": "Fixed" },
      { "text": "Floating point" }
    ],
    "correctAnswer": "Character"
  },
  {
    "question": "The modulus operator uses _____ character.",
    "emoji": "%",
    "answers": [
      { "text": "+" },
      { "text": "*" },
      { "text": "/" },
      { "text": "%" }
    ],
    "correctAnswer": "%"
  },
  {
    "question": "Which punctuator is used to group a set of C++ statements?",
    "emoji": "{}",
    "answers": [
      { "text": "()" },
      { "text": "[]" },
      { "text": "{}" },
      { "text": "/" }
    ],
    "correctAnswer": "{}"
  },
  {
    "question": "A C++ stream is",
    "emoji": "🌊",
    "answers": [
      { "text": "Associated with a particular class" },
      { "text": "Flow of control through a function" },
      { "text": "A file" },
      { "text": "A flow of data from one place to another" }
    ],
    "correctAnswer": "A flow of data from one place to another"
  },
  {
    "question": "The keyword volatile is used to declare",
    "emoji": "💨",
    "answers": [
      { "text": "Objects that can be modified outside of a program control" },
      { "text": "Absence of a type" },
      { "text": "A member function that is defined in a subclass" },
      { "text": "All of these" }
    ],
    "correctAnswer": "Objects that can be modified outside of a program control"
  },
  {
    "question": "In C language, the break statement causes an exit",
    "emoji": "🛑",
    "answers": [
      { "text": "Only from the innermost switch" },
      { "text": "Only from the innermost loop" },
      { "text": "From all loops and switches" },
      { "text": "From the innermost loop or switch" }
    ],
    "correctAnswer": "From the innermost loop or switch"
  },
  {
    "question": "In a for loop with a multi-statement, loop body semicolons should appear",
    "emoji": ";",
    "answers": [
      { "text": "The test expression" },
      { "text": "Each statement within the loop body" },
      { "text": "The closing brace in a multi-statement loop body" },
      { "text": "Both (a) and (b)" }
    ],
    "correctAnswer": "Each statement within the loop body"
  },
  {
    "question": "In C++, which operator is used to resolve the scope of a variable or function?",
    "emoji": "::",
    "answers": [
      { "text": "::" },
      { "text": "#" },
      { "text": "->" },
      { "text": "%" }
    ],
    "correctAnswer": "::"
  }
];
