const Datafile2 = {
   
    version: 'http://ipuz.org/v1',
    kind: ['http://ipuz.org/crossword#1'],
   
    dimensions: { width: 15, height: 15},
    puzzle : [
      [1, 0, 0, 0, 2, '#', 3, 4, 5, '#', 6, 7, 8, 9, 10],
      [11, 0, '#', '#', 0, 12, 0, 0, 0, '#', 0, 0, 0, 0, 0],
      [
        13, 0, 0, { cell: 0, style: { shapebg: 'circle' } }, '#',
        0, { cell: 0, style: { shapebg: 'circle' } }, 0, '#', '#', 
        '#', 0, '#', 0, 0
      ],
      [
        '#', 14, 0, 0, '#', '#', '#', '#', '#', '#', '#', 
        { cell: 0, style: { shapebg: 'circle' } }, '#', 0, 0
      ],
      ['#', 15, 0, 0, '#', 16, 0, 0, '#', 17, 0, '#', 0, '#', '#'],
      [18, 19, 0, 20, '#', 21, 0, 0, 0, '#', 22, 0, 0, '#', 23],
      [0, 0, 24, 0, '#', 25, 0, 0, 0, 0, '#', '#', '#', 26, 0],
      [
        0, '#', 0, { cell: 0, style: { shapebg: 'circle' } }, '#',
        27, 0, '#', '#', 28, 0, { cell: 0, style: { shapebg: 'circle' } }, '#', 0, 0
      ],
      ['#', '#', 0, 29, 30, '#', 31, 0, 0, '#', '#', '#', '#', 0, 0],
      [32, 0, '#', '#', 0, '#', '#', 33, 0, 0, 0, '#', 34, 0, '#'],
      [35, 0, 0, 0, '#', 36, 37, 0, 0, 0, '#', '#', '#', '#', '#'],
      [38, 0, 0, 0, '#', '#', 0, '#', '#', 39, 0, '#', 40, 0, '#'],
      [
        '#', 41, 0, { cell: 0, style: { shapebg: 'circle' } }, 0,
        '#', 0, 42, { cell: 0, style: { shapebg: 'circle' } }, 0,
        { cell: 0, style: { shapebg: 'circle' } }, '#', 0, '#', 43
      ],
      [44, 0, 0, 0, '#', '#', 0, '#', 0, '#', 45, 0, 0, '#', 0],
      [46, 0, 0, 0, '#', '#', '#', '#', 0, '#', '#', '#', 47, 0, 0],
    ],
    
     clues : {
      Across: [
        [1, 'Create a new Directory'],
        [3, 'Display a Calender'],
        [6, 'Change file Permission'],
        [11, "Schedules a delayed command"],
        [13, 'Set a priority of a command or job'],
        [14, 'Perform arthmetic on shell variables '],
        [15, "Secure Copy (remote the file"],
        [16, 'Copy files between two machine'],
        [17, ' Print user and group id'],
        [18, 'Test a network Connection'],
        [21, 'Display Message on Screen'],
        [22, 'List Process running on the system'],
        [25, 'Change file timestamps'],
        [27, 'Estimate file Space usage'],
        [28, 'Open a Vim Editor'],
        [29, 'Process status'],
        [31, 'Briefly list directory content'],
        [32, 'Substitute user identity'],
        [33, 'Upload local repository changes to a remote repository '],
        [34, 'List Directory Content in a detailed Format'],
        [35, 'Sort text files'],
        [36, 'Remove folders'],
        [38, 'Interactive process viewer'],
        [39, 'Display free disk space'],
        [40, 'Change Directory'],
        [41, 'Display or change the Date & Time'],
        [42, 'Compress file'],
        [44, 'Search file in a directory hierarchy'],
        [45, 'Manipulate shell variables and functions '],
        [46, 'Display help for a built-in command'],
        [47, 'Environment variables'],
        
      ],
    
      Down: [
        [1, 'Help manual'],
        [2, 'Remove files or directory'],
        [3, 'Compare two files'],
        [4, 'Search for install Software packages'],
        [5, "List Information about file"],
        [6, "Copy one or more files to another location"],
        [7, 'Output the first part of file'],
        [8, "Move or Rename files or directories"],
        [9, "Open a file in its default Application."],
        [10, 'Display the differences between two file'],
        [12, 'vi to change or rewrite data'],
        [18, 'Print Working Directory,Construction rod'],
        [19, 'Conditionality perform a command'],
        [20, 'Search file for lines that match a given pattern'],
        [23, 'Output the last part of a file'],
        [24, "Devide a file into several parts"],
        [26, "Kill a Process by specifying its PID"],
        [30, 'Socket Statistics'],
    
        [37, 'Display Output one Screen at a time'],
        [40, 'Concatenate and print (Display) the content of file'],
        [43, 'Reverse lines of a file'],
      ],
    },
    
     solution : [
      ['M', 'K', 'D', 'I', 'R', '#', 'C', 'A', 'L', '#', 'C', 'H', 'M', 'O', 'D'],
      ['A', 'T', '#', '#', 'M', 'V', 'M', 'P', 'S', '#', 'P', 'E', 'V', 'P', 'I'],
      ['N', 'I', 'C', 'E', '#', 'I', 'P', 'T', '#', '#', '#', 'A', '#', 'E', 'F'],
      ['#', 'L', 'E', 'T', '#', '#', '#', '#', '#', '#', '#', 'D', '#', 'N', 'F'],
      ['#', 'S', 'C', 'P', '#', 'R', 'C', 'P', '#', 'I', 'D', '#', '#', '#', '#'],
      ['P', 'I', 'N', 'G', '#', 'E', 'C', 'H', 'O', '#', 'T', 'O', 'P', '#', 'T'],
      ['W', 'F', 'C', 'R', '#', 'T', 'O', 'U', 'C', 'H', '#', '#', '#', 'K', 'A'],
      ['D', '#', 'U', 'E', '#', 'D', 'U', '#', '#', 'V', 'I', 'M', '#', 'I', 'I'],
      ['#', '#', 'T', 'P', 'S', '#', 'D', 'I', 'R', '#', '#', '#', '#', 'L', 'L'],
      ['S', 'U', '#', '#', 'S', '#', '#', 'P', 'U', 'S', 'H', '#', 'L', 'L', '#'],
      ['S', 'O', 'R', 'T', '#', 'R', 'M', 'D', 'I', 'R', '#', '#', '#', '#', '#'],
      ['H', 'T', 'O', 'P', '#', '#', 'O', '#', '#', 'D', 'F', '#', 'C', 'D', '#'],
      ['#', 'D', 'A', 'T', 'E', '#', 'R', 'G', 'Z', 'I', 'P', '#', 'A', '#', 'R'],
      ['F', 'I', 'N', 'D', '#', '#', 'E', '#', '#', '#', 'S', 'E', 'T', '#', 'E'],
      ['H', 'E', 'L', 'P', '#', '#', '#', '#', '#', '#', '#', '#', 'E', 'N', 'V'],
    ]
    
  };

  export default Datafile2;

     
   
    
  