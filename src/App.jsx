import './App.css'
import { useState } from 'react';
import { differenceInWeeks, formatDistance, getYear } from "date-fns";

import Weeks from './components/layout/weeks/weeks';
import DateManager from './components/feature/date picker/date picker';

function App() {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className='app-container'>

        <aside>
          <h1>One step more</h1>

          <DateManager startDate={startDate} setStartDate={setStartDate}
            oldest={getYear(new Date())} />

          <span>
            {`${formatDistance(startDate, new Date())}`}
          </span>

          <p>
            Every day is one step more close to the end.
            This graph is an aproximation to the expectaion of human life.
            Please, live and enjoy every second.
          </p>

        </aside>

        <main>
          <Weeks livedWeeks={differenceInWeeks(
            new Date(), startDate
          )} />
        </main>

      </div>

      <footer>

          <div className='links'>
            <h3>Resources</h3>

            <a href="https://date-fns.org/">
              Date fns
            </a>

            <a href="https://reactdatepicker.com/">
              React date picker
            </a>
          </div>

          <div className='links'>
            <h3>Contact</h3>

            <a href="https://github.com/k20013">
              Github
            </a>

            <a href="https://caleb-bravo-personal-portfolio.vercel.app/">
              Portfolio
            </a>
          </div>

          <a href="https://github.com/k20013/one-step-more">Repository</a>

        <span>Caleb Bravo 2024</span>
      </footer>
    </>
  )
}

export default App
