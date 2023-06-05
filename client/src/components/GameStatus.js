const GameStatus = () => {

    // Game Logic
    
    const [movieGuess, setMovieGuess] = useState('');
    const [remainingGuesses, setRemainingGuesses] = useState(3);
    const [roundOver, setRoundOver] = useState(false);
    const [totalScore, setTotalScore] = useState(0);

    const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] = useState(false);
    const [isGameoverModalOpen, setIsGameoverModalOpen] = useState(false);

    const handleOpenCongratulationsModal = () => {
        setIsCongratulationsModalOpen(true);
    };
    const handleCloseCongratulationsModal = () => {
        setIsCongratulationsModalOpen(false);
    };
    const handleOpenGameoverModal = () => {
        setIsGameoverModalOpen(true);
    };
    const handleCloseGameoverModal = () => {
        setIsGameoverModalOpen(false);
    };
    
    const handleMovieGuess = () => {
        if (movieGuess === targetMovie) {
        // User guessed correctly
        // Can change the Game over function?
        setTotalScore(totalScore + 1)
        setRoundOver(true);
        handleOpenCongratulationsModal()

        } else {
        // User guessed incorrectly
        setRemainingGuesses(remainingGuesses - 1);
        setMovieGuess('');
    
        if (remainingGuesses === 1) {
            // No more remaining guesses, game over
            setRoundOver(true);
            handleOpenGameoverModal()
        }
    };

    // Game Logic end


    // This can be changed to the input bar with a list of options
    return (
        <>
        <h2>This is the GameStatus (contains ScoreLabel and QuestionLabel)</h2>
        <div>
      {roundOver ? (<h1>Game Over!</h1>) : (
        <>
          <h1>Guess the correct Movie:</h1>
          <select
            value={movieGuess}
            onChange={(event) => setMovieGuess(event.target.value)}
            disabled={gameOver}
          >
            <option value="">Select an option</option>
            {movies.map((movie) => (
              <option key={movie} value={movie}>
                {movie}
              </option>
            ))}
          </select>
          <button onClick={handleMovieGuess}>Submit</button>
          <p>Remaining Guesses: {remainingGuesses}</p>
          <button onClick={handleOpenCongratulationsModal}>When player wins</button>
          <button onClick={handleOpenGameoverModal}>When player loses</button>

          <PopupModal isOpen={isCongratulationsModalOpen} onClose={handleCloseCongratulationsModal} />
          <PopupModal isOpen={isGameoverModalOpen} onClose={handleCloseGameoverModal} />

        </>
      )}
    </div>
        </>
    );
}}

export default GameStatus;