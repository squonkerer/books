import React, { useState } from 'react';
import Book from './Book';
import AddBookForm from './AddBookForm';
import newey from './newey.jpg';
import steiner from './steiner.jpg';
import skunk from './skunk.jpg'

function App() {
  const [books, setBooks] = useState([
    { title: "Skunk Works: A Personal Memoir of My Years at Lockheed", 
      author: "Ben R. Rich, Leo Janos", 
      coverUrl: skunk,
      description: "From the development of the U-2 to the Stealth fighter, the never-before-told story behind the high-stakes quest to dominate the skies Skunk Works is the true story of America's most secret & successful aerospace operation. As recounted by Ben Rich, the operation's brilliant boss for nearly two decades, the chronicle of Lockheed's legendary Skunk Works is a drama of cold war confrontations and Gulf War air combat, of extraordinary feats of engineering & achievement against fantastic odds. Here are up-close portraits of the maverick band of scientists & engineers who made the Skunk Works so renowned. Filled with telling personal anecdotes & high adventure, with narratives from the CIA & from Air Force pilots who flew the many classified, risky missions, this book is a portrait of the most spectacular aviation triumphs of the 20th century", 
    },
    { title: "1984", 
      author: "George Orwell", 
      coverUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
      description: "A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality With a foreword by Thomas Pynchon With a foreword by Thomas Pynchon A masterpiece of rebellion and imprisonment where war is peace freedom is slavery and Big Brother is watching View our feature on George Orwell s 1984 Thought Police Big Brother Orwellian These words have entered our vocabulary because of George Orwell s classic dystopian novel 1984 The story of one man s nightmare odyssey as he pursues a forbidden love affair through a world ruled by warring states and a power structure that controls not only information but also individual thought and memory 1984 is a prophetic haunting tale More relevant than ever before 1984 exposes the worst crimes imaginable the destruction of truth freedom and individuality This beautiful paperback edition features deckled edges and french flaps a perfect gift for any occasion", 
    },
    { title: "How To Build A Car", 
      author: "Adrian Newey", 
      coverUrl: newey,
      description: "A true engineering genius, even in adolescence Adrian’s thoughts naturally emerged in shape and form – he began sketching his own car designs at the age of 12 and took a welding course in his school summer holidays. From his early career in IndyCar racing and on to his unparalleled success in Formula One, we learn in comprehensive, engaging and highly entertaining detail how a car actually works. Adrian has designed for the likes of Mario Andretti, Nigel Mansell, Alain Prost, Damon Hill, David Coulthard, Mika Hakkinen, Mark Webber and Sebastian Vettel, always with a shark-like purity of purpose: to make the car go faster. And while his career has been marked by unbelievable triumphs, there have also been deep tragedies; most notably Ayrton Senna’s death during his time at Williams in 1994.", 
    },
    { title: "Surviving to Drive", 
      author: "Guenther Steiner", 
      coverUrl: steiner,
      description: "People talk about football managers being under pressure. Trust me, that's nothing. Pressure is watching one of your drivers hit a barrier at 190mph and exploding before your eyes...'Guenther Steiner is one of motor racing's biggest and most celebrated characters, known to millions for his show-stealing appearances on Netflix's hugely popular fly on the wall series, Drive to Survive .In Surviving to Drive , the Haas team principal takes readers inside his Formula 1 team for the entirety of the 2022 season, giving an unobstructed view of what really takes place behind the scenes. Through this unique lens, Guenther takes us on the thrilling rollercoaster of life at the heart of high stakes motor racing. Packed full of twists and turns, from hiring and firing drivers, balancing books, pre-season preparations, the design, launch and testing of a car - and of course, the race calendar itself - this is the first time that an F1 team has allowed an acting team principal to tell the full story of a whole season.Uncompromising and searingly honest, told in Steiner's inimitable style, this is a fascinating and hugely entertaining account of the realities of running a Formula 1 team.", 
    }
  ]);

  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex === 0 ? books.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex === books.length - 1 ? 0 : prevIndex + 1));
  };

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  
  const handleBookClick = (index) => {
    setCurrentBookIndex(index);
  };

  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h1>List of Books</h1>
          {books.map((book, index) => (
            <div key={index} onClick={() => handleBookClick(index)}>
              <Book title={book.title} author={book.author} />
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <div>
            <h2>Currently Viewing:</h2>
            <h3>{books[currentBookIndex].title}</h3>
            <p>Author: {books[currentBookIndex].author}</p>
            <p>Description: {books[currentBookIndex].description}</p>
            <img 
              src={books[currentBookIndex].coverUrl} 
              alt={books[currentBookIndex].title} 
              style={{ width: '200px', height: '300px' }} 
            />
          </div>
          <div>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
      <div>
        <h2>Add a New Book</h2>
        <AddBookForm onAddBook={addBook} />
      </div>
    </div>
  );
}

export default App;