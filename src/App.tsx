import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';



import Home from './components/pages/Home';
import AboutUs from './components/pages/About';
import ContactUs from './components/pages/Help';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import ipuzData from './data/ipuzData';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';





import Crossword, {
  CrosswordImperative,
  CrosswordGrid,
  CrosswordProps,
  CrosswordProvider,
  CrosswordProviderImperative,
  CrosswordProviderProps,
  DirectionClues,
  useIpuz,
} from '@jaredreisinger/react-crossword';
import styled from 'styled-components';
const data = {
  across: {
    1: {
      clue: 'one plus one',
      answer: 'TWO',
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: 'three minus two',
      answer: 'ONE',
      row: 0,
      col: 2,
    },
  },
};
/*
const ipuzData = {
  origin: 'ipuz example puzzle (from Puzzazz)',
  version: 'http://ipuz.org/v1',
  kind: ['http://ipuz.org/crossword#1'],
  copyright: '2011 Puzzazz',
  author: 'Roy Leban',
  publisher: 'Puzzazz, Inc.',
  title: 'High-Tech Mergers',
  intro:
    'Solve the puzzle, then anagram the circled letters to find an appropriate word.',
  difficulty: 'Easy',
  empty: '0',
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
   
 
  
*/
 


const Page = styled.div`
  padding: 2em;
`;

const Header = styled.h1`
  margin-bottom: 1em;
`;

const Commands = styled.div``;

const Command = styled.button`
  margin-right: 1em;
`;

const CrosswordMessageBlock = styled.div`
  margin: 2em 0 4em;
  display: flex;
  gap: 2em;
  max-height: 20em;
`;



const CrosswordWrapper = styled.div`
  max-width: 30em;

  /* Styling for correct letters and clues */
  .crossword.correct {
    rect {
      stroke: rgb(100, 200, 100) !important;
    }
    svg > rect {
      fill: rgb(100, 200, 100) !important;
    }
    text {
      fill: rgb(100, 200, 100) !important;
    }
  }

  .clue.correct {
    ::before {
      content: '\u2713'; /* Checkmark: ✓ */
      font-size: 28px;
      display: inline-block;
      text-decoration: none;
      color: rgb(100, 200, 100);
      margin-right: 0.25em;
    }
    // text-decoration: line-through;
    color: green;
  }

  /* New styling for incorrect letters or clues */
  .crossword.incorrect {
    rect {
      stroke: rgb(200, 100, 100) !important;
    }
    svg > rect {
      fill: rgb(200, 100, 100) !important;
    }
    text {
      fill: rgb(200, 100, 100) !important;
    }
  }

  .clue.incorrect {
    color: red;
    text-decoration: none; /* No line-through for incorrect clues */
  }
`;


const CrosswordProviderWrapper = styled(CrosswordWrapper)`
  max-width: 50em;
  display: flex;
  gap: 1em;

  .direction {
    width: 10em;

    .header {
      margin-top: 0;
    }
  }

  .grid {
    width: 10em;
  }
`;

const IpuzWrapper = styled(CrosswordProviderWrapper)`
  max-width: 100%;
  .direction {
    width: 25em;
  }
`;

const Messages = styled.pre`
  flex: auto;
  background-color: rgb(230, 230, 230);
  margin: 0;
  padding: 1em;
  overflow: auto;
`;

// in order to make this a more-comprehensive example, and to vet Crossword's
// features, we actually implement a fair amount...

function App() {
  const crossword = useRef<CrosswordImperative>(null);

  const focus = useCallback<React.MouseEventHandler>((event) => {
    crossword.current?.focus();
  }, []);

  const fillOneCell = useCallback<React.MouseEventHandler>((event) => {
    crossword.current?.setGuess(0, 2, 'O');
  }, []);

  const fillAllAnswers = useCallback<React.MouseEventHandler>((event) => {
    crossword.current?.fillAllAnswers();
  }, []);

  const reset = useCallback<React.MouseEventHandler>((event) => {
    crossword.current?.reset();
  }, []);

  // We don't really *do* anything with callbacks from the Crossword component,
  // but we can at least show that they are happening.  You would want to do
  // something more interesting than simply collecting them as messages.
  const messagesRef = useRef<HTMLPreElement>(null);
  const [messages, setMessages] = useState<string[]>([]);

  const clearMessages = useCallback<React.MouseEventHandler>((event) => {
    setMessages([]);
  }, []);

  const addMessage = useCallback((message: string) => {
    setMessages((m) => m.concat(`${message}\n`));
  }, []);

  useEffect(() => {
    if (!messagesRef.current) {
      return;
    }
    const { scrollHeight } = messagesRef.current;
    messagesRef.current.scrollTo(0, scrollHeight);
  }, [messages]);

  // onCorrect is called with the direction, number, and the correct answer.
  const onCorrect = useCallback<Required<CrosswordProps>['onCorrect']>(
    (direction, number, answer) => {
      addMessage(`onCorrect: "${direction}", "${number}", "${answer}"`);
    },
    [addMessage]
  );



  // onLoadedCorrect is called with an array of the already-correct answers,
  // each element itself is an array with the same values as in onCorrect: the
  // direction, number, and the correct answer.
  const onLoadedCorrect = useCallback<
    Required<CrosswordProps>['onLoadedCorrect']
  >(
    (answers) => {
      addMessage(
        `onLoadedCorrect:\n${answers
          .map(
            ([direction, number, answer]) =>
              `    - "${direction}", "${number}", "${answer}"`
          )
          .join('\n')}`
      );
    },
    [addMessage]
  );

  // onCrosswordCorrect is called with a truthy/falsy value.
  const onCrosswordCorrect = useCallback<
    Required<CrosswordProps>['onCrosswordCorrect']
  >(
    (isCorrect) => {
      addMessage(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
    },
    [addMessage]
  );

  // onCellChange is called with the row, column, and character.
  const onCellChange = useCallback<Required<CrosswordProps>['onCellChange']>(
    (row, col, char) => {
      addMessage(`onCellChange: "${row}", "${col}", "${char}"`);
    },
    [addMessage]
  );

  // all the same functionality, but for the decomposed CrosswordProvider
  const crosswordProvider = useRef<CrosswordProviderImperative>(null);

  const focusProvider = useCallback<React.MouseEventHandler>((event) => {
    crosswordProvider.current?.focus();
  }, []);

  const fillOneCellProvider = useCallback<React.MouseEventHandler>((event) => {
    crosswordProvider.current?.setGuess(0, 2, 'O');
  }, []);

  const fillAllAnswersProvider = useCallback<React.MouseEventHandler>(
    (event) => {
      crosswordProvider.current?.fillAllAnswers();
    },
    []
  );

  const resetProvider = useCallback<React.MouseEventHandler>((event) => {
    crosswordProvider.current?.reset();
  }, []);

  // We don't really *do* anything with callbacks from the Crossword component,
  // but we can at least show that they are happening.  You would want to do
  // something more interesting than simply collecting them as messages.
  const messagesProviderRef = useRef<HTMLPreElement>(null);
  const [messagesProvider, setMessagesProvider] = useState<string[]>([]);

  const clearMessagesProvider = useCallback<React.MouseEventHandler>(
    (event) => {
      setMessagesProvider([]);
    },
    []
  );

  const addMessageProvider = useCallback((message: string) => {
    setMessagesProvider((m) => m.concat(`${message}\n`));
  }, []);

  useEffect(() => {
    if (!messagesProviderRef.current) {
      return;
    }
    const { scrollHeight } = messagesProviderRef.current;
    messagesProviderRef.current.scrollTo(0, scrollHeight);
  }, [messagesProvider]);

  // onCorrect is called with the direction, number, and the correct answer.
  const onCorrectProvider = useCallback<
    Required<CrosswordProviderProps>['onCorrect']
  >(
    (direction, number, answer) => {
      addMessageProvider(`onCorrect: "${direction}", "${number}", "${answer}"`);
    },
    [addMessageProvider]
  );

  // onLoadedCorrect is called with an array of the already-correct answers,
  // each element itself is an array with the same values as in onCorrect: the
  // direction, number, and the correct answer.
  const onLoadedCorrectProvider = useCallback<
    Required<CrosswordProviderProps>['onLoadedCorrect']
  >(
    (answers) => {
      addMessageProvider(
        `onLoadedCorrect:\n${answers
          .map(
            ([direction, number, answer]) =>
              `    - "${direction}", "${number}", "${answer}"`
          )
          .join('\n')}`
      );
    },
    [addMessageProvider]
  );

  // onCrosswordCorrect is called with a truthy/falsy value.
  const onCrosswordCorrectProvider = useCallback<
    Required<CrosswordProviderProps>['onCrosswordCorrect']
  >(
    (isCorrect) => {
      addMessageProvider(`onCrosswordCorrect: ${JSON.stringify(isCorrect)}`);
    },
    [addMessageProvider]
  );

  // onCellChange is called with the row, column, and character.
  const onCellChangeProvider = useCallback<
    Required<CrosswordProviderProps>['onCellChange']
  >(
    (row, col, char) => {
      addMessageProvider(`onCellChange: "${row}", "${col}", "${char}"`);
    },
    [addMessageProvider]
  );

  const fromIpuz = useIpuz(ipuzData);

  return (

    
    <Page>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/help" element={<ContactUs />} />
        </Routes>
        
      </Router>
      

      <Header>React-crossword Puzzle With Linux Command</Header>
      <IpuzWrapper>
        <CrosswordProvider data={fromIpuz!} storageKey="ipuz-example">
          <DirectionClues direction="across" />
          <CrosswordGrid />
          <DirectionClues direction="down" />
        </CrosswordProvider>
       </IpuzWrapper>
      
      
   
      <Footer/>
    </Page>
  );
}

export default App;
